# T2 Fit & Comfort Questionnaire Plan B

## 목적

GitHub Pages, 현장 네트워크, Power Automate, Excel Online 중 하나가 불안정해도 응답을 잃지 않기 위한 비상 운영 절차입니다.

## 평상시 기본 경로

- 응답자는 `https://bit.ly/m/t2-fpt` 또는 각 설문 링크로 접속합니다.
- 설문 제출은 Power Automate를 통해 Excel Online 테이블에 저장됩니다.
- 대시보드는 30초마다 라이브 엔드포인트를 다시 읽어 표시합니다.

## Plan B 1: Excel Online 또는 Power Automate 제출 실패

라이브 페이지에서 제출이 실패하면 다음 순서로 자동 처리됩니다.

1. `fetch` 재시도 실패
2. `sendBeacon` 제출 시도
3. 현장 로컬 백업 서버가 열려 있으면 `/api/backup-submit`에 저장
4. 로컬 서버도 없으면 응답자의 브라우저 localStorage에 백업하고 JSON 파일 저장 버튼 표시

응답자가 백업 저장 화면을 보면 현장 담당자가 백업 파일을 받아 두세요.

## Plan B 2: GitHub Pages 접속 불가 또는 정책/장애 리스크

현장 맥북에서 아래 파일을 더블클릭하거나 터미널에서 실행합니다.

```sh
./run-plan-b-server.command
```

서버가 켜지면 아래 로컬 주소가 표시됩니다.

- 허브: `http://localhost:8844/index.html`
- 옵션 231: `http://localhost:8844/option-231.html`
- 옵션 429: `http://localhost:8844/option-429.html`
- 어퍼 & 최종 선호도: `http://localhost:8844/final-preference.html`
- 비상 대시보드: `http://localhost:8844/dashboard.html?data=/api/dashboard`
- 상태 확인: `http://localhost:8844/api/health`

태블릿이나 휴대폰에서 같은 Wi-Fi 또는 핫스팟에 연결한 뒤, 맥북의 IP 주소를 사용해 접속합니다.

```sh
ipconfig getifaddr en0
```

예: 맥북 IP가 `192.168.0.23`이면 `http://192.168.0.23:8844/index.html`을 사용합니다.

## 백업 파일 위치

로컬 서버가 받은 응답은 아래 폴더에 JSONL 파일로 저장됩니다.

```text
outputs/plan-b-submissions/
```

## 테스트 종료 후 Excel Online으로 재업로드

네트워크와 Power Automate가 정상화되면 아래 명령으로 백업 응답을 다시 제출합니다.

```sh
node tools/replay-plan-b-submissions.mjs outputs/plan-b-submissions
```

먼저 제출 대상과 건수만 확인하려면:

```sh
node tools/replay-plan-b-submissions.mjs outputs/plan-b-submissions --dry-run
```

재업로드 로그는 아래 폴더에 저장됩니다.

```text
outputs/plan-b-replay-logs/
```

## 현장 운영 체크

- 테스트 시작 30분 전: 라이브 GitHub Pages, Power Automate, Excel Online 대시보드 확인
- 테스트 시작 15분 전: `./run-plan-b-server.command`를 켜서 로컬 백업 경로도 대기
- 테스트 중: 대시보드 카운트와 `/api/health` 중 하나라도 계속 증가하는지 확인
- 테스트 종료 후: 로컬 백업 파일이 있으면 재업로드 도구로 Excel Online에 반영
