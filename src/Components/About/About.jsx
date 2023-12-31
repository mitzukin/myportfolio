import React from "react";
import mypic from "../../assets/MyPic.webp";
import "./About.css";
import { GoArrowRight } from "react-icons/go";
import { TbMusic } from "react-icons/tb";
import { MdOutlineSportsBasketball, MdGames } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { useState } from "react";
import Webdev from "../../assets/Webdev.png";
import Designing from "../../assets/Designing.png";
import Programming from "../../assets/Programming.png";

const About = () => {
  const [isDesignVisible, setIsDesignVisible] = useState(false);
  const [isWebsiteVisible, setIsWebsiteVisible] = useState(false);
  const [isProgVisible, setIsProgVisible] = useState(false);

  const designToggle = () => {
    setIsDesignVisible(!isDesignVisible);
    setIsWebsiteVisible(false);
    setIsProgVisible(false);
  };
  const websiteToggle = () => {
    setIsDesignVisible(false);
    setIsWebsiteVisible(!isWebsiteVisible);
    setIsProgVisible(false);
  };
  const progToggle = () => {
    setIsDesignVisible(false);
    setIsWebsiteVisible(false);
    setIsProgVisible(!isProgVisible);
  };

  return (
    <div className="pt-20 pb-40 font-Roboto bg-Below" id="About ">
    <div data-aos="fade-up" data-aos-duration="1500">
      <h1 className="text-xl font-semibold text-center text-custom-blue">
        Learn Kin
      </h1>

      <h1 className="text-4xl font-semibold text-center text-gray-300">
        Get To Know Me
      </h1>
      <p className="px-12 mt-5 text-center text-gray-300 md:mx-20 lg:mx-56 md:text-2xl">
        Explore the reasons behind my sharing. Delve into the stories and
        passions that make these items meaningful to me. Join me on this
        journey of personal expression.
      </p>
    </div>
    <div className="flex flex-wrap mx-1">
      <div className="w-full px-10 mb-4 xl:w-2/5 lg:w-2/5">
        <div
          className="flex items-center justify-center mx-2 mt-20 duration-300 rounded-lg bg-primary md:mx-24 md:px-10 lg:mt-56 hover:bg-transparent"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img
            src={mypic}
            alt=""
            className="duration-300 -rotate-12 rounded-xl hover:rotate-0 hover:scale-90 max-w-[200px] h-auto md:max-w-[300px] md:h-auto "
          />
        </div>
      </div>

      <div className="w-full mb-4 xl:w-3/5 lg:w-3/5">
        <div className="mr-5 text-gray-300">
          <h1
            className="mt-20 mb-5 text-2xl font-semibold text-center text-gray-300"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Let me share a bit about who I am:
          </h1>
          <div
            className="p-2 md:p-10 "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="mt-5 text-5xl text-center text-gray-300 font-super-bold font-custom">
              SKILLS <br />
            </h1>
            <h1 className="mt-2 text-xl font-semibold text-center">
              (Related to my Course)
            </h1>
            <div className="container p-2 mx-auto mt-10 mb-0">
              <div className="w-full md:w-full lg:w-full xl:flex">
                <div className="relative p-10 m-3 mt-10 duration-500 rounded-lg md:p-3 md:w-full lg:w-full xl:w-1/3 ">
                  <h1 className="text-2xl font-semibold text-green-500 font-custom">
                    01
                  </h1>
                  <p className="mt-2 text-3xl font-bold text-center text-custom-blue md:text-xl">
                    Graphic Design
                  </p>
                  <p className="p-4 pl-2 mb-6 text-sm ">
                    As a student with skills in graphic design, I enjoy
                    applying my creative talents to various projects and
                    honing my design abilities.
                  </p>
                  <div className="absolute w-48 duration-300 translate-y-8 rounded-lg bottom-1 bg-primary bg-opacity-70 hover:bg-custom-blue hover:text-green-400 hover:scale-105">
                    <a href="#Graphic">
                      <button
                        onClick={designToggle}
                        className="flex p-3 ml-8"
                      >
                        Learn more{" "}
                        <span className="mt-1 ml-3">
                          {" "}
                          <GoArrowRight />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative p-10 m-3 mt-10 duration-500 rounded-lg md:p-3 md:w-full lg:w-full xl:w-1/3 ">
                  <h1 className="text-2xl font-semibold text-green-500 font-custom">
                    02
                  </h1>
                  <p className="mt-2 text-3xl font-bold text-center text-custom-blue md:text-xl">
                    Website Development
                  </p>
                  <p className="p-4 pl-2 mb-5 text-sm md:mb-5 lg:mb-11">
                    I'm new to web development, and I'm excited to learn and
                    grow in this field, creating and building websites.
                  </p>
                  <div className="absolute w-48 duration-300 translate-y-8 rounded-lg bottom-1 bg-primary bg-opacity-60 hover:bg-custom-blue hover:text-green-400 hover:scale-105">
                    <a href="#Graphic">
                      <button
                        onClick={websiteToggle}
                        className="flex p-3 ml-8"
                      >
                        Learn more{" "}
                        <span className="mt-1 ml-3">
                          {" "}
                          <GoArrowRight />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative p-10 m-3 mt-10 duration-500 bg-opacity-50 rounded-lg md:p-3 md:w-full lg:w-full xl:w-1/3 ">
                  <h1 className="text-2xl font-semibold text-green-500 font-custom">
                    03
                  </h1>
                  <p className="mt-2 text-3xl font-bold text-center text-custom-blue md:text-xl">
                    Basic Programming
                  </p>
                  <p className="p-4 pl-2 mb-1 text-sm ">
                    I have a basic knowledge of programming languages, which
                    I'm eager to apply and expand upon as I continue my
                    journey in web development.
                  </p>

                  <div className="absolute w-48 duration-300 translate-y-8 rounded-lg bottom-1 bg-primary bg-opacity-60 hover:bg-custom-blue hover:text-green-400 hover:scale-105">
                    <a href="#Graphic">
                      <button onClick={progToggle} className="flex p-3 ml-8">
                        Learn more{" "}
                        <span className="mt-1 ml-3">
                          <GoArrowRight />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 mx-4 mb-20 md:pt-32 md:mx-10 lg:mx-56 md:mt-10" id="Graphic">
        {isDesignVisible && (
          <div className="text-gray-300 rounded-lg ">
            <h1 className="pt-10 mt-20 text-4xl font-semibold text-center text-green-500 ustom-blue">
              Designing
            </h1>
            <p className="p-10 mx-2 text-justify lg:mx-10 text-md font-Roboto ">
              &emsp;&emsp;I enjoy the creative process of crafting simple
              designs. I utilize a variety of tools, such as online design
              platforms like Canva and professional software like Photoshop.
              While my aspiration is to create exceptional designs, I'm
              conscious of the fact that my experience and knowledge in design
              are currently limited. I recognize that perfection may not
              always be attainable. To enhance my skills, I am dedicated to
              ongoing learning and draw inspiration from diverse design
              sources. I experiment with different techniques to refine my
              craft and strive for improvement in every project.
            </p>
            <p className="mb-3 text-center text-md font-Roboto">Tools</p>
            <div className="flex justify-center pb-10">
              <img src={Designing} alt="" className="w-auto h-8" />
            </div>
          </div>
        )}

        {isWebsiteVisible && (
          <div
            className="text-gray-300 rounded-lg "
            id="Graphic"
          >
            <h1 className="pt-10 mt-20 text-4xl font-semibold text-center text-green-500 ustom-blue">
              Website
            </h1>
            <p className="p-10 mx-2 text-justify lg:mx-10 text-md font-Roboto ">
              &emsp;&emsp;I take pleasure in the creative process of website
              design, often using tools like Figma to bring my ideas to life.
              While my goal is to create impressive and user-friendly
              websites, I acknowledge that my current experience and knowledge
              in web design may not guarantee flawless results. It's worth
              noting that I am currently in the process of building my
              portfolio, and as of now, I don't have any previous projects to
              showcase. I understand that the world of web development is
              dynamic, and I'm committed to continuous learning to stay
              up-to-date with the latest trends and best practices.
            </p>
            <p className="mb-3 text-center text-md font-Roboto">Tools</p>{" "}
            <div className="flex justify-center pb-10">
              <img src={Webdev} alt="" className="w-auto h-8" />
            </div>
          </div>
        )}

        {isProgVisible && (
          <div
            className="text-gray-300 rounded-lg "
            id="Graphic"
          >
            <h1 className="pt-10 mt-20 text-4xl font-semibold text-center text-green-500 ustom-blue">
              Programming
            </h1>
            <p className="p-10 mx-2 text-justify lg:mx-10 text-md font-Roboto ">
              &emsp;&emsp;In the realm of programming, I have some experience
              with various programming languages, including C++, Python, Java,
              and PHP. I'm also familiar with using SQL and PHPMyAdmin for
              database management. As I work on building this portfolio, I'm
              actively practicing ReactJS, and I'm eager to improve my skills
              in Vanilla JavaScript. I believe that a solid foundation in
              JavaScript is crucial for creating dynamic and interactive web
              applications. With dedication and continuous learning, I aim to
              enhance my proficiency in these technologies and produce
              high-quality projects in the future.
            </p>
            <p className="mb-3 text-center text-md font-Roboto">Tools</p>{" "}
            <div className="flex justify-center pb-10">
              <img src={Programming} alt="" className="w-auto h-8" />
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="container py-8 mx-auto">
      <h1
        className="mt-56 mb-10 text-5xl text-center text-gray-300 font-super-bold font-custom"
        data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
      >
        Hobbies and Talents
      </h1>
      <p
        className="px-16 mb-6 text-center text-gray-300"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        I have a diverse range of interests that keep me engaged and
        entertained.{" "}
      </p>

      <div className="grid grid-cols-1 gap-8 text-gray-300 lg:px-32 md:px-20 lg:grid-cols-2 xl:grid-cols-2">
        <div
          className="p-4 rounded-lg shadow-lg bg-primary bg-opacity-60"
          data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-300 ">
            <TbMusic size={32} color="#23272a" />
          </div>
          <h1 className="text-2xl font-semibold text-center -translate-y-10 text-custom-blue">
            Music
          </h1>
          <h2 className="text-sm text-center text-green-500 -translate-y-10 font-Roboto">
            Talent
          </h2>
          <p className="p-5 text-sm text-justify duration-300 -translate-y-5 bg-opacity-50 rounded-lg hover:bg-opacity-100 hover:scale-110 md:text-md bg-primary">
            &emsp;&emsp;&emsp;&emsp;Music holds a special place in my heart.
            I'm not only a passionate listener but also an enthusiastic
            musician. I can play several musical instruments, including the
            guitar, drums, bass guitar, acoustic guitar, and even some basic
            keyboard piano. This allows me to create music and explore various
            melodies and rhythms.
          </p>
        </div>

        <div
          className="p-4 rounded-lg shadow-lg bg-primary bg-opacity-60"
          data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-300 ">
            <MdOutlineSportsBasketball size={32} color="#23272a" />
          </div>
          <h1 className="text-2xl font-semibold text-center -translate-y-10 text-custom-blue">
            Sports
          </h1>
          <h2 className="text-sm text-center text-green-500 -translate-y-10 font-Roboto">
            Talent
          </h2>
          <p className="p-5 text-sm text-justify duration-300 -translate-y-5 bg-opacity-50 rounded-lg hover:bg-opacity-100 hover:scale-110 md:text-md bg-primary">
            &emsp;&emsp;&emsp;&emsp;In the realm of sports, I'm quite the
            enthusiast. While basketball is my primary passion, I also dabble
            in activities like badminton, volleyball, and even the occasional
            game of chess. While I may not be a professional, the thrill of
            these sports never fails to excite me.
          </p>
        </div>
        <div
          className="p-4 rounded-lg shadow-lg bg-primary bg-opacity-60"
          data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-300 ">
            <MdGames size={32} color="#23272a" />
          </div>
          <h1 className="text-2xl font-semibold text-center -translate-y-10 text-custom-blue">
            Online Games
          </h1>
          <h2 className="text-sm text-center text-green-500 -translate-y-10 font-Roboto">
            Hobby
          </h2>
          <p className="p-5 text-sm text-justify duration-300 -translate-y-5 bg-opacity-50 rounded-lg hover:bg-opacity-100 hover:scale-110 md:text-md bg-primary">
            &emsp;&emsp;&emsp;&emsp;Gaming is another hobby I hold dear.
            Online games offer a great way to relax, have a good time, and
            make the most of my free time. Whether I'm teaming up with friends
            for some virtual adventures or going solo to conquer challenges,
            gaming provides a fantastic escape from the daily grind.
          </p>
        </div>
        <div
          className="p-4 rounded-lg shadow-lg bg-primary bg-opacity-60"
          data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-300 ">
            <RiMovie2Fill size={32} color="#23272a" />
          </div>
          <h1 className="text-2xl font-semibold text-center -translate-y-10 text-custom-blue">
            Movie
          </h1>
          <h2 className="text-sm text-center text-green-500 -translate-y-10 font-Roboto">
            Hobby
          </h2>
          <p className="p-5 text-sm text-justify duration-300 -translate-y-5 bg-opacity-50 rounded-lg hover:bg-opacity-100 hover:scale-110 md:text-md bg-primary">
            &emsp;&emsp;&emsp;&emsp;Movies and TV shows help me unwind. They
            take me on exciting journeys, and I often get completely engrossed
            in the stories. Plus, every now and then, I like to enjoy my
            favorite snacks while watching, which makes the experience even
            more enjoyable.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
