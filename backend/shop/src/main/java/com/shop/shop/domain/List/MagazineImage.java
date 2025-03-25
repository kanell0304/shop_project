package com.shop.shop.domain.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MagazineImage {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "magazine_image_id")
    private Long id;

    private String fileName;

    @Setter
    private int ord;

    @Column(name = "magazine_id")
    private Long magazineId;

}
