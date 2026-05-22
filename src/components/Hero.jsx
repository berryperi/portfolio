export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-label">AI Engineer</p>
        <h1 className="hero-name">윤승원</h1>
        <p className="hero-title">AI Research &amp; Development</p>
        <p className="hero-summary">
          티쓰리엔터테인먼트 AI연구개발팀에서 최신 AI 기술을 리서치하고
          사내 업무 도구를 직접 설계·구현해온 3년차 AI 개발자입니다.
          <br /><br />
          VLM 기반 멀티모달 결함 탐지 파이프라인, AI Midi Generator,
          오픈소스 음성 AI 서빙 등 반복·비효율 업무를 분석하여
          End-to-End 자동화 워크플로우로 재설계하는 것을 지향합니다.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#contact">연락하기 →</a>
          <a className="btn-secondary" href="#projects">프로젝트 보기</a>
        </div>
        <div className="hero-links">
          <a className="hero-link" href="mailto:ysw4926@naver.com">
            ✉ ysw4926@naver.com
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">2+</span>
            <span className="hero-stat-label">Years Exp</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">4</span>
            <span className="hero-stat-label">사내 서비스</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">70%</span>
            <span className="hero-stat-label">업무 시간 단축</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">A100</span>
            <span className="hero-stat-label">GPU 운영</span>
          </div>
        </div>
      </div>
    </section>
  )
}
