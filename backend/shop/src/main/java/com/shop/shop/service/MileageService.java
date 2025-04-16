package com.shop.shop.service;

import com.shop.shop.dto.MileageDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;
import java.util.List;

public interface MileageService {

    public List<MileageDTO> findAllByMemberId(Long memberId);
    public Page<List<MileageDTO>> findAllByMemberId(Pageable pageable, Long memberId);
    public List<MileageDTO> findAllByMemberEmail(String email);
    public Page<List<MileageDTO>> findAllByMemberEmail(Pageable pageable, String email);
    public List<MileageDTO> findAllByOrderId(Long orderId);
    public Page<List<MileageDTO>> findAllByOrderId(Pageable pageable, Long orderId);
    public MileageDTO createMileage(MileageDTO mileageDTO);
    public void deleteMileageById(Long mileageId);
    public List<MileageDTO> findByDuringPeriod(LocalDateTime mileageDate1, LocalDateTime mileageDate2);
    public Page<List<MileageDTO>> findByDuringPeriod(Pageable pageable, LocalDateTime mileageDate1, LocalDateTime mileageDate2);
    public List<MileageDTO> findByDuringPeriodFromMemberId(Long memberId, LocalDateTime mileageDate1, LocalDateTime mileageDate2);
    public Page<List<MileageDTO>> findByDuringPeriodFromMemberId(Pageable pageable, Long memberId, LocalDateTime mileageDate1, LocalDateTime mileageDate2);

}
