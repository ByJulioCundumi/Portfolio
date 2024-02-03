import "./education.scss";
import { PiBooksThin } from "react-icons/pi";

function Education() {
  return <>
    <section className="education">
        <h3 className="education__title">My Education</h3>

        <div className="education__text">
            <PiBooksThin className="education__icon"/>
            <p className="education__degree">Software Development Technology</p>
            <div className="education__date">
                <p className="education__degree">6 Semesters</p>
                <p>-</p>
                <p>Jan 2022</p>
                <p>-</p>
                <p>2025</p>
            </div>
            <p className="education__uni">Catholic University Foundation of the North. [Colombia]</p>
        </div>
    </section>
  </>
}

export default Education