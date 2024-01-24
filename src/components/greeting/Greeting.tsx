import "./greeting.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Greeting() {
    const [text] = useTypewriter({
        words: ["Dev. | React, Angular"],
        loop: 0
    });

    return <>
        <section className="greeting" id="homePage">
            <div className="greeting__img">
                <img src="src/assets/img/blob.png" alt="" className="greeting__img--blob" />
                <img src="src/assets/img/computer.webp" alt="" className="greeting__img--img" />
            </div>

            <div className="greeting__text">
                <p className="greeting__hello">Hello, I'm</p>
                <h1 className="greeting__h1">Julio Cundumi E.</h1>
                <p className="greeting__dev"> Web <span className="greeting__active">{text} <Cursor/></span> </p>

                <div className="greeting__btn">
                    <a href="#" download={"src/assets/files/"} className="greeting__btn--cv">Download CV</a>
                    <a href="#contactPage" className="greeting__btn--contact">Conctact</a>
                </div>
            </div>
        </section>
    </>
}

export default Greeting;