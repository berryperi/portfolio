import { useScrollReveal } from '../hooks/useScrollReveal'
import { experiences } from '../data/experience'

function ExperienceCard({ exp }) {
  const ref = useScrollReveal()

  return (
    <div className="exp-card reveal" ref={ref}>
      <div className="company-header">
        <div className="company-icon">T3</div>
        <div className="company-info">
          <h3>{exp.company} — {exp.team}</h3>
          <div className="company-meta">
            <span>{exp.period}</span>
            <span>·</span>
            <span className="badge-active">재직중</span>
            <span>·</span>
            <span>{exp.type}</span>
          </div>
          <p className="company-desc">{exp.description}</p>
        </div>
      </div>

      <div className="exp-details">
        <div className="exp-section">
          <h4 className="exp-section-label">주요 업무</h4>
          <ul className="exp-list">
            {exp.tasks.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
        <div className="exp-section">
          <h4 className="exp-section-label">대표 성과</h4>
          <ul className="exp-list exp-list-achievement">
            {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const titleRef = useScrollReveal()

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>
          <span>Experience</span>
        </h2>
        {experiences.map(exp => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>
    </section>
  )
}
