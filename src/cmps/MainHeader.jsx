import { Link, useLocation } from "react-router-dom"
export function MainHeader() {
  const location = useLocation();
  return (
    <header className='main-header full main-layout'>
      <nav className='main-nav'>
        {location.pathname === '/' ? (
          <div className="nav-logo">
            <a href="#home">
              <h2>Globe<span className='colored-logo'>Trek</span></h2>
            </a>
          </div>
        ) : (
          <Link to='/'>
            <div className="nav-logo">
              <h2>
                Globe<span className='colored-logo'>Trek</span>
              </h2>
            </div>
          </Link>
        )}
        <div className='nav-links'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#tours">Tours</a></li>
          </ul>
        </div>
        <div className='nav-icons'>
          <ul>
            <li className='facebook'>
              <a href="https://www.facebook.com" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className='twitter'>
              <a href="https://www.twitter.com" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className='instagram'>
              <a href="https://www.instagram.com" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}