/* eslint-disable @next/next/no-img-element */
import React from "react";

interface TalentCardProps {
  name: string;
  picture: string;
  skills: string[];
  rank: string;
  category?: string; // Category is optional
}

const TalentCard: React.FC<TalentCardProps> = ({ name, picture, skills, rank, category }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 p-6">
      {/* Talent Image */}
      <div className="relative flex justify-center mb-4">
        <img
          src={picture}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
        />
        <span className="absolute bottom-0 right-2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
          {rank}
        </span>
      </div>

      {/* Talent Name */}
      <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{name}</h3>

      {/* Category */}
      {category && (
        <p className="text-sm text-center text-indigo-700 font-medium mb-4">
          {category}
        </p>
      )}

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <button className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default TalentCard;
