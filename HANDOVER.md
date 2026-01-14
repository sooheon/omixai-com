# OmixAI 웹사이트 - 인수인계서

> **사이트:** https://www.omixai.com
> **최종 수정일:** 2026-01-14

---

## 1. 계정 및 접근 권한

### 필요한 계정

| 서비스 | 용도 | URL |
|--------|------|-----|
| **GitHub** | 코드 저장소 | https://github.com/sooheon/omixai-com |
| **Cloudflare** | 호스팅 및 배포 | https://dash.cloudflare.com |
| **PagesCMS** | 콘텐츠 편집 | https://pagescms.org |
| **EmailJS** | 문의 폼 이메일 발송 | https://www.emailjs.com |
| **Google Search Console** | SEO 모니터링 | https://search.google.com/search-console |
| **Naver Search Console** | 한국 SEO | https://searchadvisor.naver.com |

### 접근 권한 요구사항

- **GitHub:** 저장소 협력자(collaborator) 권한 필요
- **Cloudflare:** Pages 프로젝트 접근 권한 필요
- **PagesCMS:** GitHub 계정으로 로그인 (저장소 자동 연결)
- **EmailJS:** 문의 폼 서비스 계정 정보
- **Search Console:** 사이트 인증된 Google/Naver 계정

---

## 2. PagesCMS로 콘텐츠 편집하기

PagesCMS는 코드 수정 없이 웹사이트 콘텐츠를 편집하는 주요 도구입니다.

### 접속 방법

1. https://pagescms.org 접속
2. "Login with GitHub" 클릭
3. `omixai-com` 저장소 선택
4. 콘텐츠 섹션 목록 확인

### 콘텐츠 섹션

| 섹션 | 관리 내용 |
|------|----------|
| **Common** | 네비게이션 메뉴 라벨, 푸터 텍스트 |
| **Landing** | 홈페이지: 히어로, 통계, 서비스 미리보기, 고객 후기 |
| **Resources** | FAQ 질문과 답변 |
| **About** | 팀원, 투자자, 회사 연혁 |
| **Contact** | 이메일 주소, 사무실 주소 |
| **Services** | 개별 서비스 페이지 (Blood, Tissue 등) |
| **Notices** | 회사 공지사항 |

### 편집 팁

- **모든 텍스트 필드는 한국어(ko)와 영어(en)가 있습니다** - 둘 다 편집하세요
- 변경사항을 **저장**하세요
- **변경사항은 2-3분 내에 자동 배포**됩니다

---

## 3. 주요 콘텐츠 작업

### 홈페이지 텍스트 변경

1. PagesCMS → **Landing** 열기
2. 메인 헤드라인은 **Hero** 섹션 편집
3. 통계 수치는 **KPIs** 편집
4. 변경사항 저장

### FAQ 수정

1. PagesCMS → **Resources** 열기
2. FAQ 섹션 찾기 (Ordering, Technical 등)
3. 질문 추가/편집/삭제
4. 변경사항 저장

### 팀원 추가/편집

1. PagesCMS → **About** 열기
2. **Team → Members** 찾기
3. 새 멤버 추가 또는 기존 멤버 편집
4. 사진은 `public/photos/` 폴더에 업로드
5. 변경사항 저장

### 연락처 정보 수정

1. PagesCMS → **Contact** 열기
2. 이메일 또는 주소 필드 편집
3. 변경사항 저장

---

## 4. 공지사항 관리

공지사항은 웹사이트 상단 배너와 `/notices` 페이지에 표시됩니다.

### 새 공지사항 추가

1. PagesCMS → **Notices** 열기
2. **"Add new"** 클릭
3. 필드 입력:

| 필드 | 설명 |
|------|------|
| **Slug** | URL용 ID (예: `2026-01-15-new-announcement`) |
| **Date** | 게시일 (YYYY-MM-DD 형식) |
| **Active** | 체크하면 배너에 표시됨 |
| **Title (ko/en)** | 공지 제목 (한국어, 영어 둘 다) |
| **Content (ko/en)** | 공지 본문 (마크다운 지원) |

4. 변경사항 저장

### 공지사항 동작 방식

- 배너에는 **공지 1개만** 표시됨 ("Active" 체크된 것 중 가장 최근 것)
- **모든 공지**는 공지사항 페이지에 표시됨 (`/notices` 또는 `/ko/notices`)
- **대표이사 서명**은 자동으로 추가됨
- **날짜**는 언어에 따라 자동 포맷됨

### 공지 내용에 마크다운 사용

간단한 서식을 사용할 수 있습니다:

```
**굵은 글씨**

1. 번호 목록 항목
2. 다른 항목

- 글머리 기호
- 다른 기호
```

---

## 5. 서비스 관리

### 기존 서비스 편집

1. PagesCMS → **Services** 열기
2. 서비스 선택 (Blood, Tissue, Cell Culture, Custom)
3. 원하는 섹션 편집:
   - **Title/Subtitle/Description** (제목/부제/설명)
   - **Features** (주요 특징)
   - **Applications** (활용 분야)
   - **Process** (분석 과정)
   - **Deliverables** (제공 결과물)
   - **Sample Requirements** (샘플 요구사항)
