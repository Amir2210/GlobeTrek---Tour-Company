export function Footer() {
  return (
    <footer className='main-footer main-layout full'>
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
              <i className="fa-brands fa-facebook fa-xl"></i>
            </a>
          </li>
          <li className='twitter'>
            <a href="https://www.twitter.com" target="_blank">
              <i className="fa-brands fa-twitter fa-xl"></i>
            </a>
          </li>
          <li className='instagram'>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
          </li>
        </ul>
      </div>
      <small className='copyright'>
        Copyright © GlobeTrek Travel Tours Company 2024 All Rights Reserved || Amir Yankolovich
      </small>
    </footer>
  )
}