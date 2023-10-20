import React from "react";
import "./App.css";
import profile from "../src/assets/Profile.webp";
import Facebook from "./assets/Fb.png";
import IG from "./assets/ig.png";
import Linked from "./assets/Linked.png";
import Gmail from "./assets/Gmail.png";
import "wowjs/css/libs/animate.css";
import Testimonial from "../src/Components/Testimonial/Testimonial";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import message from "./assets/Message.png";
import Projects from "./Components/About/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div id="main">
      <section id="Home">
        <div
          className="flex flex-col md:flex-row "
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
        >
          <div className="w-full p-4 md:w-1/2">
            <div className="flex flex-col mt-16 background-container md:mt-40">
              <h1 className="text-2xl text-center text-gray-300 font-Roboto font-Inter md:text-4xl ">
                Hello!
              </h1>

              <img
                src={profile}
                alt=""
                className="p-1 mx-auto mt-10 rounded-full shadow-xl h-36 w-36 md:h-56 md:w-56"
              />

              <h1
                className="mt-10 text-center text-gray-300 font-Roboto font-Inter md:text-xl"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-duration="200"
              >
                I Am{" "}
                <span className="text-lg font-semibold text-green-500 font-Roboto font-Inter md:text-2xl">
                  Jason
                </span>
              </h1>
              <p
                className="mt-1 text-center text-gray-300 font-Roboto font-Inter md:text-xl"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-duration="300"
              >
                Website Developer
              </p>
              <a
                href="#Testimonial"
                className="flex"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
              >
                <button className="w-32 p-3 px-6 mx-auto mt-5 text-sm font-semibold text-gray-300 rounded-full bg-secondary font-Inter hover:bg-white hover:text-primary">
                  {" "}
                  Explore{" "}
                </button>
              </a>
              <div className="flex items-center justify-center gap-3 mt-5">
                <div
                  className="p-3 rounded-full bg-primary bg-opacity-60"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="400"
                >
                  <a href="https://www.facebook.com/jason.tajor1/">
                    <img src={Facebook} alt="" className="w-auto h-5" />
                  </a>
                </div>
                <div
                  className="p-3 rounded-full bg-primary bg-opacity-60"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="500 "
                >
                  <a href="https://www.instagram.com/jasontajorr/">
                    <img src={IG} alt="" className="w-auto h-5" />
                  </a>
                </div>
                <div
                  className="p-3 rounded-full bg-primary bg-opacity-60"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="700 "
                >
                  <a href="https://mail.google.com/mail/u/2/#inbox?compose=new">
                    <img src={Gmail} alt="" className="w-auto h-4" />
                  </a>
                </div>
                <div
                  className="p-3 rounded-full bg-primary bg-opacity-60"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="900 "
                >
                  <a href="https://www.linkedin.com/in/jason-tajor-bb30a9256/">
                    <img src={Linked} alt="" className="w-auto h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-4 md:w-3/4">
            <div className="mt-56 mb-56 md:mt-60">
              <h1
                className="mb-5 text-5xl font-bold text-gray-300 md:text-7xl lg:text-9xl "
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                Step <span className="text-custom-blue"> Into </span>The{" "}
                <span className="text-green-500 ">World</span> Of Mine
              </h1>
              <p
                className="p-2 text-justify text-gray-300 font-Roboto md:text-2xl lg:text-md md:p-10"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                {" "}
                &emsp;&emsp;A student aspiring to become a{" "}
                <span className="text-sm font-semibold text-custom-blue md:text-2xl">
                  Website Developer and UI/UX Designer.
                </span>{" "}
                on a mission to turn ideas into reality. Discover my passion for
                design and innovation as we journey through a gallery of
                creativity. Welcome to my digital portfolio, where every pixel
                tells a story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Testimonial">
        <div className="pt-32 font-Roboto bg-Below">
          <div
            className=""
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex justify-center">
              <img src={message} alt="" className="w-12 h-12 md:w-20 md:h-20" />
              <h1 className="mb-10 text-4xl font-semibold text-center text-green-500 md:text-6xl">
                Testimonial
              </h1>
            </div>
            <p className="px-5 text-justify text-gray-300 text-md md:mx-56 md:text-lg">
              &emsp; &emsp; &emsp;I wanted to share my thoughts on my journey as
              a student in web development to inspire others who may be
              considering this path. I've been truly amazed by how web
              development has opened up new opportunities for creativity and
              innovation in my life.
            </p>
            <Testimonial />
          </div>
        </div>
      </section>

      <section id="Info">
        <About />
      </section>
      <section id="Project">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
        <Footer />
      </section>
      <Navbar />
    </div>
  );
}
export default App;
