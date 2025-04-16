package com.shop.shop.service;

import com.shop.shop.domain.delivery.Delivery;
import com.shop.shop.domain.member.Member;
import com.shop.shop.domain.order.Order;
import com.shop.shop.domain.order.OrderStatus;
import com.shop.shop.dto.OrderDTO;
import com.shop.shop.repository.DeliveryRepository;
import com.shop.shop.repository.MemberRepository;
import com.shop.shop.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final DeliveryRepository deliveryRepository;

    // 주문서 작성(등록)
    @Override
    public  OrderDTO createOrder(OrderDTO orderDTO) {
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
    public List<OrderDTO> findAllByMemberId(Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));

        List<OrderDTO> orderList = orderRepository.findAllByMemberId(member.getId());
        if (orderList == null || orderList.isEmpty()) {
            throw new RuntimeException("해당 회원의 주문이 존재하지 않습니다.");
        }

        return orderList;
    }

    // 회원 이메일로 주문 모두 조회(페이징)
    @Override
    public Page<List<OrderDTO>> findAllByMemberId(Pageable pageable, Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));

        Page<List<OrderDTO>> orderList = orderRepository.findAllByMemberId(pageable, member.getId());
        if (orderList == null || orderList.isEmpty()) {
            throw new RuntimeException("해당 회원의 주문이 존재하지 않습니다.");
        }

        return orderList;
    }

    // 배송Id를 기준으로 주문 내역 조회
    @Override
    public OrderDTO findByDeliveryId(Long deliveryId) {
        Delivery delivery = deliveryRepository.findById(deliveryId).orElseThrow(() -> new RuntimeException("해당 배송정보를 찾을 수 없습니다."));
        OrderDTO getOrder = orderRepository.findByDeliveryId(delivery.getId());
        if (getOrder == null) {
            throw new RuntimeException("해당 배송과 관련된 주문을 찾을 수 없습니다.");
        }
        return getOrder;
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

    // 특정 기간동안 데이터 조회(페이징)
    @Override
    public Page<List<OrderDTO>> findByDuringPeriod(Pageable pageable, LocalDateTime orderDate1, LocalDateTime orderDate2) {
        Page<List<OrderDTO>> duringPeriodList = orderRepository.findByDuringPeriod(pageable, orderDate1, orderDate2);
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

    // 특정 기간동안 특정회원의 데이터 조회(페이징)
    @Override
    public Page<List<OrderDTO>> findByDuringPeriodFromMemberId(Pageable pageable, Long memberId, LocalDateTime orderDate1, LocalDateTime orderDate2) {
        Page<List<OrderDTO>> duringPeriodFromMemberEmail = orderRepository.findByDuringPeriodFromMemberId(pageable, memberId, orderDate1, orderDate2);
        if (duringPeriodFromMemberEmail == null || duringPeriodFromMemberEmail.isEmpty()) {
            throw new RuntimeException("해당 회뭔의 해당 기간동안 조회되는 데이터가 없습니다.");
        }
        return duringPeriodFromMemberEmail;
    }

    // 배송지 수정
    @Override
    public OrderDTO editOrder(OrderDTO orderDTO) {
        Order order = orderRepository.findById(orderDTO.getId()).orElseThrow(() -> new RuntimeException("해당 주문을 찾을 수 없습니다."));
        order.changeRecipient_zip_code(orderDTO.getRecipient_zip_code());
        order.changeRecipient_default_address(orderDTO.getRecipient_default_address());
        order.changeRecipient_detailed_address(orderDTO.getRecipient_detailed_address());
        Order changedOrder = orderRepository.save(order);
        return new OrderDTO(changedOrder);
    }

    // 주문 상태 수정
    @Override
    public OrderDTO editOrderStatus(OrderDTO orderDTO) {
        Order order = orderRepository.findById(orderDTO.getId()).orElseThrow(() -> new RuntimeException("해당 주문을 찾을 수 없습니다."));
        if (orderDTO.getOrderStatus() == OrderStatus.PENDING || orderDTO.getOrderStatus() == OrderStatus.PAID || orderDTO.getOrderStatus() == OrderStatus.PREPARING) {
            order.changeOrderStatus(orderDTO.getOrderStatus());
            Order editedOrder = orderRepository.save(order);
            return new OrderDTO(editedOrder);
        } else {
            throw new RuntimeException("배송지를 수정할 수 있는 상태가 아닙니다.");
        }
    }

    // 주문 삭제
    @Override
    public void deleteOrder(Long orderId) {
        Order deleteOrder = orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("해당 주문을 찾을 수 없습니다."));
        deleteOrder.changeDelFlag(true);
        orderRepository.save(deleteOrder);
    }
}
