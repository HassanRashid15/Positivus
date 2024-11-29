import React from "react";

const services = [
  {
    title: "Search engine optimization",
    description:
      "This is a description of the first card. It contains some text to describe the card content.",
    image: "https://source.unsplash.com/400x300/?nature",
    // icon :  ,
  },
  {
    title: "Pay-per-click advertising",
    description:
      "This is a description of the second card. It contains some text to describe the card content.",
    image: "https://source.unsplash.com/400x300/?technology",
  },
  {
    title: "Social Media Marketing",
    description:
      "This is a description of the third card. It contains some text to describe the card content.",
    image: "https://source.unsplash.com/400x300/?business",
  },
  {
    title: "Email Marketing",
    description:
      "This is a description of the fourth card. It contains some text to describe the card content.",
    image: "https://source.unsplash.com/400x300/?design",
  },
  {
    title: "Content Creation",
    description:
      "This is a description of the fourth card. It contains some text to describe the card content.",
    image: "https://source.unsplash.com/400x300/?design",
  },
  {
    title: "Analytics and Tracking",
    description:
      "This is a description of the fourth card. It contains some text to describe the card content.",
    image: "https://source.unsplash.com/400x300/?design",
  },
];

function Services() {
  return (
    <div className="services_parent_custom">
      <div className="services-content-custom flex items-center mb-8">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-4 text-gray-600">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-0">
        {services.map((service, index) => (
          <div
            key={index}
            className=" services-card-content rounded-lg shadow-lg overflow-hidden flex items-center"
          >
            <div className="p-4">
              <h3
                className="text-xl font-semibold "
                dangerouslySetInnerHTML={{ __html: service.title }}
              />
              <div>
                {/* {service.icon} */}
<p className=" mt-2">{service.description}</p>
              </div>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
