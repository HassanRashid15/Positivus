import React from "react";

const caseStudiesData = [
  {
    id: 1,
    value: "1.3K",
    label: "Users",
    iconPath: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>,
    extraIconPath: <circle cx="9" cy="7" r="4"></circle>,
  },
  {
    id: 2,
    value: "74",
    label: "Files",
    iconPath: <path d="M3 18v-6a9 9 0 0118 0v6"></path>,
    extraIconPath: (
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
    ),
  },
  {
    id: 3,
    value: "46",
    label: "Places",
    iconPath: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>,
  },
];

function CaseStudies() {
  return (
    <div className="case-studies-custom">
      <div className="services-content-custom flex items-center mb-8">
        <h1 className="text-3xl font-bold">Case Studies</h1>
        <p className="mt-4 text-gray-600">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies.
        </p>
      </div>

      <section className="text-gray-700 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-4 text-center w-full justify-between cursor">
            {caseStudiesData.map(
              ({ id, value, label, iconPath, extraIconPath }) => (
                <div key={id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-600 px-4 py-6 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      {iconPath}
                      {extraIconPath && extraIconPath}
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-gray-900">
                      {value}
                    </h2>
                    <p className="leading-relaxed">{label}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
