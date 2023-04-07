import React from 'react'
import ImageHuman from "../../img/ImgHuman.png";
import Dashboard from "../../img/Dashboard.png";
import Portraits from "../../img/Portraits.png";
import Malayalam from "../../img/Malayalam.png";
import "../../scss/Main.scss"
export default function Main() {
  return (
    <div className="Main">
      <section className="Section1">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
            <h1 className="Section1H1">
              Hi, I am John, <br /> Creative Technologist
            </h1>
            <p className="Section1P1">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet <br /> sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam <br /> consequat sunt nostrud amet.
            </p>
            <a href="www.google.com" className="BtnDowload">
              Download Resume
            </a>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <img src={ImageHuman} alt="ImgHuman" />
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="row">
          <h1 className="SectionH1">Recent posts</h1>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card Card" style={{ width: "418px" }}>
              <div className="card-body">
                <h5 className="card-title CardTitle1">
                  Making a design system from scratch
                </h5>
                <h6 className="card-subtitle mb-2 text-muted Date">
                  12 Feb 2020 | Design, Pattern
                </h6>
                <p className="card-text CardText">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card Card" style={{ width: "418px" }}>
              <div className="card-body">
                <h5 className="card-title CardTitle1">
                  Creating pixel perfect icons in Figma
                </h5>
                <h6 className="card-subtitle mb-2 text-muted Date">
                  12 Feb 2020 | Figma, Icon Design
                </h6>
                <p className="card-text CardText">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 caRd caRd1" style={{
             marginRight:"150px"
          }}>
            <div className="card" style={{ width: "500px"  }}>
              <img src={Dashboard} className="card-img-top" alt={Dashboard} />
              <div className="card-body">
                <h5 className="card-title H1_2">Designing Dashboards</h5>
                <p className="card-text Year2020">2020</p>
                <p className="card-text TextGrey">Dashboard</p>
                <p className="card-text Text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit <br /> officia consequat duis enim velit
                  mollit. Exercitation veniam consequat sunt <br /> nostrud
                  amet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 caRd caRd2 ">
            <div className="card" style={{ width: "500px" }}>
              <img src={Portraits} className="card-img-top" alt={Portraits} />
              <div className="card-body">
                <h5 className="card-title H1_2">Vibrant Portraits of 2020</h5>
                <p className="card-text Year2020">2018</p>
                <p className="card-text TextGrey">Illustration</p>
                <p className="card-text Text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit <br /> officia consequat duis enim velit
                  mollit. Exercitation veniam consequat sunt <br /> nostrud
                  amet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 caRd caRd3">
            <div className="card" style={{ width: "500px" }}>
              <img src={Malayalam} className="card-img-top" alt={Malayalam} />
              <div className="card-body">
                <h5 className="card-title H1_2">36 Days of Malayalam type</h5>
                <p className="card-text Year2020">2018</p>
                <p className="card-text TextGrey">Typography</p>
                <p className="card-text Text">
                  
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit <br /> officia consequat duis enim velit
                  mollit. Exercitation veniam consequat sunt <br /> nostrud
                  amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
