import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-brand'>
        <h1 className='navbar-brand-name'>The Nobel Prize Laureates</h1>
      </div>

      <div className='navbar-creator'>
        <span className='navbar-creator-name'>SUMANTH KALLURI</span>
        <ul className='navbar-social-link'>
          
          <li className='navbar-social-link-item'>
            <a href='https://www.linkedin.com/in/sumanth-kalluri-89b3b420b/'>
              <i className='navbar-icons fa-brands fa-linkedin'></i>
            </a>
          </li>
          <li className='navbar-social-link-item'>
            <a href='https://github.com/kallurisumanth'>
              <i className='navbar-icons fa-brands fa-github'></i>
            </a>
          </li>
          <li className='navbar-social-link-item'>
            <a href='https://www.facebook.com/kalluri.sumanth.3'>
              <i className='navbar-icons fa-brands fa-facebook'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
