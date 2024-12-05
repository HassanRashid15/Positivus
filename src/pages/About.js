import React from "react";
import herosectionimg from "./../assets/image/herosectionimg.png";
import Marquee from "../component/Marquee";
import Services from "./Services";
import Proposalbox from "../component/Proposalbox";
import CaseStudies from "../component/CaseStudies";
import WorkinProcess from "../component/WorkinProcess";
import Team from "../component/Team";
import Testimoinal from "../component/Testimoinal";

function About() {
  return (
    <>
      <div className="bg-red-900 about-parent-custom">
        <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
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
                  <div className="proposal-button-custom w-full">
                    <header class="header">
                      <div class="banner">
                        <a href="#" class="butn butn__new">
                          <span>Book a Consultation</span>
                        </a>
                      </div>
                    </header>
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
      <Services />
      <Proposalbox />
      <CaseStudies />
      <WorkinProcess />
      <Team />
      <Testimoinal/>
    </>
  );
}

export default About;
