package com.shop.shop.service;

import com.shop.shop.domain.cart.WishList;
import com.shop.shop.domain.item.Item;
import com.shop.shop.domain.item.ItemImage;
import com.shop.shop.domain.item.ItemInfo;
import com.shop.shop.domain.item.ItemOption;
import com.shop.shop.domain.member.Member;
import com.shop.shop.dto.ItemDTO;
import com.shop.shop.dto.ItemOptionDTO;
import com.shop.shop.dto.WishListDTO;
import com.shop.shop.repository.*;
import com.shop.shop.util.CustomFileUtil;
import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
//@Getter
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;
    private final ItemImageRepository itemImageRepository;
    private final ItemOptionRepository itemOptionRepository;
    private final CustomFileUtil fileUtil;
    private final WishListRepository wishListRepository;
    private final MemberRepository memberRepository;

    @Getter
    private Item savedItem;

    // 아이템 등록
//    @Transactional
    @Override
    public ItemDTO createItem(ItemDTO itemDTO, List<MultipartFile> files, Long categoryId) {
        Item item = Item.builder()
                .name(itemDTO.getName())
                .description(itemDTO.getDescription())
                .totalScore(itemDTO.getTotalScore())
                .price(itemDTO.getPrice())
                .discountRate(itemDTO.getDiscountRate())
                .delFlag(false)
                .dueDate(LocalDateTime.now())
                .salesVolume(0)
                .build();

        // 아이템 저장
        savedItem = itemRepository.save(item);

        // 옵션 저장
        if (itemDTO.getOptions() != null) {
            List<ItemOption> options = itemDTO.getOptions().stream()
                    .map(optionDTO -> ItemOption.builder()
                            .optionName(optionDTO.getOptionName())
                            .optionValue(optionDTO.getOptionValue())
                            .optionPrice(optionDTO.getOptionPrice())
                            .stockQty(optionDTO.getStockQty())
                            .itemId(item.getId()) // 연관된 Item ID 설정
                            .build())
                    .toList();
            itemOptionRepository.saveAll(options);
        }

        // 인포 저장
        if (itemDTO.getInfo() != null) {
            List<ItemInfo> infoList = itemDTO.getInfo().entrySet().stream()
                    .map(entry -> new ItemInfo(entry.getKey(), entry.getValue()))
                    .toList();
            item.getInfo().addAll(infoList);
        }

        // 이미지 저장
        if (files != null && !files.isEmpty()) {
            List<String> uploadFileNames = fileUtil.saveFiles(files);
            List<ItemImage> images = uploadFileNames.stream()
                    .map(fileName -> ItemImage.builder()
                            .fileName(fileName)
                            .itemId(item.getId()) // 연관된 Item ID 설정
                            .build())
                    .toList();
            itemImageRepository.saveAll(images);
        }

        return new ItemDTO(item, item.getImages(), item.getOptions(), item.getInfo());
    }

    // 페이징 조회 - 목록+이미지
    @Override
    public Page<ItemDTO> getAllItems(Pageable pageable) {
        Page<Item> itemPage = itemRepository.findAllWithImages(pageable);

        return itemPage.map(item -> {
            List<ItemImage> images = item.getImages();
            ItemImage representativeImage = (images != null && !images.isEmpty())
                    ? images.get(0)
                    : ItemImage.builder().fileName("default.png").build();

            return new ItemDTO(item, List.of(representativeImage));
        });
    }

    // 1개 데이터 조회 - 아이템+이미지+인포+옵션
    @Override
    public ItemDTO getOne(Long id) {
        Item item = itemRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 상품이 존재하지 않습니다. ID: " + id));

        // 개별적으로 연관 데이터를 가져옴
        List<ItemImage> images = itemImageRepository.findByItemId(id);
        List<ItemOption> options = itemOptionRepository.findByItemId(id);
        return new ItemDTO(item, images, options, item.getInfo());
    }

    // 이미지만 조회
    @Override
    public ResponseEntity<Resource> getImageUrlByFileName(String fileName) {
        Optional<ItemImage> image = itemImageRepository.findByFileName(fileName);
                if (image.isEmpty()) {
                    return null;
                }
        return fileUtil.getFile(fileName);
    }

    // 모든 상품 조회(상품 + 이미지 + 옵션)
    @Override
    public Page<ItemDTO> getAllItemsWithImageAndOptions(Pageable pageable) {
        Page<Item> itemPage = itemRepository.findAllWithImagesAndOptions(pageable);

        return itemPage.map(item -> {
            List<ItemImage> images = item.getImages();
            ItemImage representativeImage = (images != null && !images.isEmpty())
                    ? images.get(0)
                    : ItemImage.builder().fileName("default.png").build();
            return new ItemDTO(item, List.of(representativeImage));
        });
    }

    // 아이템 정보 수정
    @Override
    public ItemDTO updateItem(Long id, ItemDTO itemDTO) {
        Item item = itemRepository.findById(id).orElseThrow();
//        ItemOption itemOption = itemOptionRepository.findById(id).orElseThrow();

        if (itemDTO.getName() != null) {
            item.changeName(itemDTO.getName());
        }

        item.changeDelFlag(itemDTO.isDelFlag());

        // 인포
        if (itemDTO.getInfo() != null) {
            item.getInfo().clear();
            itemDTO.getInfo().forEach((key, value) -> {
                item.addInfo(new ItemInfo(key, value));
            });
        }

        // 옵션
        if (itemDTO.getOptions() != null) {
            item.getOptions().clear(); // 기존 옵션 삭제

            List<ItemOption> updatedOptions = itemDTO.getOptions().stream()
                    .map(optionDTO -> ItemOption.builder()
                            .optionName(optionDTO.getOptionName())
                            .optionValue(optionDTO.getOptionValue())
                            .optionPrice(optionDTO.getOptionPrice())
                            .stockQty(optionDTO.getStockQty())
                            .itemId(item.getId())
                            .build())
                    .toList();

            item.getOptions().addAll(updatedOptions); // 새로운 옵션 추가
        }

        // 이미지
        if (itemDTO.getUploadFileNames() != null) {
            item.clearList(); // 이미지를 비우는 것
            itemDTO.getUploadFileNames().forEach(fileName -> {
                item.addImage(ItemImage.builder().fileName(fileName).build());
            });
        }

        itemRepository.save(item);

        return new ItemDTO(item, item.getImages(), item.getOptions(), item.getInfo());
    }

    // 논리적 삭제
    @Override
    public void deleteItem(Long id) {
        Item item = itemRepository.findById(id).orElseThrow();
        item.changeDelFlag(true);
        itemRepository.save(item);
    }

}
