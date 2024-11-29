import React from "react";
import herosectionimg from "./../assets/image/herosectionimg.png";
import Marquee from "../component/Marquee";
import Services from "./Services";

function About() {
  return (
    <>
      <div className="bg-red-900 about-parent-custom">
        <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
          {/* Text Content */}
          <div className="flex items-center justify-center">
            <main className="max-w-screen-xl px-4 lg:px-16">
              <div className="text-left">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Navigating the digital landscape for success
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Our digital marketing agency helps businesses grow and succeed
                  online through a range of services including SEO, PPC, social
                  media marketing, and content creation.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Book a consultation
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={herosectionimg}
              alt="Hero Section"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <Marquee />
      <Services/>
    </>
  );
}

export default About;
