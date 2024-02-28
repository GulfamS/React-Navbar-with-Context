import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBgClassName = isDarkTheme
        ? 'about-dark-theme'
        : 'about-light-theme'

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClass = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'

      return (
        <div className={`about-app-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="responsive-container">
            <div className="about-container">
              <img src={aboutImageUrl} alt="about" className="about-img" />
              <h1 className={`about-heading ${aboutTextClass}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
