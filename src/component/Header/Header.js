import React, { useState } from 'react'
import './Header.scss'
function Header() {
  const [isActive, setActive] = useState();

  const [value, setValue] = useState('');

  const [toggle, settoggle] = useState(false);

  const handeleactive = (name, data) => {
    // alert(name)
    setActive(name);

  }
  return (
    <div className="container">
      <div className="main_header">
        <div className="header">
          <img src="./Assest/bgshape/logo.PNG" alt="" />
          <div className="menudiv">
            <i class="fas fa-bars" onClick={() => settoggle(!toggle)}></i>
            <ul>
              <li className={isActive == 'About' ? 'activeBtn' : null} onClick={e => handeleactive('About')}>About</li>
              <li className={isActive == 'Eduction' ? 'activeBtn' : null} onClick={e => handeleactive('Eduction')}>Eduction</li>
              <li className={isActive == 'Experince' ? 'activeBtn' : null} onClick={e => handeleactive('Experince')}>Experince</li>
              <li className={isActive == 'Skills' ? 'activeBtn' : null} onClick={e => handeleactive('Skills')}>Skills</li>
              <li className={isActive == 'Portfolio' ? 'activeBtn' : null} onClick={e => handeleactive('Portfolio')}>Portfolio</li>
              <li className={isActive == 'contact' ? 'activeBtn' : null} onClick={e => handeleactive('contact')}>contact</li>
            </ul>
          </div>
        </div>

        <div className={toggle ? "header2" : 'header3'}>
          <div className="menudiv">
            <ul >
              <li>About</li>
              <li>Eduction</li>
              <li>Experince</li>
              <li>Skills</li>
              <li>Portfolio</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

