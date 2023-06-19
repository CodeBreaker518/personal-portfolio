import { NavLink, Link } from 'react-router-dom'
import { useRef } from 'react'
import PropTypes from 'prop-types'
import './HeaderNav.css'

export const HeaderNav = ({ isMenuActive, onMenuToggle }) => {
  const menuToggleRef = useRef(null)
  const navBarRef = useRef(null)

  const menuToggle = () => {
    if (window.innerWidth < 1000) {
      menuToggleRef.current.classList.toggle('active')
      onMenuToggle(!isMenuActive)
    }
  }

  return (
    <header className='header'>
      <div className={`menu toggle ${isMenuActive ? 'active' : ''}`} onClick={menuToggle} ref={menuToggleRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Link to='/' className='logo'>
        <span>D</span>
        <h3>Diego Perez Perez</h3>
      </Link>

      <nav className={`navbar ${isMenuActive ? 'active' : ''}`} ref={navBarRef}>
        <ul className='navbar-container'>
          <li className='nav-element'>
            <NavLink to='/' onClick={menuToggle}>
              Home
            </NavLink>
          </li>
          <li className='nav-element'>
            <NavLink to='/portfolio' onClick={menuToggle}>
              Portfolio
            </NavLink>
          </li>
          <li className='nav-element'>
            <NavLink to='/services' onClick={menuToggle}>
              Services
            </NavLink>
          </li>
          <li className='nav-element'>
            <NavLink to='/curriculum' onClick={menuToggle}>
              Curriculum
            </NavLink>
          </li>
          <li className='nav-element'>
            <NavLink to='/contact' onClick={menuToggle}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
HeaderNav.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  onMenuToggle: PropTypes.func.isRequired,
}
