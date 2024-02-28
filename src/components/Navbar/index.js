import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navBgClassName = isDarkTheme ? 'nav-bg-dark' : 'nav-bg-light'

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'list-dark-theme'
        : 'list-light-theme'

      return (
        <div className={`navbar ${navBgClassName}`}>
          <div className="nav-content">
            <img src={websiteLogoUrl} alt="website logo" className="logo" />
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              data-testid="theme"
              className="theme-btn"
              onClick={onToggleTheme}
            >
              <img src={themeImageUrl} className="theme-img" alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
