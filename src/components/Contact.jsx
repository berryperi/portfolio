import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const titleRef = useScrollReveal()
  const boxRef = useScrollReveal()

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>
          <span>Contact</span>
        </h2>
        <div className="contact-box reveal" ref={boxRef}>
          <h3>함께 일해요 👋</h3>
          <p>
            AI 기술을 실제 업무에 연결하는 것에 관심이 많습니다.<br />
            채용, 협업, 기술 관련 문의는 아래로 연락해 주세요.
          </p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:ysw4926@naver.com">
              ✉️ ysw4926@naver.com
            </a>
            <a className="contact-link" href="tel:+821049268567">
              📞 010-4926-8567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
