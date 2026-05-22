export const projects = [
  {
    id: 'augraphics',
    name: 'AUGraphics',
    subtitle: '3D 아바타 그래픽 검수 자동화 툴',
    period: '2026.02 - 현재',
    tag: 'Work',
    overview:
      '게임 아바타 아이템(의상/악세사리)의 3D 그래픽 품질 검수 전 과정을 자동화한 Windows 내부 도구. 수동 검수 프로세스를 End-to-End AI 파이프라인으로 재설계하여 실서비스 운영 중.',
    background:
      '기존에는 3D 아바타 아이템 납품 시 담당자가 수동으로 파일을 열고 각도별 스크린샷을 찍어 결함을 육안으로 확인하고 엑셀에 기록하는 방식이었다. 처리 건수가 많아질수록 누락·오기입이 발생하고 담당자 피로도가 높아지는 구조적 문제가 있었다.',
    coreFeatures: [
      '압축 파일 자동 탐지·해제 및 CP949/UTF-8 인코딩 자동 판별 처리',
      'RGM/DDS 파츠 접두사 불일치 자동 교정(rename) — 파일명 검증 후 즉시 수정',
      'PaddleOCR PP-OCRv5 기반 게임 클라이언트 UI 좌표 동적 인식 및 세션 내 캐싱',
      '4각도 캡처 → 원격 GPU 서버 업스케일 → Qwen3 VL 32B 2단계 추론 검사 파이프라인',
      '3ds Max MaxScript 배치 자동화(Clean & Fix, RGM Export) 연동',
      '검수 결과 엑셀 자동 기록 및 이어하기(Resume) 기능으로 중단 후 재개 지원',
    ],
    troubleshooting: [
      {
        problem: '게임 클라이언트 UI 좌표가 해상도·창 크기에 따라 달라져 하드코딩 좌표가 잦은 수정 필요',
        solution: 'PaddleOCR 기반 텍스트 인식으로 UI 요소를 동적 탐지하고 세션 내 캐싱으로 반복 추론 오버헤드 제거',
      },
      {
        problem: 'VLM 추론 시 오탐(정상을 결함으로) 및 미탐(결함을 정상으로) 비율이 초기에 높았음',
        solution: '검사 항목별 독립 프롬프트 설계 및 반복 오탐·미탐 케이스 분석으로 프롬프트 반복 개선, 2단계 검사 구조 도입',
      },
      {
        problem: '3ds Max 처리 도중 오류 발생 시 전체 배치가 중단되는 문제',
        solution: '이어하기(Resume) 기능 구현 — 완료 항목 자동 스킵, MAX 결과 기존재 시 MAX 단계 건너뜀',
      },
      {
        problem: 'RGM 더블클릭·인종색 클릭 후 크래시 감지를 위해 고정 3.5초 대기 적용 → 60폴더 기준 전체 처리 시간의 주 병목',
        solution: '클릭 전후 아바타 영역(703×858px) 스크린샷 픽셀 비교(threshold 0.1%)를 100ms 간격 폴링으로 대체 — 정상 케이스에서 변화 즉시 감지해 3.5초 불필요, 변화 없을 때만 기존 크래시 감지 로직 유지',
      },
    ],
    tasks: [
      '압축 파일 자동 탐지·해제, CP949/UTF-8 인코딩 자동 판별 처리',
      '파일명 검증 및 RGM/DDS 파츠 접두사 불일치 시 자동 교정(rename) 로직 구현',
      'PaddleOCR PP-OCRv5 기반 게임 클라이언트 UI 좌표 동적 인식 및 세션 내 캐싱',
      'Vision-Language Model(Qwen3 VL 32B) 기반 멀티모달 결함 탐지 파이프라인 설계 — 4각도 캡처 → 원격 GPU 서버 업스케일 → VLM 추론 2단계 검사',
      '검사 항목별 독립 프롬프트 설계(프롬프트 엔지니어링), 오탐/미탐 반복 분석·개선',
      '3ds Max MaxScript 배치 자동화 (Clean & Fix, RGM Export) 연동',
      '검수 결과 엑셀 자동 기록 (D~J 7개 고정 열 구조 설계)',
      '이어하기(Resume) 기능 구현: 완료 항목 자동 스킵, MAX 결과 기존재 시 MAX 단계 스킵',
    ],
    achievements: [
      '검수 확인 속도 30% 향상 — 기존 여러 툴을 개별 확인하던 방식에서 모든 툴 결과를 엑셀 하나에 통합',
      '3ds Max Clean & Fix: 파일당 ~0.4초, 1,000개 기준 약 7분 자동 처리',
      '고정 3.5초 대기를 픽셀 비교 폴링으로 전환 — 정상 케이스 3.5초 → ~200ms, 60폴더 기준 처리 시간 15분 단축',
    ],
    skills: ['C# (.NET 8.0)', 'Qwen3 VL 32B', 'PaddleOCR PP-OCRv5', 'Win32 API', 'ClosedXML', 'REST API'],
  },
  {
    id: 'aucontrol',
    name: 'AUControl',
    subtitle: '오디션 게임 신규 아이템 QA 자동화 툴',
    period: '2025.06 - 2026.02',
    tag: 'Work',
    overview:
      '오디션 게임의 신규 아이템 QA 테스트 전 과정을 자동화한 Windows 내부 도구. xlsx QA 리스트를 읽어 패션몰·커플샵에서 NEW 마크 표시 확인, 아이템 구매·착용, 재화 차감, 리소스 무결성 검사를 게임 창에서 직접 자동 실행. C# 클라이언트 + Python OCR 서버 분리 아키텍처로 단독 설계·구현.',
    background:
      'QA 담당자가 신규 아이템 업데이트마다 게임에 직접 접속해 패션몰·커플샵 등 각 화면에서 항목별 테스트를 수동으로 반복 수행하고 있었다. 처리 항목이 많아질수록 누락 위험과 담당자 피로도가 높아지는 구조적 문제가 있었다. 게임 보안(안티치트)이 표준 Win32 캡처·입력 API를 차단해 자동화 구현 자체가 까다로웠다.',
    coreFeatures: [
      'xlsx QA 리스트 파싱 → 패션몰·커플샵 NEW 마크 확인·구매·착용·재화 차감·리소스 무결성 테스트 항목별 자동 실행',
      'PaddleOCR 기반 게임 UI 텍스트 인식 + 템플릿 매칭(OpenCV)으로 NEW 마크·버튼·다이얼로그 동적 탐지',
      'DXGI Desktop Duplication API(DirectX 11) 기반 화면 캡처로 안티치트(Xigncode 등) 우회',
      'SendInput·PostMessage·Interception Driver 3중 입력 방식 자동 전환으로 안티치트 입력 차단 해소',
      'Python HTTP 서버 기반 PaddleOCR REST API 서버 — 서버 시작 시 1회 모델 로드·메모리 상주, GPU/CPU 자동 감지',
      '한글 입력 자동 변환 처리 (두벌식 자모 분해 → 영문 키 시퀀스 매핑)',
    ],
    troubleshooting: [
      {
        problem: '안티치트가 BitBlt·PrintWindow 등 표준 캡처 API를 후킹해 검은 화면만 반환, 게임 화면 읽기 불가',
        solution: 'DXGI Desktop Duplication API(DirectX 11)로 전환해 드라이버 레벨 캡처, 안티치트 우회 성공',
      },
      {
        problem: '안티치트가 SendInput 후킹으로 키·마우스 입력을 차단, 자동화 동작 불가',
        solution: 'Interception Driver를 최종 수단으로 추가해 SendInput → PostMessage → Interception 3단계 자동 전환 구조 구현',
      },
      {
        problem: 'Tesseract를 로컬 라이브러리로 직접 호출하면 매 추론마다 모델 초기화 지연 발생, 한글 인식률 낮음',
        solution: 'Python 서버 분리 아키텍처로 전환 — 서버 기동 시 1회만 모델 로드·GPU 상주, PaddleOCR 한글 특화 모델로 교체',
      },
    ],
    tasks: [
      'xlsx QA 리스트 파싱 및 테스트 항목 자동 실행 엔진 구현 (패션몰 NEW 확인, 커플샵 NEW 확인, 구매·착용, 재화 차감, 리소스 무결성 등)',
      'Python HTTP 서버 기반 PaddleOCR REST API 서버 직접 설계·구현 — GPU/CPU 자동 감지, 7개 엔드포인트, 4단계 텍스트 매칭 알고리즘',
      'Tesseract·EasyOCR·Surya·PaddleOCR 4종 OCR 엔진 직접 비교 평가 후 PaddleOCR 최종 선정',
      'DXGI Desktop Duplication API(DirectX 11) 기반 화면 캡처로 게임 보안(안티치트) 우회',
      'Qwen3 VL 32B 통합으로 하드코딩 좌표 → 동적 UI 인식 구조 전환',
      'SendInput·PostMessage·Interception Driver 3중 입력 방식 자동 전환 구현',
      '한글 입력 자동 변환 처리 (두벌식 자모 분해 → 영문 키 시퀀스 매핑)',
    ],
    achievements: [
      'QA 담당자 수동 반복 테스트 전 과정 자동화 — 안티치트 환경 포함',
      '안티치트 환경에서 게임 화면 캡처·입력 자동화 성공',
      'OCR 아키텍처를 Tesseract 로컬 방식에서 Python 서버 분리로 전환 — 추론 지연 제거 및 한글 인식률 향상',
    ],
    skills: ['C# (.NET 8.0)', 'Python', 'PaddleOCR PP-OCRv5', 'DirectX 11 / DXGI', 'SharpDX', 'Qwen3 VL 32B', 'OpenCV', 'Interception Driver', 'REST API'],
  },
  {
    id: 'tts',
    name: 'TTS / STT / RVC',
    subtitle: '오픈소스 음성 AI 모델 서빙',
    period: '2025.03 - 2025.06',
    tag: 'Work',
    overview:
      'Hugging Face Hub/Spaces/Papers를 활용해 최신 음성 AI 모델을 리서치하고 로컬 GPU 서버(A100)에 직접 서빙. 기획팀 성우 녹음 비용 절감 및 게임 캐릭터 대사 처리에 기여.',
    background:
      '게임 개발 중 캐릭터 대사 녹음 비용과 일정이 지속적으로 프로젝트 진행을 제약하고 있었다. 오픈소스 TTS/RVC 모델을 사내 GPU 서버에 서빙하면 외부 성우 섭외 없이 대사를 빠르게 생성할 수 있다는 판단 하에 도입을 추진했다.',
    coreFeatures: [
      'paperswithcode, Hugging Face Papers, GitHub 기반 최신 AI 기술 지속 R&D',
      '오픈소스 TTS(SparkTTS, OpenAudio S1), Whisper STT 로컬 구현 및 REST API 서빙',
      'RVC(Retrieval-based Voice Conversion) 학습·추론 GUI — 섭외 성우 보이스를 게임 캐릭터 대사에 적용',
      'A100 서버에서 Linux, Docker, Python 기반 GPU 추론 환경 구성·운영',
      'HF Spaces 데모 사전 검증 → Hub 모델 다운로드 → 로컬 서빙까지 일관된 도입 프로세스 수립',
    ],
    troubleshooting: [
      {
        problem: '모델마다 의존성·CUDA 버전이 달라 동일 서버에서 충돌 발생',
        solution: '모델별 Docker 컨테이너 분리 구성으로 격리, GPU 패스스루로 각 컨테이너에서 독립 추론',
      },
      {
        problem: 'RVC 학습·추론을 CLI로만 사용 가능해 비개발자 팀원이 활용하기 어려웠음',
        solution: 'Gradio 기반 GUI 래퍼 직접 구현 — 파일 업로드·학습·추론을 웹 인터페이스로 제공',
      },
    ],
    tasks: [
      'paperswithcode, Hugging Face Papers, GitHub 기반 최신 AI 기술 R&D',
      '오픈소스 TTS(SparkTTS, OpenAudio S1), Whisper STT 로컬 구현 및 REST API 형태 서빙',
      'RVC(Retrieval-based Voice Conversion) 학습·추론 GUI 구현 — 섭외 성우 보이스를 게임 캐릭터 대사에 적용',
      'A100 서버에서 Linux, Docker, Python 기반 GPU 추론 환경 구성·운영',
      'Hugging Face Spaces 데모 사전 검증 → Hub 모델 다운로드 → 로컬 서빙까지 일관된 도입 프로세스 수립',
    ],
    achievements: [
      '오픈소스 TTS/Whisper 구현으로 성우 섭외 비용 50% 절감',
      'RVC GUI 구현으로 게임 캐릭터 대사 처리 비용 30% 절감',
    ],
    skills: ['Python', 'PyTorch', 'Hugging Face Transformers', 'SparkTTS', 'OpenAudio S1', 'Whisper', 'RVC', 'Docker', 'Linux (A100)'],
  },
  {
    id: 'midi',
    name: 'AI Midi Generator',
    subtitle: '사운드팀 채보 자동 생성 시스템',
    period: '2024.09 - 2025.03',
    tag: 'Work',
    overview:
      '오디오 파일에서 Conformer 딥러닝 모델로 리듬게임 채보를 자동 생성하는 웹 기반 AI 시스템. Gradio 기반 웹 UI로 비개발자도 사용 가능하도록 내부 서비스로 배포.',
    background:
      '사운드팀이 신규 음원마다 게임 모드별 채보를 수작업으로 제작해야 했고, 모드별로 채보 포맷이 다르고 작업량이 많아 병목이 발생하고 있었다. 딥러닝 기반 자동화로 작업 부담을 줄이고 일관된 품질을 확보할 필요가 있었다.',
    coreFeatures: [
      'Conformer 오픈소스 아키텍처 기반 커스텀 학습 (레이어 수·드롭아웃 수정, 자체 데이터 학습)',
      '오디오 전처리 파이프라인: 리샘플링 → Mel-Spectrogram 변환(128 밴드) → 배치 추론',
      'MelBandRoformer 보컬 분리 모델 통합으로 보컬/MR 자동 분리 후 각각 처리',
      '4개 게임 모드별 특화 모델 총 7개 학습 및 MIDI/TXT/SLK/XLS 다중 포맷 변환 자동화',
      'Docker 컨테이너 기반 GPU 모델 서빙 환경 구성 (NVIDIA Container Toolkit, GPU 패스스루)',
      'Gradio 기반 웹 GUI — 비개발자도 파일 업로드 후 원클릭으로 채보 생성 가능',
    ],
    troubleshooting: [
      {
        problem: '단일 파일 순차 처리 방식으로 긴 음원에서 처리 시간이 지나치게 길었음',
        solution: '배치 추론 방식으로 전환하여 작업 시간 90% 단축',
      },
      {
        problem: '학습 데이터 내 보컬/악기 혼재로 모델이 보컬 구간을 노트로 오인식하는 패턴 반복',
        solution: 'MelBandRoformer로 보컬을 사전 분리한 뒤 학습 데이터 재구성, 일관성 없는 레이블 수정으로 정확도 80% 향상',
      },
    ],
    tasks: [
      'Conformer 오픈소스 아키텍처 기반 커스텀 학습 (레이어 수·드롭아웃 수정, 자체 데이터 학습)',
      '오디오 전처리 파이프라인 구현: 리샘플링 → Mel-Spectrogram 변환(128 밴드) → 배치 추론',
      'MelBandRoformer 보컬 분리 모델 통합으로 보컬/MR 자동 분리 파이프라인 구축',
      '4개 게임 모드별 특화 모델 총 7개 학습 및 MIDI/TXT/SLK/XLS 다중 포맷 변환 자동화',
      'Docker 컨테이너 기반 GPU 모델 서빙 환경 구성 (NVIDIA Container Toolkit, GPU 패스스루)',
      '일관성 없는 학습 데이터 수정 및 보컬 분리 적용으로 모델 정확도 개선',
    ],
    achievements: [
      'Gradio 기반 GUI 제작으로 기존 수작업 대비 작업 시간 70% 단축',
      '데이터 품질 개선으로 모델 정확도 80% 향상',
      '단일 처리 방식 개선(배치 처리)으로 작업 시간 90% 단축',
    ],
    skills: ['Python', 'PyTorch (CUDA 12.1)', 'Conformer', 'Librosa', 'Gradio', 'Docker', 'NVIDIA Container Toolkit'],
  },
  {
    id: 'golf-analysis',
    name: '골프 플랫폼 사용자 데이터 분석',
    subtitle: '사용자 행동 패턴 분석 및 시각화',
    period: '2024.04 - 2024.05',
    tag: 'Side',
    overview:
      '골프 플랫폼 사용자 데이터를 수집·분석하여 플레이 패턴, 리뷰 감정, 활동 선호도 등 인사이트를 도출하는 데이터 분석 프로젝트.',
    background:
      '골프 사용자 경험 개선 방안을 고려하기 위해 실제 사용자 데이터를 기반으로 패턴을 분석하고 프로모션·이벤트 기획에 활용할 수 있는 시각화 자료를 도출하고자 했다.',
    coreFeatures: [
      '사용자 ID, 플레이 날짜, 날씨 조건, 플레이 시간 시각화',
      '워드클라우드를 통한 사용자 리뷰 분석',
      'VADER 감정 분석으로 부정적 리뷰 데이터 시각화',
      '연도별 일·월별 플레이 횟수 및 칼로리 소모량 시각화',
      '사용자 활동 패턴·선호도 기반 프로모션 방향 제안',
    ],
    troubleshooting: [],
    tasks: [
      '사용자 ID, 플레이 날짜, 날씨 조건, 플레이 시간 데이터 전처리 및 시각화',
      'VADER 감정 분석 라이브러리 적용으로 리뷰 데이터 긍·부정 분류',
      '워드클라우드 생성으로 주요 키워드 시각화',
      '연도별 일·월별 플레이 패턴 및 칼로리 소모량 트렌드 분석',
    ],
    achievements: [
      '사용자 활동 패턴 분석을 통해 프로모션·이벤트 기획에 활용 가능한 인사이트 도출',
    ],
    skills: ['Python', 'Pandas', 'Matplotlib', 'VADER', 'WordCloud', 'NumPy'],
  },
  {
    id: 'object-detection',
    name: '객체 탐지 및 인스턴스 세그멘테이션',
    subtitle: 'COCO 데이터셋 기반 사람 탐지 파이프라인 구현',
    period: '2024.02 - 2024.04',
    tag: 'Side',
    overview:
      'COCO 데이터셋을 이용한 사람 객체 탐지 및 인스턴스 세그멘테이션 전체 파이프라인을 직접 구현한 프로젝트.',
    background:
      '컴퓨터 비전 파이프라인의 전 과정을 직접 구현하며 데이터 처리, 세그멘테이션, 시각화까지 이해하기 위해 진행했다.',
    coreFeatures: [
      'JSON 형식 COCO 어노테이션에서 이미지 ID, 카테고리, 바운딩 박스, 세그멘테이션 정보 추출',
      '세그멘테이션 데이터 변환 (RLE → polygon)',
      '이진 마스크 디코드 후 OpenCV로 윤곽선 추출 및 데이터 통일',
      '리사이즈 시 바운딩 박스·마스크 비율 유지 처리',
    ],
    troubleshooting: [
      {
        problem: '이미지를 목표 크기로 리사이즈 시 바운딩 박스·마스크 좌표 비율이 깨지는 문제',
        solution: '원본 이미지의 가장 가까운 픽셀 위치에서 값을 가져오는 NEAREST 보간법 적용으로 개선',
      },
    ],
    tasks: [
      'COCO JSON 어노테이션 파싱 및 이미지 ID·카테고리·바운딩 박스·세그멘테이션 정보 추출',
      'RLE → polygon 세그멘테이션 데이터 변환 기능 구현',
      '이진 마스크 디코드 후 OpenCV 윤곽선 추출 및 데이터 포맷 통일',
      '리사이즈 시 NEAREST 보간법 적용으로 좌표 비율 문제 해결',
    ],
    achievements: [
      'COCO 데이터셋 기반 object detection / instance segmentation 전체 파이프라인 직접 구현',
    ],
    skills: ['Python', 'OpenCV', 'COCO Dataset', 'NumPy', 'Matplotlib'],
  },
  {
    id: 'music-genre',
    name: '음악 장르 분류 모델 개발',
    subtitle: '오디오 특성 기반 장르 자동 분류',
    period: '2023.12 - 2024.01',
    tag: 'Side',
    overview:
      '오디오 특성(MFCC, 주파수 등)을 추출하고 FNN 앙상블 기법으로 음악 장르를 자동 분류하는 머신러닝 모델 개발 프로젝트.',
    background:
      '다양한 음악 장르를 자동으로 예측·분류하는 모델을 구현하며 오디오 데이터 처리와 머신러닝 파이프라인을 직접 설계했다.',
    coreFeatures: [
      '오디오 특성(MFCC, rolloff, bandwidth, centroid 등) 추출',
      '장르 간 유사한 주파수 특징에 PCA 적용으로 차원 축소',
      'FNN 앙상블 기법으로 모델 정확도 개선',
      '하이퍼 파라미터 튜닝으로 최종 정확도 95.13% 달성',
    ],
    troubleshooting: [
      {
        problem: '오디오 데이터 처리 중 RMS 값이 0이 되어 로그 계산 시 무한대로 발산',
        solution: 'RMS 값에 매우 작은 수(epsilon)를 더해 무한대 발산 방지',
      },
      {
        problem: 'rolloff, bandwidth, centroid 등 주파수 특징이 장르 간 전반적으로 유사해 분류 성능 저하',
        solution: 'PCA 적용으로 데이터 차원 축소, 모델 복잡도 감소 및 계산 효율 향상',
      },
    ],
    tasks: [
      '오디오 데이터 전처리 및 MFCC·주파수 특성 추출',
      'PCA 적용으로 고차원 특성 벡터 차원 축소',
      'FNN 앙상블 기법 구현 및 하이퍼 파라미터 튜닝',
      'epsilon 처리로 RMS=0 구간 안정화',
    ],
    achievements: [
      '하이퍼 파라미터 조정 및 FNN 앙상블 적용으로 모델 정확도 90.04% → 95.13% 개선',
    ],
    skills: ['Python', 'Librosa', 'scikit-learn', 'NumPy', 'PCA', 'Matplotlib'],
  },
  {
    id: 'webcrawling',
    name: '웹크롤링 데이터 시각화',
    subtitle: '오늘의집 제품 데이터 수집 및 분석',
    period: '2023.10 - 2023.11',
    tag: 'Side',
    overview:
      '오늘의집 사이트에서 제품 데이터를 크롤링하여 카테고리별 가격·리뷰·브랜드 현황을 분석하고 시각화한 프로젝트.',
    background:
      '동적 무한 스크롤 페이지에서 대량 데이터를 안정적으로 수집하고 소비자 트렌드를 시각화하여 인사이트를 도출하고자 했다.',
    coreFeatures: [
      '카테고리별 제품 이름, 가격, 할인률, 리뷰수, 브랜드 데이터 수집',
      '무한 스크롤 동적 페이지 처리 (스크롤·추출 동시 진행)',
      '소비자 검색 빈도 높은 브랜드 워드클라우드 시각화',
    ],
    troubleshooting: [
      {
        problem: '무한 스크롤 동적 페이지에서 스크롤 후 추출 시 데이터 누락 발생',
        solution: '스크롤과 데이터 추출을 동시 진행하고 전체 페이지의 1/2만큼만 스크롤하여 안정성 확보',
      },
    ],
    tasks: [
      'Selenium으로 무한 스크롤 동적 페이지 크롤링 구현',
      '카테고리별 제품 이름·가격·할인률·리뷰수·브랜드 데이터 수집 및 정제',
      '워드클라우드로 인기 브랜드 시각화',
    ],
    achievements: [
      '무한 스크롤 동적 페이지 크롤링 안정화 및 카테고리별 소비자 트렌드 시각화 완성',
    ],
    skills: ['Python', 'Selenium', 'Pandas', 'Matplotlib', 'WordCloud'],
  },
  {
    id: 'shuttle-monitor',
    name: '어린이 셔틀버스 위험 모니터링 시스템',
    subtitle: 'IoT 기반 실시간 위험 감지 및 알림',
    period: '2019.03 - 2019.11',
    tag: 'Side',
    overview:
      '라즈베리파이·IoT 센서를 활용해 어린이 셔틀버스 내 위험 상황을 실시간 감지하고 보호자에게 텔레그램으로 알림을 전송하는 시스템.',
    background:
      '어린이 통학버스 관련 안전 사고가 사회적 이슈가 되던 시점에 IoT 기반으로 실시간 위험을 감지·알림하는 시스템을 직접 설계하고 구현했다. 졸업 논문 프로젝트.',
    coreFeatures: [
      '모션·소리 감지 센서, 라즈베리파이 웹캠, GPS 연동 설계',
      '차영상 기법(Frame Differencing)으로 이상 움직임 감지',
      '텔레그램 봇으로 GPS 위치 정보 포함 실시간 알림 전송',
      '어린이 심리 안정을 위한 뽀로로 사운드 출력 기능',
    ],
    troubleshooting: [],
    tasks: [
      '모션·소리 감지 센서, 라즈베리파이 웹캠, GPS 데이터 시트 분석 후 연동 설계',
      '차영상 기법을 라즈베리파이 웹캠에 적용하여 이상 움직임 감지',
      '셀레니움으로 GPS 정보 획득 후 텔레그램 봇으로 메시지 전송 처리',
    ],
    achievements: [
      '졸업 논문 채택 및 IT캡스톤디자인 경진대회 동상 수상',
    ],
    skills: ['Python', 'Raspberry Pi', 'OpenCV', 'Selenium', 'Telegram API', 'IoT'],
  },
]
