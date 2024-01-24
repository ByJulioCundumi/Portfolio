import "./contact.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const formRef = useRef(null);

    const submitForm = handleSubmit(async () => {
        if (formRef.current != null) {
            //
            const data:HTMLFormElement | string = formRef.current;
            const result = await emailjs.sendForm("service_yl20llh", "template_4aer4bu", data, 'AZ-t5t8XEoL5X7Po7')
            //
            if(result.status == 200){
                alert("Message sent successfully ;)")
            }
        }
    })

    return <>
        <section className="contact" id="contactPage">
            <h2 className="contact__title">Contact Me</h2>

            <div className="contact__container">
                <div className="contact__info">
                    <div className="contact__additional">
                        <div className="contact__additional--info">
                            <FaPhoneAlt className="contact__icon" /> <p>+57 321 561 0912</p>
                        </div>
                        <div className="contact__additional--info">
                            <MdEmail className="contact__icon" /> <p>julio.ce.dev@gmail.com</p>
                        </div>
                        <div className="contact__additional--info">
                            <FaLocationDot className="contact__icon" /> <p>Colombia, Cali</p>
                        </div>
                    </div>

                    <div className="contact__additional--btns">
                        <a target="_blank" href="https://www.linkedin.com/in/julio-cundumi-estupi%C3%B1an-7923092aa/" className="contact__additional--btn contact__btn--icon"><FaLinkedin className="contact__icon" /></a>
                        <a target="_blank" href="https://github.com/ByJulioCundumi" className="contact__additional--btn contact__btn--icon"><FaGithubAlt className="contact__icon" /></a>
                    </div>
                </div>
                <div className="contact__line"></div>
                <div className="contact__message">
                    <form className="contact__form" ref={formRef} onSubmit={submitForm}>
                        <div>
                            <p>Your Name</p>
                            <input type="text" id="" {...register("user_name", {
                                required: {
                                    value: true,
                                    message: "this field is required"
                                }
                            })} />
                            {errors.user_name && typeof errors.user_name.message === "string" && <p className="error">{errors.user_name.message}</p>}
                        </div>

                        <div>
                            <p>Your Email</p>
                            <input type="email" id="" {...register("user_email", {
                                required: {
                                    value: true,
                                    message: "this field is required"
                                }
                            })} />
                            {errors.user_email && typeof errors.user_email.message === "string" && <p className="error">{errors.user_email.message}</p>}
                        </div>

                        <div>
                            <p>Your Message</p>
                            <textarea {...register("message", {
                                required: {
                                    value: true,
                                    message: "this field is required"
                                }
                            })} />
                            {errors.message && typeof errors.message.message === "string" && <p className="error">{errors.message.message}</p>}
                        </div>
                        <button type="submit" className="contact__btn">Send Message</button>
                    </form>
                </div>
            </div>



        </section>
    </>
}

export default Contact;