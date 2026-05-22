# 프로젝트 포트폴리오 상세 정리
> 이력서 첨부용 | 작성일: 2026-04-06

---

## [프로젝트] TTS/STT 로컬 구현 — 오픈소스 음성 AI 모델 리서치 및 로컬 서빙

### 프로젝트 개요

Hugging Face Hub/Spaces/Papers를 활용해 최신 음성 AI 모델을 리서치하고 **로컬 GPU 서버에 직접 서빙**한 TTS(Text-to-Speech) 및 STT(Speech-to-Text) 시스템. SparkTTS, OpenAudio S1 등 오픈소스 TTS 모델과 Whisper 기반 자막 추출 파이프라인을 구현. 모델별 성능 비교 테스트를 통해 최적 모델 선정.

- **개발 기간**: ____년 __월 ~ ____년 __월 (약 __개월)
- **담당 역할**: 단독 개발 (리서치·구현·비교 평가 전담)

---

## 기술 스택

### AI 모델

| 모델 | 유형 | 용도 |
|------|------|------|
| SparkTTS | TTS | 텍스트 → 음성 합성 (고품질 한국어) |
| OpenAudio S1 | TTS | 텍스트 → 음성 합성 |
| Whisper (OpenAI) | STT | 보이스 오디오 → 자막(텍스트) 추출 |

### 개발 환경

- Python 3.x
- PyTorch (CUDA GPU 가속)
- Hugging Face Hub (모델 다운로드 및 리서치)
- Transformers 라이브러리

---

## Hugging Face 생태계 활용

### 리서치 → 로컬 서빙 프로세스

**1. Hugging Face Spaces — 사전 검증**
- 각 모델의 공식 데모 Space에서 직접 테스트
- 음질, 추론 속도, 한국어 지원 여부 비교 평가
- 로컬 구현 전 모델 적합성 검증으로 구현 리스크 최소화

**2. Hugging Face Papers — 기술 리서치**
- 각 모델 논문 리서치 (아키텍처, 학습 방식, 성능 벤치마크 파악)
- 최신 TTS/STT 기술 트렌드 지속 모니터링

**3. Hugging Face Hub — 모델 가중치 다운로드 및 로컬 배포**
- 오픈소스 모델 가중치 다운로드 및 로컬 GPU 서버에 서빙
- Transformers 라이브러리 기반 추론 파이프라인 구성
- 모델 카드(Model Card) 기반 사용법 파악 및 커스터마이징

### 비교 테스트 항목

| 항목 | SparkTTS | OpenAudio S1 | 비고 |
|------|----------|-------------|------|
| 음성 품질 | | | |
| 한국어 지원 | | | |
| 추론 속도 | | | |
| VRAM 사용량 | | | |
| 로컬 구현 난이도 | | | |

---

## 주요 기능 상세

### 1. TTS — 오픈소스 모델 로컬 서빙 (SparkTTS / OpenAudio S1)

- 텍스트 입력 → 자연스러운 음성 파일(WAV/MP3) 출력
- GPU 가속 추론 (CUDA) — 로컬 GPU 서버 기반 서빙
- Hugging Face Hub에서 모델 가중치 로드, Transformers 기반 추론 파이프라인 구성
- REST API 형태로 서빙하여 외부 연동 가능 구조 확보

### 2. STT — 자막 추출 (Whisper)

- 보이스 오디오 파일(MP3/WAV/OGG) 입력
- Whisper 모델로 음성 → 텍스트 변환
- 자막 파일(SRT/TXT) 자동 생성
- 한국어 포함 다국어 지원
- 타임스탬프 포함 자막 출력 (시작~끝 시간 + 텍스트)
- 모델 크기 선택 가능 (tiny / base / small / medium / large) — 속도와 정확도 트레이드오프

---

## 개선 과정 및 성과

### Whisper 자막 추출

| 항목 | 수치 |
|------|------|
| 사용 모델 크기 | ____ (예: medium / large-v3) |
| 평균 처리 시간 (분당 오디오) | ____초 |
| 한국어 인식 정확도 | ____% |
| 자막 파일 포맷 | SRT / TXT |

### TTS 비교 결과

| 항목 | SparkTTS | OpenAudio S1 |
|------|----------|-------------|
| 음성 자연스러움 (주관 평가) | | |
| 1문장 추론 시간 | ____초 | ____초 |
| VRAM 사용량 | ____GB | ____GB |
| 최종 채택 모델 | | |

---

## 기술 역량 요약

**음성 AI 모델 서빙**
- 오픈소스 TTS 모델 로컬 서빙 (SparkTTS, OpenAudio S1) — REST API 형태 제공
- STT 파이프라인 구축 (Whisper 기반 자막 추출, 타임스탬프 포함 SRT 생성)
- GPU 가속 추론 최적화 (CUDA), 모델 크기별 속도-정확도 트레이드오프 분석

**Hugging Face 생태계 활용**
- Spaces 기반 사전 검증 → Papers 기반 기술 리서치 → Hub 다운로드 → 로컬 서빙까지 일관된 모델 도입 프로세스
- Transformers 라이브러리 기반 추론 파이프라인 설계
- 최신 음성 AI 기술 트렌드 지속 리서치 및 적용
