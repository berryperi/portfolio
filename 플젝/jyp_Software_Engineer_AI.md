# JYP Entertainment — Software Engineer / AI (경력) 지원 포트폴리오
> 지원 직무: Software Engineer / AI | IT LAB | 경력 3~7년
> 공고 마감: 2026-04-29

---

## 공고 핵심 요건

**담당업무**
- Slack 기반 업무 자동화 Bot 및 AI Agent 개발
- 사내 생성형 AI 도구 설계 및 커스터마이징
- LLM 기반 업무 워크플로 설계 및 전사 적용
- 반복·비효율 업무 분석 및 AI 적용 구조로 재설계
- 내부 시스템 및 외부 SaaS와 AI 연동한 생산성 도구 개발
- 실제 사용자 피드백 기반 지속적 개선

**필수 자격요건**
- 생성형 AI(LLM)를 실제 서비스나 업무에 적용한 경험
- API 기반 시스템 설계 및 연동 경험
- Python, Node.js, TypeScript 중 1개 이상 실무 경험
- 문제를 기술이 아닌 업무 흐름 관점에서 정의하는 역량
- 제품 또는 내부 도구 개발·운영 경험

**우대사항**
- Prompt Engineering, RAG, Tool Calling 이해
- 업무 자동화, AI Agent, Workflow 설계 경험
- 사내 생산성 도구 / Internal Platform 개발 경험
- 빠른 배포와 반복 개선 환경에서의 개발 경험
- Slack API 또는 협업 툴 기반 Bot 개발 경험

---

## 프로젝트별 경험 기술

---

### [프로젝트 1] AUGraphics — 3D 아바타 그래픽 검수 자동화 툴

**프로젝트 개요**
게임 아바타 아이템의 3D 그래픽 품질 검수 전 과정을 자동화한 Windows 내부 도구.
수동으로 수행하던 검수 프로세스를 End-to-End AI 파이프라인으로 재설계하여 실서비스 운영 중.

**공고 요건 연관 경험**

| 요건 | 경험 내용 |
|------|-----------|
| 반복·비효율 업무 → AI 적용 구조 재설계 | 수동 검수(CharTool 실행 → 아이템 로드 → 크래시 확인 → 엑셀 기록) 전 과정을 분석하여 End-to-End 자동화 파이프라인으로 재설계 |
| 생성형 AI(LLM) 실제 업무 적용 | **Qwen VL 32B(멀티모달 LLM)** 기반 3D 그래픽 결함 탐지 파이프라인 설계 및 실서비스 적용 |
| 프롬프트 엔지니어링 | 검사 항목(메쉬 파손·피부 비침·텍스처 파괴 등 5종)별 독립 프롬프트 설계, 오탐(FP)/미탐(FN) 반복 분석 및 단계적 개선 |
| API 기반 시스템 설계 및 연동 | 원격 GPU 서버 REST API 연동 (업스케일 전처리 → VLM 추론 → JSON 결과 파싱), 장애 시 자동 재시도 로직 포함 |
| 내부 생산성 도구 개발·운영 | 실사용자(내부 검수 담당팀) 피드백 기반 지속적 개선 — 기능 추가, 버그 수정, 이어하기(Resume) 기능 구현 등 |
| 업무 자동화 Workflow 설계 | 압축 파일 탐지 → 파일명 검증 → 크래시 체크 → VLM 결함 탐지 → 3ds Max 처리 → 결과 기록까지 단계별 워크플로 설계 |

**기술 스택**: C# (.NET 8.0), Qwen VL 32B, PaddleOCR, REST API, ClosedXML, Win32 API

---

### [프로젝트 2] AUControl — 게임 윈도우 AI 자동화 제어 플랫폼

**프로젝트 개요**
OCR·VLM 등 AI 기반 UI 인식을 통합한 게임 윈도우 종합 자동화 플랫폼.
C# 클라이언트 + Python OCR 서버의 클라이언트-서버 분리 아키텍처로 설계.

**공고 요건 연관 경험**

