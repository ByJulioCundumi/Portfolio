import "./navbar.scss";
import { MdMenu } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const showSidebar = ()=>{
        setShowMenu(!showMenu)
    }

    return <>
        <nav className="nav">
            <section className="nav__container">
                <a href="#" className="nav__logo"><span>W</span>eb <span>D</span>e<span>v</span>e<span>l</span>o<span>p</span>e<span>r</span></a>

                <button className="nav__btn"> <MdMenu className="nav__btn--icon"
                    onClick={showSidebar}
                /> </button>

                <ul className="nav__ul">
                    <li className="nav__li">
                        <a href="#" className="nav__a">Home</a>
                    </li>
                    <li className="nav__li">
                        <a href="#" className="nav__a">About</a>
                    </li>
                    <li className="nav__li">
                        <a href="#" className="nav__a">Projects</a>
                    </li>
                    <li className="nav__li">
                        <a href="#" className="nav__a">Contact</a>
                    </li>
                </ul>
            </section>

            <section className={`${showMenu ? "sidebar-show" : "sidebar"}`}>
                <a href="#" className="sidebar__logo">Web Developer</a>

                <ul className="sidebar__ul">
                    <li className="sidebar__li">
                        <a href="#" className="sidebar__a">Home</a>
                    </li>
                    <li className="sidebar__li">
                        <a href="#" className="sidebar__a">About</a>
                    </li>
                    <li className="sidebar__li">
                        <a href="#" className="sidebar__a">Projects</a>
                    </li>
                    <li className="sidebar__li">
                        <a href="#" className="sidebar__a">Contact</a>
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