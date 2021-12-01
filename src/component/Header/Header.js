import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useLocation } from 'react-router-dom';
import './Header.scss'
function Header() {


  //   const location =useLocation();
  //   const { pathname }= location
  // const splitLocation = pathname.split


  const [isActive, setActive] = useState();

  const [value, setValue] = useState('');

  const [toggle, settoggle] = useState(false);

  const handeleactive = (name, data) => {
    console.log(name)
    // alert(name)
    setActive(name);
    setShowResults(true)

  }


  const [showResults, setShowResults] = React.useState(false)
  // const onClick = () => setShowResults(true)





  return (
    // <div className="container">
    //   <div className="main_header">
    //     <div className="header">
    //       <img src="./Assest/bgshape/logo.PNG" alt="" />
    //       <div className="menudiv">
    //         <i class="fas fa-bars" onClick={() => settoggle(!toggle)}></i>
    //         <ul>
    //           <li className={isActive == 'About' ? 'activeBtn' : null} onClick={e => handeleactive('About')}><Link to="about" spy={true} smooth={true}>About</Link></li>
    //           <li className={isActive == 'Eduction' ? 'activeBtn' : null} onClick={e => handeleactive('Eduction')}><Link to="eduction" spy={true} smooth={true}>Eduction</Link></li>
    //           <li className={isActive == 'Experince' ? 'activeBtn' : null} onClick={e => handeleactive('Experince')}><Link to="experince" spy={true} smooth={true}>Experince</Link></li>
    //           <li className={isActive == 'Skills' ? 'activeBtn' : null} onClick={e => handeleactive('Skills')}><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
    //           <li className={isActive == 'Portfolio' ? 'activeBtn' : null} onClick={e => handeleactive('Portfolio')}><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
    //           <li className={isActive == 'contact' ? 'activeBtn' : null} onClick={e => handeleactive('contact')}><Link to="contact" spy={true} smooth={true}>contact</Link></li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className={toggle ? "header2" : 'header3'}>
    //       <div className="menudiv">
    //         <ul >
    //           <li><Link to="about" spy={true} >About</Link></li>
    //           <li><Link to="eduction" spy={true} >Eduction</Link></li>
    //           <li><Link to="experince" spy={true} >Experince</Link></li>
    //           <li><Link to="skills" spy={true}>Skills</Link></li>
    //           <li><Link to="portfolio" spy={true}>Portfolio</Link></li>
    //           <li><Link to="contact" spy={true} >contact</Link></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>




    <div className="MainHeader">
      <div className="container">
        <nav>
          <div className="logo">
            <h3>
              P<span>o</span>rtf<span>o</span>li<span>o</span>
            </h3>
          </div>
          <div className="MenuList">

            <ul>
              <li className={isActive == 'Home' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Home')} to="home" spy={true} >Home</Link>

              </li>
              <li className={isActive == 'Education' ? 'activeMenu' : null} >
                <Link onClick={e => handeleactive('Education')} to="eduction" spy={true} >Education</Link>

              </li>

              <li className={isActive == 'Skills' ? 'activeMenu' : null} >
                <Link onClick={e => handeleactive('Skills')} to="skills" spy={true} >Skills</Link>

              </li>
              <li className={isActive == 'Experince' ? 'activeMenu' : null} >
                <Link onClick={e => handeleactive('Experince')} to="experince" spy={true} >Experince</Link>

              </li>
              <li className={isActive == 'Portfolio' ? 'activeMenu' : null} >
                <Link onClick={e => handeleactive('Portfolio')} to="portfolio" spy={true} >Portfolio</Link>

              </li>
              <li className={isActive == 'Contact' ? 'activeMenu' : null}>
                <Link onClick={e => handeleactive('Contact')} to="contact" spy={true} >Contact</Link>

              </li>
            </ul>
          </div>

          <div className="smMenuList">
            <button onClick={() => settoggle(!toggle)}>
              <i class="fas fa-bars"></i>
            </button>
            <ul className={toggle ? "Show" : "Hide"}>
              <li className={isActive == 'Home' ? 'sm_activeMenu' : null}>
                <Link onClick={e => handeleactive('Home')} to="home" spy={true} >
                  Home
                </Link>

              </li>
              <li className={isActive == 'Education' ? 'sm_activeMenu' : null} >
                <Link onClick={e => handeleactive('Education')} to="education" spy={true} >
                  <span>Education</span>
                </Link>
              </li>
              <li className={isActive == 'Experince' ? 'sm_activeMenu' : null}>
                <Link onClick={e => handeleactive('Experince')} to="experince" spy={true} >
                  <span>Experince</span>
                </Link>
              </li>
              <li className={isActive == 'Skills' ? 'sm_activeMenu' : null} >
                <Link onClick={e => handeleactive('Skills')} to="skills" spy={true} >
                  <span>Skills</span>
                </Link>
              </li>
              <li className={isActive == 'Portfolio' ? 'sm_activeMenu' : null}>
                <Link onClick={e => handeleactive('Portfolio')} to="portfolio" spy={true} >
                  Portfolio
                </Link>
              </li>
              <li className={isActive == 'Contact' ? 'sm_activeMenu' : null}>
                <Link onClick={e => handeleactive('Contact')} to="contact" spy={true} >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

  )
}

export default Header