4. 변경사항 저장

### 새 서비스 추가

1. PagesCMS → **Services** 열기
2. **"Add new"** 클릭
3. 모든 섹션 입력 (한국어와 영어 둘 다)
4. **slug** 필드가 URL을 결정함 (예: `new-service` → `/services/new-service`)
5. 변경사항 저장

---

## 6. 배포 방식

**자동 배포:** PagesCMS에서 콘텐츠를 저장하면 Cloudflare Pages에서 자동으로 다시 빌드됩니다. 사이트는 2-3분 내에 업데이트됩니다.

### 배포 상태 확인

1. https://dash.cloudflare.com 접속
2. **Pages** → **omixai-com** 이동
3. **Deployments** 탭 확인
4. 녹색 체크 표시 = 배포 성공

### 문제 발생 시

1. Cloudflare에서 배포 로그 확인
2. 배포 실패 시 이전 버전이 유지됨
3. 빌드가 계속 실패하면 개발자에게 연락

---

## 7. 도메인 및 DNS (Cloudflare)

도메인 `omixai.com`은 Cloudflare에서 관리됩니다.

### 현재 설정

- **www.omixai.com** → 메인 사이트
- **omixai.com** → www로 리다이렉트

### SSL/HTTPS

- Cloudflare에서 자동 처리
- 인증서 자동 갱신

---

## 8. 문의 폼 (EmailJS)

`/contact` 페이지의 문의 폼은 EmailJS를 통해 이메일을 발송합니다.

### 설정

Cloudflare Pages 환경 변수에 저장됨:
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

### 문의 폼이 작동하지 않을 때

1. EmailJS 대시보드에서 할당량/오류 확인
2. Cloudflare Pages 설정에서 환경 변수 확인
3. EmailJS 무료 플랜은 월별 한도가 있음

---

## 9. SEO 및 Search Console

### Google Search Console

- URL: https://search.google.com/search-console
- 영어 검색 성과 모니터링
- 사이트맵 제출됨: `https://www.omixai.com/sitemap-index.xml`

### Naver Search Console

- URL: https://searchadvisor.naver.com
- 한국어 검색 성과 모니터링
- 한국 시장 노출에 중요

### 사이트맵

배포할 때마다 `/sitemap-index.xml`에 자동 생성됩니다.

---

## 10. 웹사이트 구조

### 페이지

| URL | 한국어 URL | 설명 |
|-----|-----------|------|
| `/` | `/ko` | 홈페이지 |
| `/about` | `/ko/about` | 회사 소개, 팀, 투자자 |
| `/contact` | `/ko/contact` | 문의 폼 |
| `/faq` | `/ko/faq` | 자주 묻는 질문 |
| `/technical` | `/ko/technical` | 기술 문서 |
| `/notices` | `/ko/notices` | 공지사항 |
| `/services/blood` | `/ko/services/blood` | 혈액 프로테오믹스 |
| `/services/tissue` | `/ko/services/tissue` | 조직 프로테오믹스 |
| `/services/cell-culture` | `/ko/services/cell-culture` | 세포배양 프로테오믹스 |
| `/services/custom` | `/ko/services/custom` | 맞춤형 분석 |
| `/privacy` | `/ko/privacy` | 개인정보처리방침 |

### 테마 전환

사용자는 헤더의 달/해 아이콘으로 다크/라이트 모드를 전환할 수 있습니다. 설정은 브라우저에 저장됩니다.

### 언어 전환

사용자는 헤더의 한/EN 토글로 한국어와 영어를 전환합니다.

---

## 11. 문제 해결

### PagesCMS 저장 후 콘텐츠가 업데이트되지 않음

- 배포까지 2-3분 대기
- Cloudflare Pages에서 배포 상태 확인
- 브라우저 캐시 삭제 후 새로고침

### 공지사항이 배너에 표시되지 않음

- **Active**가 체크되어 있는지 확인
- 날짜 형식이 올바른지 확인 (YYYY-MM-DD)
- 한 번에 하나의 공지만 표시됨 (Active 중 가장 최근 것)

### 문의 폼이 발송되지 않음

- EmailJS 대시보드에서 오류 확인
- 월별 할당량 초과 여부 확인
- Cloudflare 환경 변수 확인

### 사이트가 이전 버전으로 표시됨

- 브라우저 캐시 삭제 (Cmd+Shift+R 또는 Ctrl+Shift+R)
- Cloudflare에서 최근 배포 확인
- CDN 캐시 업데이트에 몇 분 소요될 수 있음

---

## 12. 긴급 연락처

코드 수정이 필요한 기술적 문제:

- **저장소:** https://github.com/sooheon/omixai-com
- **이슈 등록:** https://github.com/sooheon/omixai-com/issues

---

## 13. 빠른 참조

### 홈페이지 콘텐츠 수정
PagesCMS → Landing

### 공지사항 추가
PagesCMS → Notices → Add new

### FAQ 편집
PagesCMS → Resources

### 팀 정보 수정
PagesCMS → About → Team

### 서비스 페이지 편집
PagesCMS → Services → 서비스 선택

### 사이트 배포 확인
Cloudflare 대시보드 → Pages → omixai-com → Deployments
