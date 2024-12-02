import React, { useState } from 'react'

function Team() {
    const teamMembers = [
      {
        name: "John Smith",
        role: "CEO and Founder",
        experience:
          "10+ years of experience in digital marketing, SEO, PPC, and content strategy.",
        linkedIn: "#",
      },
      {
        name: "Jane Doe",
        role: "Director of Operations",
        experience:
          "7+ years of experience in project management and team leadership.",
        linkedIn: "#",
      },
      {
        name: "Michael Brown",
        role: "Senior SEO Specialist",
        experience:
          "5+ years of experience in SEO and content creation, focusing on keyword research and optimization.",
        linkedIn: "#",
      },
      {
        name: "Emily Johnson",
        role: "PPC Manager",
        experience:
          "3+ years of experience in paid search advertising, skilled in campaign management.",
        linkedIn: "#",
      },
      {
        name: "Brian Williams",
        role: "Social Media Specialist",
        experience:
          "4+ years of experience in social media marketing, proficient in scheduling and analytics.",
        linkedIn: "#",
      },
      {
        name: "Sarah Kim",
        role: "Content Creator",
        experience:
          "2+ years of experience in writing and editing SEO-optimized content.",
        linkedIn: "#",
      },
    ];
    const [showAll, setShowAll] = useState(false);

    // Decide how many cards to display
    const visibleTeam = showAll ? teamMembers : teamMembers.slice(0, 3);
  return (
    <div className="team-custom">
      <div className="services-content-custom flex items-center mb-8">
        <h1 className="text-3xl font-bold">Team</h1>
        <p className="mt-4 text-gray-600">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="p-0">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-200 rounded-full mb-4"></div>{" "}
              {/* Placeholder for image */}
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">{member.experience}</p>
              {member.linkedIn && (
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4"
                >
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className='flex justify-end'>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 px-6 py-2 bg-black text-white rounded-lg"
          >
            {showAll ? "Show Less" : "See all team"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team
