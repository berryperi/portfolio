export default function Navbar({ theme, onToggle }) {
  return (
    <nav className="navbar">
      <div className="container">
        <span className="nav-logo">seungwon.dev</span>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button className="theme-btn" onClick={onToggle} title="테마 전환">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
