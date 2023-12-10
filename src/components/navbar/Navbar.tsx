import "./navbar.scss";
import { MdMenu } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [navMenu, setNavMenu] = useState("home");

    const showSidebar = ()=>{
        setShowMenu(!showMenu)
    }

    const handleNavMenu = (data:string)=>{
        setNavMenu(data)
    }

    return <>
        <nav className="nav">
            <section className="nav__container">
                <a href="#homePage" className="nav__logo"><span>W</span>eb <span>D</span>eve<span>l</span>ope<span>r</span></a>

                <button className="nav__btn"> <MdMenu className="nav__btn--icon"
                    onClick={showSidebar}
                /> </button>

                <ul className="nav__ul">
                    <li className={navMenu == "home" ? "nav__selected" : "nav__li"}>
                        <a href="#homePage" className="nav__a" onClick={()=> handleNavMenu("home")}>Home</a>
                    </li>
                    <li className={navMenu == "about" ? "nav__selected" : "nav__li"}>
                        <a href="#aboutPage" className="nav__a" onClick={()=> handleNavMenu("about")}>About</a>
                    </li>
                    <li className={navMenu == "projects" ? "nav__selected" : "nav__li"}>
                        <a href="#projectsPage" className="nav__a" onClick={()=> handleNavMenu("projects")}>Projects</a>
                    </li>
                    <li className={navMenu == "contact" ? "nav__selected" : "nav__li"}>
                        <a href="#contactPage" className="nav__a" onClick={()=> handleNavMenu("contact")}>Contact</a>
                    </li>
                </ul>
            </section>

            <section className={`${showMenu ? "sidebar-show" : "sidebar"}`}>
                <a href="#homePage" className="sidebar__logo">Web Developer</a>

                <ul className="sidebar__ul">
                    <li className="sidebar__li">
                        <a href="#homePage" className="sidebar__a">Home</a>
                    </li>
                    <li className="sidebar__li">
                        <a href="#aboutPage" className="sidebar__a">About</a>
                    </li>
                    <li className="sidebar__li">
                        <a href="#projectsPage" className="sidebar__a">Projects</a>
                    </li>
                    <li className="sidebar__li">
                        <a href="#contactPage" className="sidebar__a">Contact</a>
                    </li>
                </ul>

                <button className="sidebar__btn"> <CiLogout className="sidebar__btn--icon"
                    onClick={showSidebar}
                /> </button>
            </section>
        </nav>
    </>
}

export default Navbar