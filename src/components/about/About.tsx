import "./about.scss";
import { Link, Outlet } from "react-router-dom";

function About() {
  return <>
    <section className="about">
        <h2 className="about__title">Get to know more</h2>
        <p className="about__p">About Me</p>
        
        <div className="about__container">
            <div className="about__text">
                <ul className="about__nav">
                    <li className="about__li"><Link to={"/mystory"} className="about__a">My Story</Link></li>
                    <li className="about__li"><Link to={"/"} className="about__a">Skills</Link></li>
                    <li className="about__li"><Link to={"/education"} className="about__a">Education</Link></li>
                    <li className="about__li"><Link to={"/experience"} className="about__a">Experience</Link></li>
                </ul>
                <Outlet/>
            </div>
            <img src="https://assets-global.website-files.com/60f5b6738a95b57fe76faba5/650ca5eb3182230298b775e3_Software%20Architect_%20What%20It%20Is%2C%20What%20They%20Do%2C%20%26%20Salary.png" alt="" className="about__img" />
        </div>
    </section>
  </>
}

export default About;