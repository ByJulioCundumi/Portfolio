import "./contact.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

function Contact() {
    return <>
        <section className="contact" id="contactPage">
            <h2 className="contact__title">Contact Me</h2>

            <div className="contact__container">
                <div className="contact__info">
                    <div className="contact__additional">
                        <div className="contact__additional--info">
                            <FaPhoneAlt className="contact__icon"/> <p>+57 321 561 0912</p>
                        </div>
                        <div className="contact__additional--info">
                            <MdEmail className="contact__icon"/> <p>julio.ce.dev@gmail.com</p>
                        </div>
                        <div className="contact__additional--info">
                            <FaLocationDot className="contact__icon"/> <p>Colombia, Cali</p>
                        </div>
                    </div>

                    <div className="contact__additional--btns">
                        <a target="_blank" href="https://www.linkedin.com/in/julio-cundumi-estupi%C3%B1an-7923092aa/" className="contact__additional--btn contact__btn--icon"><FaLinkedin className="contact__icon"/></a>
                        <a target="_blank" href="https://github.com/ByJulioCundumi" className="contact__additional--btn contact__btn--icon"><FaGithubAlt className="contact__icon"/></a>
                    </div>
                </div>
                <div className="contact__line"></div>
                <div className="contact__message">
                    <form className="contact__form">
                        <p>Your Name</p>
                        <input required type="text" name="" id="" />

                        <p>Your Email</p>
                        <input required type="text" name="" id="" />

                        <p>Your Message</p>
                        <textarea required></textarea>
                        <button className="contact__btn">Send Message</button>
                    </form>
                </div>
            </div>



        </section>
    </>
}

export default Contact;