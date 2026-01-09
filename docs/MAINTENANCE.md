# 사이트 유지보수 가이드

## 1. 배포 파이프라인

```
GitHub (master 브랜치) → Cloudflare Worker → 라이브 사이트
```

- **자동화**: `master`에 푸시하면 Cloudflare Pages 빌드가 자동 실행됨
- **빌드 시간**: 약 2분
- **프리뷰 빌드**: master가 아닌 브랜치는 프리뷰 URL 생성 (예: `{BRANCH}.omixai-com.pages.dev`)

변경사항 배포 방법:
1. `master` 브랜치에 푸시
2. Cloudflare가 자동으로 빌드 및 배포
3. [Cloudflare Dashboard](https://dash.cloudflare.com)에서 빌드 상태 확인

## 2. PagesCMS로 콘텐츠 편집하기

### 접속
1. 관리자에게 계정/접근 권한 요청
2. [app.pagescms.org/sooheon/omixai-com](https://app.pagescms.org) 접속
3. 초대받은 이메일로 로그인
4. `omixai-com` 저장소 선택

### 브랜치 사용 (권장)

라이브 배포 전 변경사항을 미리보려면 `master`에서 직접 편집하지 말 것:

**브랜치 생성:**
1. PagesCMS에서 사이드바 상단의 저장소 이름 클릭
2. 브랜치 드롭다운에 새 브랜치명 입력 (예: `content-update`)
3. PagesCMS가 브랜치를 생성하고 해당 브랜치로 전환됨

**콘텐츠 편집:**
1. PagesCMS에서 변경사항 작업
2. 저장 (master가 아닌 해당 브랜치에 커밋됨)
3. Cloudflare가 `[브랜치명].omixai-com.pages.dev`에 프리뷰 빌드
4. 프리뷰 URL에서 확인

**준비되면 병합:**
1. [GitHub](https://github.com/sooheon/omixai-com) 접속
2. 해당 브랜치의 "Compare & pull request" 클릭
3. 변경사항 검토 후 "Merge pull request"
4. 병합 후 브랜치 삭제 (정리 목적)

또는 명령줄에서:
```bash
git checkout master
git merge [브랜치명]
git push
git branch -d [브랜치명]
git push origin --delete [브랜치명]
```

### 직접 편집 (간단한 수정)

단순한 수정은 `master`에서 직접 편집 가능:
1. PagesCMS에서 `master` 브랜치인지 확인
2. 편집 후 저장
3. Cloudflare 빌드 후 라이브 반영 (약 2분)

## 3. Analytics
Cloudflare 대쉬보드에서 기본적인 접속자 분석 가능. 

![site analytics](site_analytics.png)

## 4. 서비스 및 계정 체크리스트

| 서비스 | 용도 | URL | 로그인 |
|--------|------|-----|--------|
| **GitHub** | 코드 및 콘텐츠 호스팅 | [github.com/sooheon/omixai-com](https://github.com/sooheon/omixai-com) | @sooheon |
| **Cloudflare** | 호스팅, DNS, 빌드 | [dash.cloudflare.com](https://dash.cloudflare.com) | shk@omixai.com |
| **PagesCMS** | 시각적 콘텐츠 편집기 | [app.pagescms.org](https://app.pagescms.org) | GitHub OAuth (@sooheon) |
| **Google Search Console** | SEO, 사이트맵 | [search.google.com/search-console](https://search.google.com/search-console) | omixai0612 |
| **Naver Search Advisor** | 한국 SEO | [searchadvisor.naver.com](https://searchadvisor.naver.com) | omixai@omixai.com |

### 도메인 및 DNS
- 도메인 등록: GoDaddy
- DNS, SSL, CDN: Cloudflare에서 관리

### 모니터링
- 빌드 상태: Cloudflare Dashboard → Pages → omixai-com
- 빌드 URL: https://omixai-com.shk-f5b.workers.dev