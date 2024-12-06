import React from "react";
import contactimg from "../assets/image/contactimg.png";

function Contact() {
  return (
    <div className="contact-custom-page">
      <div className="services-content-custom flex items-center mb-8">
        <h1 className="text-3xl font-bold">Our Working Process</h1>
        <p className="mt-4 text-gray-600">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="flex items-center p-4 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row-reverse md:flex-1 contact-form-container">
          <div className="p-4 py-6 text-white bg-gray-100 md:w-50 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly relative w-1/2 p-0 contact-form-parent">
            <img className="absolute h-full" src={contactimg} />
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Contact Us
            </h3>
            <form action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  autoFocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                ></textarea>
              </div>
              {/* Custom Radio Buttons Section */}
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="yes"
                    name="contact-preference"
                    className="custom-radio"
                    value="yes"
                  />
                  <label htmlFor="yes" className="custom-radio-label">
                    <span></span> Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="contact-preference"
                    className="custom-radio"
                    value="no"
                  />
                  <label htmlFor="no" className="custom-radio-label">
                    <span></span> No
                  </label>
                </div>
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Send Messages
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
