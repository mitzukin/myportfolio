import React from "react";
import "./Testimonial.css";
import Image from "/src/assets/Question.png";

const AboutPage = () => {
  return (
    <div className="flex justify-center p-4 pb-20 mx-auto font-Roboto align-center md:mx-32 lg:mx-56">
      <div className="flex flex-wrap mx-2 md:w-96 lg:w-full">
        <div className="w-full px-4 mb-4 xl:w-3/5 ">
          <div
            className="p-8 mt-10 duration-300 bg-opacity-10 bg-secondary rounded-xl md:hover:bg-opacity-100 "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="mb-6 text-2xl font-semibold text-center text-custom-blue md:text-left">
              As A Student
            </h1>
            <p className="text-sm text-justify text-gray-300 ">
              &emsp;&emsp;As a student diving into the world of web development,
              I've been on an incredible learning journey. It's like unlocking a
              new dimension of creativity and problem-solving. Building websites
              and applications is both challenging and immensely rewarding.
              Thanks to the guidance and resources available.
            </p>
          </div>

          <div
            className="p-8 mt-6 bg-opacity-30 bg-secondary rounded-xl md:hover:bg-opacity-100"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="mb-6 text-2xl font-semibold text-center text-green-500 md:text-left">
              Exciting IT Field
            </h1>
            <p className="text-sm text-justify text-gray-300 ">
              &emsp;&emsp;I love working in the IT field. It's like being on the
              cutting edge of the digital world. Every day is a new adventure
              filled with technology, problem-solving, and cool gadgets. I can't
              imagine a more exciting place to be in the workforce!
            </p>
          </div>
          <div
            className="p-8 mt-6 bg-opacity-10 bg-secondary rounded-xl md:hover:bg-opacity-100"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1 className="mb-6 text-2xl font-semibold text-center text-custom-blue md:text-left">
              Web Development Speed and Efficiency
            </h1>
            <p className="text-sm text-justify text-gray-300 ">
              &emsp;&emsp;React Vite and Tailwind CSS left me amazed with their
              speed, efficiency, and elegance when used together. I
              wholeheartedly endorse this dynamic duo if you're seeking to
              supercharge your web development workflow.
            </p>
          </div>
        </div>

        <div className="w-full px-4 mb-4 xl:w-2/5 lg:w-full">
          <div
            id="image"
            className="mt-20 md:mt-56 lg:mt-40"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img src={Image} alt="" className="h-100 w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
