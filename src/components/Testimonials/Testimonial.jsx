import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import project1 from "../../img/project1.jpg";
import project2 from "../../img/project2.jpg";
import project3 from "../../img/project3.jpg";
import project4 from "../../img/project4.jpg";
import project5 from "../../img/project5.jpg";
import project6 from "../../img/project6.jpg";
import project7 from "../../img/project7.jpg";
import project8 from "../../img/project8.jpg";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const projects = [
    {
      img: project1,
      title:"SocialME (Facebook Clone)",
      description:"A web Application created using ReactJS, ExpressJS, MongoDB and NodeJS where one can post photos and status and wtch out others profile same functionalities like a social media application.",
    },{
      img: project2,
      title:"MyRecipe",
      description:"This is a web application created using HTML, CSS, and JavaScript for searching your favorite recipes and finding their ingredients.",
    },
    {
      img: project3,
      title:"Blogs Application",
      description:"This is a blog application built with ReactJS that allows users to post blogs, as well as edit and delete them with additional features.",
    },
     {
      img: project8,
      title:"AI Image generation ",
      description:"MERN Application for generating images through text. This Application is created using DALL-E-AI API API by OpenAI",
    },
   {
      img: project4,
      title:"Classification system",
      description:"This is a web application created using Flask and a deep learning model trained on fruit and vegetable images, which can classify various species of fruits and vegetables in both real-time and pre-captured images.",
    },{
      img: project5,
      title:"Chatpata Kitchen",
      description:"This is a mobile application developed with Flutter that enables users to search for their favorite recipes, sorted by category. The application fetches recipes using the Edamam API.",
    },{
      img: project6,
      title:"Carry Comfort",
      description:"This is a web application created using HTML and CSS for selling furniture online. The application showcases a wide range of furniture items, including Outdoors, Kids, Office, and more. Users can browse through the collection, select items they wish to purchase, and place orders directly through the application.",
    },{
      img: project7,
      title:"Shack Game",
      description:"This is a game created using C# that ask for user's enter and also maintain log of players.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <h3 style={{fontWeight: 'bold'}}>{project.title}</h3>
                <img src={project.img} alt="" />
                <p>{project.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
