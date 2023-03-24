import React, { useContext } from "react";
import "./Intro.css";
import girl from "../../img/girl.png";
import glassesimoji from "../../img/glassesimoji.png";
import award from "../../img/award.webp";
import developer from "../../img/developer.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
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
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "black" }}>Hy! I Am</span>
          <span>Naneeta Talreja</span>
          <span>
            Innovative optimized solution seeker. Excited to be at the development phase of my new career as software developer. 
            I am ambitious and can handle any part of process with ease.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <Insta color="#cc6666" size={"5rem"} onClick={goToInstagram}/>
          <LinkedIn color="#cc6666" size={"5rem"} onClick={goToLinkedIn}/>
          <Gitub color="#cc6666" size={"5rem"} onClick={goToGithub}/>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">

        <img src={girl} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={developer} text1="Software" text2="Engineer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={award} text1="Frontend" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
