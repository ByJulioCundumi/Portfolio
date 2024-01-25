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
                <img src="https://res.cloudinary.com/dscmahnke/image/upload/v1706141227/portfolio/qcr3lzpmuaznnpxg544c.png" alt="" className="greeting__img--blob" />
                <img src="https://res.cloudinary.com/dscmahnke/image/upload/v1706141229/portfolio/kyu3ebr8letodw1vdnzr.webp" alt="" className="greeting__img--img" />
            </div>

            <div className="greeting__text">
                <p className="greeting__hello">Hello, I'm</p>
                <h1 className="greeting__h1">Julio Cundumi E.</h1>
                <p className="greeting__dev"> Web <span className="greeting__active">{text} <Cursor/></span> </p>

                <div className="greeting__btn">
                    <a href="dist/assets/files/DevCV-React-Angular.pdf" download="Julio-Dev-CV" className="greeting__btn--cv">Download CV</a>
                    <a href="#contactPage" className="greeting__btn--contact">Conctact</a>
                </div>
            </div>
        </section>
    </>
}

export default Greeting;