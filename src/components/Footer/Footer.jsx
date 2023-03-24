import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  function goToGithub() {
    window.location.href = 'https://github.com/naneeta1';
  }

  function goToLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/naneeta-talreja-874318173/';
  }
  function goToInstagram() {
    window.location.href = 'https://www.instagram.com/nan_eeta/';
  }
  return (
    <div className="footer">
      <div className="f-content">
      <span>nainatalreja3@gmail.com</span>
        <div className="f-icons">
        
          <Insta color="white" size={"3rem"} onClick={goToInstagram}/>
          <LinkedIn color="white" size={"3rem"} onClick={goToLinkedIn}/>
          <Gitub color="white" size={"3rem"} onClick={goToGithub}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
