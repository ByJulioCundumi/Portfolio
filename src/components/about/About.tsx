import "./about.scss";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function About() {
  const [aboutMenu, setAboutMenu] = useState("services");

  const handleAboutMenu = (data:string)=>{
    setAboutMenu(data)
}
  return <>
    <section className="about" id="aboutPage">
        <h2 className="about__title">Get to know more</h2>
        <p className="about__p">About Me</p>
        
        <div className="about__container">
            <div className="about__text">
                <ul className="about__nav">
                    <li className={aboutMenu == "mystory" ? "about__selected" : "about__li"}><Link to={"/mystory"} className="about__a" onClick={()=> handleAboutMenu("mystory")}>My Story</Link></li>
                    <li className={aboutMenu == "education" ? "about__selected" : "about__li"}><Link to={"/education"} className="about__a" onClick={()=> handleAboutMenu("education")}>Education</Link></li>
                    <li className={aboutMenu == "skills" ? "about__selected" : "about__li"}><Link to={"/skills"} className="about__a" onClick={()=> handleAboutMenu("skills")}>Skills</Link></li>
                    <li className={aboutMenu == "services" ? "about__selected" : "about__li"}><Link to={"/"} className="about__a" onClick={()=> handleAboutMenu("services")}>Services</Link></li>
                </ul>
                <Outlet/>
            </div>
          </div>
    </section>
  </>
}

export default About;