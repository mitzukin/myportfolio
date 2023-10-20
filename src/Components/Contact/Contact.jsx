import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { BsTelephonePlusFill, BsMailbox2 } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bq6glek",
        "template_yh40byi",
        form.current,
        "Lr0hXYFx9dd1h8NqR"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent.");
          form.current.reset();

          setSuccessPopup(true);

          // Hide the success popup after a few seconds (adjust the timeout as needed)
          setTimeout(() => {
            setSuccessPopup(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          console.log("message sending failed.");

          // Show the error popup
          setErrorPopup(true);

          // Hide the error popup after a few seconds (adjust the timeout as needed)
          setTimeout(() => {
            setErrorPopup(false);
          }, 5000);
        }
      );
  };

  return (
    <div>
      <section id="Contact" className="bg-Below">
        <div className="container py-8 mx-auto lg:flex font-Roboto">
          <div className="lg:w-1/2">
            <div className="p-1 rounded-lg">
              <div className="max-w-screen-md px-2 py-8 mx-auto lg:py-16 md:px-24">
                <h2 className="mt-10 mb-4 text-4xl font-bold tracking-tight text-center text-white">
                  Contact Me
                </h2>
                <p className="mb-8 font-light text-center text-gray-400 lg:mb-16 sm:text-xl">
                  Wanna Hire Me?
                </p>

                <div
                  className="text-sm text-center text-green-600 popup success-popup"
                  style={{ display: successPopup ? "block" : "none" }}
                >
                  <p>Message sent successfully! Thank you!</p>
                </div>
                <div
                  className="text-sm text-center text-red-600 popup error-popup"
                  style={{ display: errorPopup ? "block" : "none" }}
                >
                  <p>Message sending failed. Please try again.</p>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300">
                      Name: (Optional)
                      <input
                        name="user_name"
                        type="name"
                        className="block w-full p-3 mb-3 text-sm text-gray-300 placeholder-gray-500 bg-transparent border rounded-lg shadow-sm placeholder:text-xs placeholder:opacity-60"
                        placeholder="Juan Dela Cruz"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300 ">
                      Email:
                      <input
                        name="user_email"
                        type="text"
                        className="block w-full p-3 text-sm text-gray-300 placeholder-gray-500 bg-transparent border rounded-lg shadow-sm placeholder:text-xs placeholder:opacity-60"
                        placeholder="email@mail.com"
                        required
                      />
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Your message
                      <textarea
                        name="message"
                        rows="6"
                        className="shadow-sm border border-opacity-20 bg-transparent text-sm rounded-lg block w-full placeholder-gray-500 p-2.5 text-gray-300  placeholder:text-xs placeholder:opacity-60"
                        placeholder="Leave a comment..."
                      ></textarea>
                    </label>
                  </div>
                  <button
                    type="submit"
                    value="Send"
                    className="px-5 py-3 mt-5 text-sm font-medium text-center text-white rounded-lg bg-opacity-40 bg-primary hover:bg-opacity-100"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-4 lg:w-1/2 lg:mt-0">
            <div className="p-4 ml-10 rounded-lg md:ml-64 lg:mt-16">
              <h1 className="mt-32 font-extrabold text-gray-300 text-11xl">
                Info
              </h1>
              <div>
                <ul>
                  <li className="flex ">
                    <div className="p-5 mb-5 rounded-full bg-primary">
                      <BsTelephonePlusFill size={16} />
                    </div>
                    <p className="pl-5 mt-3 text-sm text-gray-300 font-Roboto">
                      Call: <br />
                      +639202543915
                    </p>
                    <p className="pl-4 mt-10 text-sm text-gray-400"></p>
                  </li>
                  <li className="flex">
                    <div className="p-5 mb-5 rounded-full bg-primary">
                      <BsMailbox2 size={18} />{" "}
                    </div>

                    <p className="pl-5 mt-3 text-sm text-gray-300 font-Roboto">
                      Email: <br />
                      jasontajor0@gmail.com
                    </p>
                  </li>
                  <li className="flex">
                    <div className="p-5 mb-5 rounded-full bg-primary">
                      <HiLocationMarker size={18} />
                    </div>

                    <p className="pl-5 mt-3 text-sm text-gray-300 font-Roboto">
                      Location: <br />
                      Metro Manila Philippines
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
