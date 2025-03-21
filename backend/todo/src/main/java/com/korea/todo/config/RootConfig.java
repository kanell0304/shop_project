package com.korea.todo.config;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RootConfig {

    // 창고(=Container) 내에서 누구든지 사용 가능하도록 등록
    @Bean
    public ModelMapper getMapper(){
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration()
                .setFieldMatchingEnabled(true)
                .setFieldAccessLevel(org.modelmapper.config.Configuration.AccessLevel.PRIVATE)
                .setMatchingStrategy(MatchingStrategies.LOOSE); // 매칭전략

        /*
            setFieldMatchingEnabled = true
                - 엔티티(table)과 DTO를 getter / setter 이름 기준으로 매핑해줌

            setFieldAccessLevel
                - 접근제한자 관계없이 필드에 접근 가능하도록 설정한 상태
                - private 필드도 매핑 가능함

            setMatchingStrategy
            STRICT : 필드 이름과 타입이 완벽히 일치해야 매핑.
            STANDARD : 적덩히 유사하면 매핑(기본값)
            LOOSE : 필드 으림이 조금만 유사해도
         */

        return modelMapper;
    }
}
