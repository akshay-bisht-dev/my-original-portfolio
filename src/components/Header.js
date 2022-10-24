import { NavLink, useNavigate } from "react-router-dom";
import '../components/Header.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/")
  }

  const [showIcons, setShowIcons] = useState(false);
  return (
    <>
        <header className="header">
            <nav className="nav">
                <div className="nav-logo" onClick={() => goToHome()}>Portfolio</div>
                <div className={showIcons ? "nav-items nav-menu-items" : "nav-items"}>
                <ul>
                        <li><NavLink to='/' onClick={() => setShowIcons (!showIcons)}>Home</NavLink></li>
                        <li><NavLink to='/about' onClick={() => setShowIcons (!showIcons)}>About</NavLink></li>
                        <li><NavLink to='/contact' onClick={() => setShowIcons (!showIcons)}>Contact</NavLink></li>
                        <li><NavLink to='/skills' onClick={() => setShowIcons (!showIcons)}>Skills</NavLink></li>
                        <li><NavLink to='/projects' onClick={() => setShowIcons (!showIcons)}>Projects</NavLink></li>
                        <li><NavLink to='/internship' onClick={() => setShowIcons (!showIcons)}>Internship</NavLink></li>
                        </ul>
                </div>
                <div className="nav-icon-res">
                  <GiHamburgerMenu onClick={() => setShowIcons (!showIcons)}/>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header