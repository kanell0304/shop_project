# Step 1: Node.js 22.12.0 이미지 사용
FROM node:22.12.0

# Step 2: 작업 디렉토리 설정
WORKDIR /app

# Step 3: package.json과 package-lock.json 복사
COPY frontend/shop/package.json frontend/shop/package-lock.json ./

# Step 4: 의존성 설치
RUN npm install

# Step 5: 소스 코드 복사
COPY frontend/shop/ .

# Step 6: React 애플리케이션 빌드
RUN npm run build

# Step 7: 애플리케이션 실행
CMD ["npm", "start"]

# Step 8: 포트 노출 (React 애플리케이션 기본 포트)
EXPOSE 3000