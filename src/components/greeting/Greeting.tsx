import "./greeting.scss";

function Greeting() {
    return <>
        <section className="greeting">
            <div className="greeting__img">
                <img src="https://img.freepik.com/premium-photo/developer-testing-app-design_665280-9621.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698796800&semt=ais" alt="" className="greeting__img--img" />
            </div>

            <div className="greeting__text">
                <p className="greeting__hello">Hello, I'm</p>
                <h1 className="greeting__h1">Julio Cundumi E.</h1>
                <p className="greeting__dev">Web Developer</p>

                <div className="greeting__btn">
                    <button className="greeting__btn--cv">Download CV</button>
                    <button className="greeting__btn--contact">Conctact</button>
                </div>
            </div>
        </section>
    </>
}

export default Greeting;