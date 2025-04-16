import React, { useState } from 'react';

const AddressSearch = ({ onComplete }) => {
  const [localAddress, setLocalAddress] = useState({
    zip_code: '',
    default_address: '',
    detailed_address: ''
  });

  const handleSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        const newAddress = {
          zip_code: data.zonecode,
          default_address: data.roadAddress || data.jibunAddress,
          detailed_address: ''
        };
        setLocalAddress(newAddress);
        if (onComplete) onComplete(newAddress);
      }
    }).open();
  };

  const handleDetailChange = (e) => {
    const detail = e.target.value;
    const updated = {
      ...localAddress,
      detailed_address: detail
    };
    setLocalAddress(updated);
    if (onComplete) onComplete(updated); // 상세주소 바뀔 때도 전체 전달
  };

  return (
    <ul className="address-search">
      <li>
        <input
          type="text"
          name="zip_code"
          placeholder="우편번호"
          value={localAddress.zip_code}
          readOnly
        />
        <button type="button" onClick={handleSearch}>주소 검색</button>
      </li>
      <li>
        <input
          type="text"
          name="default_address"
          placeholder="기본 주소"
          value={localAddress.default_address}
          readOnly
        />
      </li>
      <li>
        <input
          type="text"
          name="detailed_address"
          placeholder="상세 주소 입력"
          value={localAddress.detailed_address}
          onChange={handleDetailChange}
        />
      </li>
    </ul>
  );
};

export default AddressSearch;
