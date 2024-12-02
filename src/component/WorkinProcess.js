import React, { useState } from "react";

function WorkinProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      id: 1,
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      title: "Research and Strategy Development",
      content:
        "We will conduct in-depth research and develop strategies that align with your business goals and target audience.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="testimonial-custom">
      {/* Title Section */}
      <div className="services-content-custom flex items-center mb-8">
        <h1 className="text-3xl font-bold">Our Working Process</h1>
        <p className="mt-4 text-gray-600">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion Section */}
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div
            key={item.id}
            className={`border rounded-lg ${
              activeIndex === index ? "bg-lime-200" : "bg-white"
            }`}
          >
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center px-4 py-3 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">{`0${item.id}`}</span>
                <span className="text-lg font-medium">{item.title}</span>
              </div>
              <button
                className={`text-2xl transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>

            {/* Accordion Content */}
            {activeIndex === index && (
              <div>
                <hr className="mx-4 border-gray-300" />
                <div className="px-4 py-3 text-gray-700">{item.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkinProcess;
