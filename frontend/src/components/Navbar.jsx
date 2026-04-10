import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🌿</span>
          FasalArogya
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/info" className={`nav-link ${isActive('/info')}`}>
              Disease Info
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className={`nav-link ${isActive('/login')}`}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className={`nav-link ${isActive('/signup')} nav-signup`}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
