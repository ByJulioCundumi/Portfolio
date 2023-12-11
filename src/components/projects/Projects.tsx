import "./projects.scss";
import { FaAngleDoubleDown } from "react-icons/fa";

function Projects() {
  return <>
    <section className="projects" id="projectsPage">
        <div className="projects__start">
            <FaAngleDoubleDown/>
            <h2 className="projects__title">Check My Projects</h2>
            <FaAngleDoubleDown/>
        </div>
        <div className="projects__container">

          <div className="projects__card">

            <div className="projects__text">
              <h3 className="projects__name">Proyecto X</h3>
              <p className="projects__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nesciunt repellendus architecto sit nemo vel obcaecati sed dicta eos nobis.
              </p>
              
              <div className="projects__tools">
                <h4>Tools used:</h4>
                <div className="projects__tools--used">
                  <p className="projects__tools--box">Html</p>
                  <p className="projects__tools--box">Css</p>
                  <p className="projects__tools--box">Javascript</p>
                  <p className="projects__tools--box">React</p>
                </div>
              </div>
              <button className="projects__btn">Review Code</button>
            </div>

            <img src="https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/por-que-tener-una-pagina-web.png" alt="" className="projects__img" />
          </div>

          <div className="projects__card">

            <div className="projects__text">
              <h3 className="projects__name">Proyecto X</h3>
              <p className="projects__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nesciunt repellendus architecto sit nemo vel obcaecati sed dicta eos nobis.
              </p>
              
              <div className="projects__tools">
                <h4>Tools used:</h4>
                <div className="projects__tools--used">
                  <p className="projects__tools--box">Html</p>
                  <p className="projects__tools--box">Css</p>
                  <p className="projects__tools--box">Javascript</p>
                  <p className="projects__tools--box">React</p>
                </div>
              </div>
              <button className="projects__btn">Review Code</button>
            </div>

            <img src="https://www.yeeply.com/wp-content/uploads/2017/04/crear-una-pagina-web-para-vender-2-1024x728-1.jpg" alt="" className="projects__img" />
          </div>

          <div className="projects__card">

            <div className="projects__text">
              <h3 className="projects__name">Proyecto X</h3>
              <p className="projects__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nesciunt repellendus architecto sit nemo vel obcaecati sed dicta eos nobis.
              </p>
              
              <div className="projects__tools">
                <h4>Tools used:</h4>
                <div className="projects__tools--used">
                  <p className="projects__tools--box">Html</p>
                  <p className="projects__tools--box">Css</p>
                  <p className="projects__tools--box">Javascript</p>
                  <p className="projects__tools--box">React</p>
                </div>
              </div>
              <button className="projects__btn">Review Code</button>
            </div>

            <img src="https://wellaggio.com/wp-content/uploads/2018/01/Wellaggio-diseno-web-valencia-Co%CC%81mo-seducir-a-tus-clientes-con-tu-pa%CC%81gina-web.jpg" alt="" className="projects__img" />
          </div>

          <div className="projects__card">

            <div className="projects__text">
              <h3 className="projects__name">Proyecto X</h3>
              <p className="projects__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nesciunt repellendus architecto sit nemo vel obcaecati sed dicta eos nobis.
              </p>
              
              <div className="projects__tools">
                <h4>Tools used:</h4>
                <div className="projects__tools--used">
                  <p className="projects__tools--box">Html</p>
                  <p className="projects__tools--box">Css</p>
                  <p className="projects__tools--box">Javascript</p>
                  <p className="projects__tools--box">React</p>
                </div>
              </div>
              <button className="projects__btn">Review Code</button>
            </div>

            <img src="https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/por-que-tener-una-pagina-web.png" alt="" className="projects__img" />
          </div>

        </div>
    </section>
  </>
}

export default Projects