import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const NotfoundBgClassName = isDarkTheme
        ? 'notfound-bg-dark'
        : 'notfound-bg-light'

      const notfoundHeadingText = isDarkTheme
        ? 'notfound-heading-light'
        : 'notfound-heading-dark'

      const notfoundContentText = isDarkTheme
        ? 'notfound-content-light'
        : 'notfound-content-dark'

      return (
        <div className={`notfound-app-container${NotfoundBgClassName}`}>
          <Navbar />
          <div className="notfound-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notfound-img"
            />
            <h1 className={`notfound-heading ${notfoundHeadingText}`}>
              Lost Your Way?
            </h1>
            <p className={`notfound-content ${notfoundContentText}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
