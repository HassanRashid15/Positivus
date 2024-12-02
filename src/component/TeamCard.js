// TeamCard.jsx
import React from "react";

const TeamCard = ({ name, role, experience, linkedIn }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-green-200 rounded-full mb-4"></div>{" "}
      {/* Placeholder for image */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <p className="text-sm text-gray-600 mt-2">{experience}</p>
      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-4"
        >
          LinkedIn
        </a>
      )}
    </div>
  );
};

export default TeamCard;
