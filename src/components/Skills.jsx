import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills } from '../data/skills'

export default function Skills() {
  const titleRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>
          <span>Skills</span>
        </h2>
        <div className="skills-bento reveal" ref={gridRef}>
          {skills.map(row => (
            <div key={row.category} className="skill-card">
              <span className="skill-category">{row.category}</span>
              <div className="skill-tags">
                {row.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
