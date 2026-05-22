import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>

        {/* 헤더 */}
        <div className="modal-header">
          <div>
            <div className="modal-tag-row">
              <span className="modal-case-label">Case Study</span>
              <span className="project-tag tag-work">Work</span>
              <span className="modal-period">{project.period}</span>
            </div>
            <h2 className="modal-title">{project.name}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* 본문 */}
        <div className="modal-body">

          <p className="modal-overview">{project.overview}</p>

          <div className="tech-tags" style={{ marginBottom: '32px' }}>
            {project.skills.map(s => <span key={s} className="tech-tag">{s}</span>)}
          </div>

          {/* Background — circle */}
          <div className="modal-section-block">
            <div className="modal-block-label">
              <span className="label-shape label-circle" />
              Background
            </div>
            <p className="modal-block-text">{project.background}</p>
          </div>

          {/* Core Features — rounded square */}
          <div className="modal-section-block">
            <div className="modal-block-label">
              <span className="label-shape label-square" />
              Core Features
            </div>
            <ul className="modal-feature-list">
              {project.coreFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          {/* Troubleshooting — diamond */}
          <div className="modal-section-block">
            <div className="modal-block-label">
              <span className="label-shape label-diamond" />
              Troubleshooting
            </div>
            <div className="modal-trouble-list">
              {project.troubleshooting.map((t, i) => (
                <div key={i} className="modal-trouble-item">
                  <div className="trouble-problem">
                    <span className="trouble-badge trouble-badge-problem">Problem</span>
                    <p>{t.problem}</p>
                  </div>
                  <div className="trouble-solution">
                    <span className="trouble-badge trouble-badge-solution">Solution</span>
                    <p>{t.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements — pill */}
          <div className="modal-section-block">
            <div className="modal-block-label">
              <span className="label-shape label-pill" />
              Achievements
            </div>
            <ul className="modal-achievement-list">
              {project.achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
