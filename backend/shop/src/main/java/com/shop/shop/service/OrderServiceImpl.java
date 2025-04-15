package com.shop.shop.service;

import com.shop.shop.domain.member.Member;
import com.shop.shop.domain.order.Order;
import com.shop.shop.domain.order.OrderStatus;
import com.shop.shop.dto.OrderDTO;
import com.shop.shop.repository.DeliveryRepository;
import com.shop.shop.repository.MemberRepository;
import com.shop.shop.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final DeliveryRepository deliveryRepository;
    private final MemberRepository memberRepository;

    // 주문서 작성(등록)
//    @Override
    public  OrderDTO registerOrder(OrderDTO orderDTO) {
        Member member = memberRepository.findById(orderDTO.getId()).orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));
        Order order = Order.builder()
                .member(member)
                .orderDate(LocalDateTime.now())
                .totalAmount(orderDTO.getTotalAmount())
                .orderStatus(OrderStatus.PENDING)
                .delFlag(false)
                .payerName(member.getMemberName())
                .payerNumber(member.getPhoneNumber())
                .orderRequest(orderDTO.getOrderRequest())
                .paymentMethod(orderDTO.getPaymentMethod())
                .recipientName(orderDTO.getRecipientName())
                .recipientNumber(orderDTO.getRecipientNumber())
                .recipient_zip_code(orderDTO.getRecipient_zip_code())
                .recipient_default_address(orderDTO.getRecipient_default_address())
                .recipient_detailed_address(orderDTO.getRecipient_detailed_address())
                .build();

        return new OrderDTO(orderRepository.save(order));
    }


    // 회원 이메일로 주문 모두 조회
    @Override
    public List<OrderDTO> findAllByMemberEmail(String email) {
        Member member = memberRepository.findByEmail(email);
        if (member == null) {
            throw new RuntimeException("해당 회원을 찾을 수 없습니다.");
        }

        List<OrderDTO> orderList = orderRepository.findAllByMemberId(member.getId());
        if (orderList == null || orderList.isEmpty()) {
            throw new RuntimeException("해당 회원의 주문이 존재하지 않습니다.");
        }

        return orderList;
    }

    // 특정 기간동안 데이터 조회
    @Override
    public List<OrderDTO> findByDuringPeriod(LocalDateTime orderDate1, LocalDateTime orderDate2) {
        List<OrderDTO> duringPeriodList = orderRepository.findByDuringPeriod(orderDate1, orderDate2);
        if (duringPeriodList == null || duringPeriodList.isEmpty()) {
            throw new RuntimeException("해당 기간동안 조회되는 데이터가 없습니다.");
        }
        return duringPeriodList;
    }

    // 특정 기간동안 특정회원의 데이터 조회
    @Override
    public List<OrderDTO> findByDuringPeriodFromMemberId(Long memberId, LocalDateTime orderDate1, LocalDateTime orderDate2) {
        List<OrderDTO> duringPeriodFromMemberEmail = orderRepository.findByDuringPeriodFromMemberId(memberId, orderDate1, orderDate2);
        if (duringPeriodFromMemberEmail == null || duringPeriodFromMemberEmail.isEmpty()) {
            throw new RuntimeException("해당 회뭔의 해당 기간동안 조회되는 데이터가 없습니다.");
        }
        return duringPeriodFromMemberEmail;
    }
}
