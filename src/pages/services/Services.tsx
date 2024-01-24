import "./services.scss";

function Services() {
  return <>
    <section className="services">
        <h3 className="services__title">My Services:</h3>
        <div className="services__cards">
          <div className="services__card">
            <h4 className="services__card--title">Frontend - [Responsive]</h4>
            <p className="services__card--p">
              I use frameworks like React.js to build interactive and dynamic user experiences.
            </p>
          </div>
          <div className="services__card">
            <h4 className="services__card--title">Backend - [Rest API]</h4>
            <p className="services__card--p">
            I offer development services of secure REST APIs using jwt authentication.
            </p>
          </div>
          <div className="services__card">
            <h4 className="services__card--title">Full Stack</h4>
            <p className="services__card--p">
            I can build complete web applications using the MERN and MEAN stack, 
            </p>
          </div>
          <div className="services__card">
            <h4 className="services__card--title">Payment Integrations</h4>
            <p className="services__card--p">
            I offer integration services of secure payment systems such as Stripe or PayPal.
            </p>
          </div>
          <div className="services__card">
            <h4 className="services__card--title">Mantainance</h4>
            <p className="services__card--p">
              I offer maintenance services to ensure your applications run smoothly.
            </p>
          </div>
          <div className="services__card">
            <h4 className="services__card--title">Database Design</h4>
            <p className="services__card--p">
              I offer relational and non-relational database design services.
            </p>
          </div>
        </div>
    </section>
  </>
}

export default Services;