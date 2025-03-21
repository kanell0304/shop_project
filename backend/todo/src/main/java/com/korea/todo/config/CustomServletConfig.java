package com.korea.todo.config;

import com.korea.todo.common.util.fommter.LocalDateFormatter;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CustomServletConfig implements WebMvcConfigurer {

    @Override
    public void addFormatters(FormatterRegistry registry){
        registry.addFormatter(new LocalDateFormatter());
    }

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("HEAD", "GET", "POST", "PUT", "DELETE", "OPTIONS")
                .maxAge(300)
                .allowedHeaders("Authorization", "Cache-Control", "Content-Type");
    }
}
/*
    addMapping("/**") : CORS 설정을 적용할 URL 경로 지정 - "/**" 모든 출처에 접속 허용
    allowedOrigins("*") : 모든 출처에서 요청 허용한다
    allowedMethods : 서버가 허용할 메서드 목록
        - OPTIONS : Preflight 브라우저가 CORS 허용 여부를 확인하기 위해 사전에 보내는 요청
    maxAge(300) : CORS 요청의 Preflight 요청 결과를 브라우저가 최대 00 시간 동안 캐싱(저장)
        - ex ) 5분 동안 Preflight요청 없이, 바로 본 요청을 처리할 수 있다.
    allowedHeaders : 서버가 허용할 요청 헤더 지정
*/