import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

function ProjectCard({ p, onClick }) {
  const ref = useScrollReveal()

  return (
    <div className="project-card-full reveal" ref={ref} onClick={onClick}>
      <div className="project-card-full-header">
        <div>
          <div className="modal-tag-row" style={{ marginBottom: '6px' }}>
            <span className={`project-tag ${p.tag === 'Side' ? 'tag-side' : 'tag-work'}`}>
              {p.tag === 'Side' ? 'Side Project' : 'Work'}
            </span>
          </div>
          <h3>{p.name}</h3>
          <p className="subtitle">{p.subtitle}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
          <span className="period-badge">{p.period}</span>
          <span className="card-more-hint">자세히 보기 →</span>
        </div>
      </div>
      <p className="project-overview-full">{p.overview}</p>
      <div className="tech-tags">
        {p.skills.map(s => <span key={s} className="tech-tag">{s}</span>)}
      </div>
    </div>
  )
}

function PrintProject({ p }) {
  return (
    <div className="print-project">
      <div className="print-project-header">
        <div className="print-project-name">{p.name} — {p.subtitle}</div>
        <div className="print-project-meta">{p.period} · {p.tag === 'Work' ? 'Work' : 'Side Project'}</div>
      </div>
      <p className="print-project-overview">{p.overview}</p>

      <div className="print-section-label">Core Features</div>
      <ul className="print-list">
        {p.coreFeatures.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      <div className="print-section-label">Troubleshooting</div>
      <div className="print-trouble">
        {p.troubleshooting.map((t, i) => (
          <div key={i} className="print-trouble-item">
            <div className="print-trouble-row">
              <span className="print-badge print-badge-p">Problem</span>
              <span>{t.problem}</span>
            </div>
            <div className="print-trouble-row">
              <span className="print-badge print-badge-s">Solution</span>
              <span>{t.solution}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="print-section-label">Achievements</div>
      <ul className="print-list">
        {p.achievements.map((a, i) => <li key={i}>{a}</li>)}
      </ul>

      <div className="print-tech-tags">
        {p.skills.map(s => <span key={s} className="print-tech-tag">{s}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
  const titleRef = useScrollReveal()
  const sideRef = useScrollReveal()
  const [selected, setSelected] = useState(null)

  const workProjects = projects.filter(p => p.tag === 'Work')
  const sideProjects = projects.filter(p => p.tag === 'Side')

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>
          <span>Work</span>
        </h2>
        {/* Work 화면용 카드 목록 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {workProjects.map(p => (
            <ProjectCard key={p.id} p={p} onClick={() => setSelected(p)} />
          ))}
        </div>
        {/* Work 인쇄 전용 상세 목록 */}
        <div className="print-only">
          {workProjects.map(p => (
            <PrintProject key={p.id} p={p} />
          ))}
        </div>

        <h2 className="section-title reveal" ref={sideRef} style={{ marginTop: '60px' }}>
          <span>Side</span>
        </h2>
        {/* Side 화면용 카드 목록 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {sideProjects.map(p => (
            <ProjectCard key={p.id} p={p} onClick={() => setSelected(p)} />
          ))}
        </div>
        {/* Side 인쇄 전용 상세 목록 */}
        <div className="print-only">
          {sideProjects.map(p => (
            <PrintProject key={p.id} p={p} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
