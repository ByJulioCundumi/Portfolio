import "./projects.scss";
import { FaAngleDoubleDown } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import { jobPortalGallery, ecommerceGallery, tasksGallery, nwordGallery } from "../../util/image.gallery";

function Projects() {

  return <>
    <section className="projects" id="projectsPage">
      <div className="projects__start">
        <FaAngleDoubleDown />
        <h2 className="projects__title">Check My Projects</h2>
        <FaAngleDoubleDown />
      </div>
      <div className="projects__container">



      <div className="projects__card projects__card--nwordpass">

<div className="projects__text">
  <h3 className="projects__name">PDF Certificate Generator - [React, Node]</h3>
  <p className="projects__description">
  I developed a Full-stack app that allows to register users and 
  generate downloadable pdf certificates. I also implemented an admin dashboard to manage the application.
  </p>

  <div className="projects__tools">
    <h4>Tools used:</h4>
    <div className="projects__tools--used">
      <p className="projects__tools--box">Html</p>
      <p className="projects__tools--box">Css</p>
      <p className="projects__tools--box">Scss</p>
      <p className="projects__tools--box">Javascript</p>
      <p className="projects__tools--box">Npm</p>
      <p className="projects__tools--box">Typescript</p>
      <p className="projects__tools--box">React</p>
      <p className="projects__tools--box">NodeJs</p>
      <p className="projects__tools--box">ExpressJs</p>
      <p className="projects__tools--box">TypeORM</p>
      <p className="projects__tools--box">Redux</p>
    </div>
  </div>
  <div className="projects__btns">
    <a href="https://mynwordpass.com" target="_blank" className="projects__btn">Review live App</a>
  </div>
</div>

<div className="projects__gallery">
  <ImageGallery
    items={nwordGallery}
    showPlayButton={false}
    autoPlay={true}
    showNav={false}
    slideInterval={5000}
    slideDuration={2000}
  />
</div>
</div>




        <div className="projects__card projects__card--jobportal">

          <div className="projects__text">
            <h3 className="projects__name">Job Portal - [Angular, Node]</h3>
            <p className="projects__description">
            I developed a modern job portal with intuitive functions to create, update and 
            delete job offers, equipped with jwt authentication and a role system.
            </p>

            <div className="projects__tools">
              <h4>Tools used:</h4>
              <div className="projects__tools--used">
                <p className="projects__tools--box">Html</p>
                <p className="projects__tools--box">Css</p>
                <p className="projects__tools--box">Scss</p>
                <p className="projects__tools--box">Javascript</p>
                <p className="projects__tools--box">Npm</p>
                <p className="projects__tools--box">Typescript</p>
                <p className="projects__tools--box">Angular</p>
                <p className="projects__tools--box">NodeJs</p>
                <p className="projects__tools--box">ExpressJs</p>
                <p className="projects__tools--box">TypeORM</p>
                <p className="projects__tools--box">NgRx</p>
              </div>
            </div>
            <div className="projects__btns">
              <a href="https://github.com/ByJulioCundumi/job-portal-front" className="projects__btn">Review Frontend</a>
              <a href="https://github.com/ByJulioCundumi/job-portal-back" className="projects__btn">Review Backend</a>
            </div>
          </div>

          <div className="projects__gallery">
            <ImageGallery
              items={jobPortalGallery}
              showPlayButton={false}
              autoPlay={true}
              showNav={false}
              slideInterval={5000}
              slideDuration={2000}
            />
          </div>
        </div>

        <div className="projects__card projects__card--ecommerce">

          <div className="projects__text">
            <h3 className="projects__name">Ecommerce - [React, Node]</h3>
            <p className="projects__description">
            E-commerce website with functions to create, update and delete products, 
            equipped with jwt authentication, shopping cart, a role system and other features.
            </p>

            <div className="projects__tools">
              <h4>Tools used:</h4>
              <div className="projects__tools--used">
              <p className="projects__tools--box">Html</p>
              <p className="projects__tools--box">Css</p>
                <p className="projects__tools--box">Scss</p>
                <p className="projects__tools--box">Javascript</p>
                <p className="projects__tools--box">Npm</p>
                <p className="projects__tools--box">Typescript</p>
                <p className="projects__tools--box">React</p>
                <p className="projects__tools--box">NodeJs</p>
                <p className="projects__tools--box">ExpressJs</p>
                <p className="projects__tools--box">TypeORM</p>
                <p className="projects__tools--box">Redux</p>
              </div>
            </div>
            <div className="projects__btns">
              <a href="https://github.com/ByJulioCundumi/frontend-ecommerce" className="projects__btn">Review Frontend</a>
              <a href="https://github.com/ByJulioCundumi/ecommerce-backend" className="projects__btn">Review Backend</a>
            </div>
          </div>

          <div className="projects__gallery">
            <ImageGallery
              items={ecommerceGallery}
              showPlayButton={false}
              autoPlay={true}
              showNav={false}
              slideInterval={5000}
              slideDuration={2000}
            />
          </div>
        </div>

        <div className="projects__card projects__card--tasks">

          <div className="projects__text">
            <h3 className="projects__name">Tasks Website - [React, Node]</h3>
            <p className="projects__description">
            Simple task website with crud functions to create, update and delete a task, 
            equipped with jwt authentication and form validation.
            </p>

            <div className="projects__tools">
              <h4>Tools used:</h4>
              <div className="projects__tools--used">
              <p className="projects__tools--box">Html</p>
              <p className="projects__tools--box">Css</p>
                <p className="projects__tools--box">Scss</p>
                <p className="projects__tools--box">Bootstrap</p>
                <p className="projects__tools--box">Javascript</p>
                <p className="projects__tools--box">Npm</p>
                <p className="projects__tools--box">React</p>
                <p className="projects__tools--box">NodeJs</p>
                <p className="projects__tools--box">ExpressJs</p>
                <p className="projects__tools--box">Mongoose</p>
              </div>
            </div>
            <div className="projects__btns">
              <a href="https://github.com/ByJulioCundumi/mern-stack-frontend" className="projects__btn">Review Frontend</a>
              <a href="https://github.com/ByJulioCundumi/mern-tasks-backend" className="projects__btn">Review Backend</a>
            </div>
          </div>

          <div className="projects__gallery">
            <ImageGallery
              items={tasksGallery}
              showPlayButton={false}
              showNav={false}
              autoPlay={true}
              slideInterval={5000}
              slideDuration={2000}
            />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Projects