| 요건 | 경험 내용 |
|------|-----------|
| API 기반 시스템 설계 및 연동 | **Python PaddleOCR REST API 서버 직접 설계·구현** — C# 클라이언트 ↔ Python 서버(Port: 5123) HTTP 통신, `/health` `/ocr_image` `/find` `/check` 등 엔드포인트 설계 |
| 생성형 AI(LLM) 업무 적용 | Florence-2, LLaVA, Qwen VL 등 Vision AI 모델을 UI 요소 인식에 통합 적용 |
| 내부 도구 개발·운영 | 내부 운영팀 대상 실서비스 운영, 다중 캡처 방식(DXGI·BitBlt·PrintWindow) 및 입력 방식 자동 전환 |
| 반복 업무 자동화 Workflow | 자연어 프롬프트 → 액션 변환 → 멀티스텝 작업 순차 실행하는 자동화 엔진(AutomationEngine) 구현 |
| Python 실무 경험 | Python OCR 서버 구축 (PaddleOCR PP-OCRv5, GPU 가속, 한글 특화 모델), 이미지 처리 파이프라인 구현 |

**기술 스택**: C# (.NET 8.0), Python, PaddleOCR PP-OCRv5, Florence-2, DirectX 11 / DXGI, OpenCV, REST API

---

### [프로젝트 3] Note Generator — AI 기반 리듬게임 채보 자동 생성 시스템

**프로젝트 개요**
오디오 파일에서 Conformer 딥러닝 모델로 리듬게임 채보를 자동 생성하는 웹 기반 AI 서비스.
Gradio 웹 UI 기반 내부 서비스로 배포하여 비개발자도 사용 가능.

**공고 요건 연관 경험**

| 요건 | 경험 내용 |
|------|-----------|
| 내부 생산성 도구 개발·운영 | Gradio 웹 UI 기반 내부 서비스 — 드래그&드롭 파일 업로드, 실시간 진행 상태, 다운로드 제공. 비개발자 사용 가능하도록 UX 설계 |
| Python 실무 경험 | PyTorch 기반 Conformer 모델 설계·학습·추론 (약 3,700줄), GPU 배치 처리, 오디오 전처리 파이프라인 구현 |
| 빠른 배포와 반복 개선 | Docker 컨테이너 기반 GPU 모델 서빙 환경 구성 (NVIDIA Container Toolkit), 사용자 피드백 기반 반복 개선 |
| AI 적용 구조 설계 | 오디오 업로드 → 전처리 → 배치 추론 → 다중 포맷 변환 → ZIP 다운로드까지 End-to-End AI 파이프라인 설계 |

**기술 스택**: Python, PyTorch (CUDA 12.1), Conformer, Librosa, Gradio, Docker, NVIDIA Container Toolkit

---

### [프로젝트 4] TTS/STT — 오픈소스 음성 AI 모델 리서치 및 로컬 서빙

**프로젝트 개요**
Hugging Face 생태계를 활용해 최신 음성 AI 모델(SparkTTS, OpenAudio S1, Whisper)을 리서치하고 로컬 GPU 서버에 직접 서빙.

**공고 요건 연관 경험**

| 요건 | 경험 내용 |
|------|-----------|
| 생성형 AI 모델 리서치 및 적용 | Hugging Face Spaces(사전 검증) → Papers(기술 리서치) → Hub(모델 다운로드) → 로컬 서빙까지 일관된 모델 도입 프로세스 수행 |
| Python 실무 경험 | Transformers 라이브러리 기반 추론 파이프라인 구성, TTS REST API 서버 형태 제공, Whisper 자막 추출 파이프라인 구현 |
| 빠른 기술 학습 및 적용 | 공개된 지 얼마 안 된 최신 모델(SparkTTS, OpenAudio S1)을 빠르게 리서치하여 로컬 환경에 구현 |

**기술 스택**: Python, PyTorch, Hugging Face Transformers, SparkTTS, OpenAudio S1, Whisper, CUDA

---

## 우대사항 종합

| 우대 요건 | 해당 프로젝트 |
|-----------|--------------|
| Prompt Engineering | AUGraphics — VLM 검사 항목별 독립 프롬프트 설계 및 반복 최적화 |
| 업무 자동화 / AI Workflow 설계 | AUGraphics — End-to-End 검수 워크플로 / AUControl — AutomationEngine |
| Internal Platform / 생산성 도구 개발 | AUGraphics, AUControl, Note Generator 모두 해당 |
| 빠른 배포와 반복 개선 | Note Generator(Docker 배포), AUGraphics(이어하기 기능 등 피드백 반영) |
| Slack API / Bot 개발 | 경험 없음 |
