import "./greeting.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Greeting() {
    const [text] = useTypewriter({
        words: ["Developer"],
        loop: 0
    });

    return <>
        <section className="greeting" id="homePage">
            <div className="greeting__img">
                <img src="https://www.pngmart.com/files/23/Blob-PNG-Picture.png" alt="" className="greeting__img--blob" />
                <img src="https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png" alt="" className="greeting__img--img" />
            </div>

            <div className="greeting__text">
                <p className="greeting__hello">Hello, I'm</p>
                <h1 className="greeting__h1">Julio Cundumi E.</h1>
                <p className="greeting__dev"> Web <span className="greeting__active">{text} <Cursor/></span> </p>

                <div className="greeting__btn">
                    <button className="greeting__btn--cv">Download CV</button>
                    <button className="greeting__btn--contact">Conctact</button>
                </div>
            </div>
        </section>
    </>
}

export default Greeting;