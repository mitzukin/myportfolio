import React from "react";

import Nike from "../../assets/Nike.png";
import Music from "../../assets/Music.png";
import Greek from "../../assets/Greek.png";
import Decoration from "../../assets/Decoration.png";
import Website from "../../assets/Website.png";
import Editor from "../../assets/Editor.png";

const Projects = () => {
  return (
    <div className="bg-Below" id="portfolio ">
      <div className="pt-10">
        <h1
          className="mt-10 text-6xl font-bold text-center text-gray-300 md:text-11xl"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Sample Works
        </h1>
        <p
          className="mx-2 mt-10 mb-16 text-center text-gray-300 font-Roboto"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          I'm eager to dive deeper into the world of design, and I have a strong
          desire to expand my knowledge and skills in this field.
        </p>

        <div className="mx-auto mt-10 ">
          <div className="grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-32">
            <div
              className="p-2 bg-opacity-50 rounded-md bg-primary"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={Nike} alt="" className="rounded-sm" />
            </div>

            <div
              className="p-2 bg-opacity-50 rounded-md bg-primary"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={Music} alt="" className="rounded-sm" />
            </div>

            <div
              className="p-2 bg-opacity-50 rounded-md bg-primary"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={Greek} alt="" className="rounded-sm" />
            </div>

            <div
              className="p-2 bg-opacity-50 rounded-md bg-primary"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={Decoration} alt="" className="rounded-sm" />
            </div>
          </div>
          <div>
            <h1
              className="mt-16 text-6xl font-bold text-center text-green-500"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Story <span className="text-custom-blue">Behind</span>
            </h1>
            <p
              className="px-3 py-3 mx-1 mt-10 text-justify text-gray-300 text-md xl:mx-32 xl:px-80 xl:py-10 md:mx-20 lg:mx-28 font-Roboto"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              &emsp; &emsp;Credit goes to the owner of Nike. The day I designed
              the Reason Store was the day I began to learn about frameworks
              like React. I wanted to explore it, and I'm still expanding my
              knowledge, even though it's been challenging.
              <br />
              <br /> &emsp; &emsp;I decided to create this music player because
              I'm a music fan. I hope to build my music player software or
              application someday.
              <br />
              <br />
              &emsp; &emsp;The Greek page inspired me to create a webpage
              design. I recalled seeing some web first page designs with a dark
              background and the use of splashes of paint. So, I decided to
              feature Greek figures like Zeus to make it more attractive.
              <br />
              <br />
              &emsp; &emsp;"Design Home" is my very first website design. I
              created this design for my father, who has a sideline of making
              decorations every Christmas. He has skills and a passion for
              design, just like me, and I aspire to be more like him when it
              comes to art.
            </p>
          </div>

          <div className="mt-20">
            <h1
              className="text-lg font-semibold text-center text-gray-300 font-Robot"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              THE TOOLS THAT I AM USING:
            </h1>
            <div
              className="flex flex-col items-center justify-center gap-2 mt-10 md:flex-row"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={Website} alt="" className="w-auto h-8" />
              <img src={Editor} alt="" className="w-auto h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
