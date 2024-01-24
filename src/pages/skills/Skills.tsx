import "./skills.scss";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { PiBracketsCurlyLight } from "react-icons/pi";

function Skills() {
    return <>
        <section className="skills">
            <h3 className="skills__title">My Skills:</h3>

            <div className="skills__boxcontainer skills__title">
                <div className="skills__box">
                    <FaHtml5 />
                    <p>Html</p>
                </div>
                <div className="skills__box">
                    <IoLogoCss3 />
                    <p>Css</p>
                </div>
                <div className="skills__box">
                    <IoLogoJavascript />
                    <p>Javascript</p>
                </div>
                <div className="skills__box">
                    <SiTypescript />
                    <p>TypeScript</p>
                </div>
                <div className="skills__box">
                    <FaReact />
                    <p>React</p>
                </div>
                <div className="skills__box">
                    <FaAngular />
                    <p>Angular</p>
                </div>
                <div className="skills__box">
                    <FaNodeJs />
                    <p>Node js</p>
                </div>
                <div className="skills__box">
                    <SiExpress />
                    <p>Express js</p>
                </div>
                <div className="skills__box">
                    <GrMysql />
                    <p>MySQL</p>
                </div>
                <div className="skills__box">
                    <PiBracketsCurlyLight />
                    <p>TypeORM</p>
                </div>
                <div className="skills__box">
                    <SiMongodb />
                    <p>MongoDB</p>
                </div>
                <div className="skills__box">
                    <SiMongoose />
                    <p>Mongoose</p>
                </div>
            </div>
            
            <div className="skills__tools">
                <h3 className="skills__title">Tools:</h3>
                <div className="skills__boxcontainer skills__title">
                    <div className="skills__box">
                        <FaGitAlt />
                        <p>Git</p>
                    </div>
                    <div className="skills__box">
                        <FaGithub />
                        <p>Github</p>
                    </div>
                    <div className="skills__box">
                        <FaNpm />
                        <p>Npm</p>
                    </div>
                    <div className="skills__box">
                        <FaSass />
                        <p>Sass</p>
                    </div>
                </div>
            </div>
            <div className="skills__languages skills__title">
                <h3 className="skills__title">Languages:</h3>
                <div className="skills__boxcontainer skills__title">
                    <div className="skills__box">
                        <p>Spanish [Native]</p>
                    </div>
                    <div className="skills__box">
                        <p>English [A2]</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Skills