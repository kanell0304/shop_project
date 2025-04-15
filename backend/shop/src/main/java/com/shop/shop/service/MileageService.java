package com.shop.shop.service;

import com.shop.shop.dto.MileageDTO;

import java.time.LocalDateTime;
import java.util.List;

public interface MileageService {

    public List<MileageDTO> findAllByMemberId(Long memberId);
    public List<MileageDTO> findAllByMemberEmail(String email);
    public List<MileageDTO> findAllByOrderId(Long orderId);
    public MileageDTO createMileage(MileageDTO mileageDTO);
    public void deleteMileageById(Long mileageId);
    public List<MileageDTO> findByDuringPeriod(LocalDateTime mileageDate1, LocalDateTime mileageDate2);
    public List<MileageDTO> findByDuringPeriodFromMemberId(Long memberId, LocalDateTime mileageDate1, LocalDateTime mileageDate2);

}
