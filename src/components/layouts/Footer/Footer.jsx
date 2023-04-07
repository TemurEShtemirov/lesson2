import React from "react";
import Linkedin from "../../img/Linkedin.png"
import Twitter from "../../img/Twitter.png"
import FaceBook from "../../img/fb.png"
import Instagram from "../../img/insta.png"
import "../../scss/Footer.scss";

const Footer = () => {
  return (
    <div className="Footer row" style={{
        marginTop:"100px"
    }}>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
        <div>
          <a
            classname="Fb "
            style={{
              marginLeft: "20px",
            }}
            href="www.facebook.com"
          >
            <img src={FaceBook} alt={FaceBook} />
          </a>
          <a
            classname="Im "
            style={{
              marginLeft: "20px",
            }}
            href="www.instagram.com"
          >
            <img src={Instagram} alt={Instagram} />
          </a>
          <a
            classname="Tr "
            style={{
              marginLeft: "20px",
            }}
            href="www.twitter.com"
          >
            <img src={Twitter} alt={Twitter} />
          </a>
          <a
            classname="Ln "
            style={{
              marginLeft: "20px",
            }}
            href="www.linkedin.com"
          >
            <img src={Linkedin} alt={Linkedin} />
          </a>
        </div>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <p
          className="FooterP"
          style={{
            marginTop: "20px",
          }}
        >
          Copyright ©2020 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
