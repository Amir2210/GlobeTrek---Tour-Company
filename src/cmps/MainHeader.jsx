import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from "react-router-dom"
export function MainHeader() {

  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const navRef = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false)
      setIsOverlayVisible(false)
    }
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
    setIsOverlayVisible(!isNavOpen)
  }

  const location = useLocation();
  return (
    <header className='main-header full main-layout'>
      <nav ref={navRef} className='main-nav'>
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
        <div className={isNavOpen ? 'nav-links nav-open' : 'nav-links'}>
          {location.pathname === '/' ? (
            <ul>
              <li onClick={isNavOpen ? toggleNav : null}><a href="#home">Home</a></li>
              <li onClick={isNavOpen ? toggleNav : null}><a href="#about">About</a></li>
              <li onClick={isNavOpen ? toggleNav : null}><a href="#services">Services</a></li>
              <li onClick={isNavOpen ? toggleNav : null}><a href="#tours">Tours</a></li>
            </ul>
          ) : (
            null
          )}
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
        {location.pathname === '/' ? (
          <div className='btn-toggle-menu' onClick={toggleNav}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>) : null}
      </nav>
      {isOverlayVisible && (
        <div className={`overlay ${isOverlayVisible ? 'visible' : ''}`} onClick={toggleNav}></div>
      )}
    </header>
  )
}