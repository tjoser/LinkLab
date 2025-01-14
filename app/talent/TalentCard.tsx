import React from "react";

interface TalentCardProps {
  name: string;
  picture: string;
  skills: string[];
  rank: string;
}

const TalentCard: React.FC<TalentCardProps> = ({ name, picture, skills, rank }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-200 p-6">
      {/* Talent Image */}
      <div className="flex justify-center mb-4">
        <img src={picture} alt={name} className="w-32 h-32 rounded-full object-cover" />
      </div>

      {/* Talent Info */}
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{name}</h3>
      <p className="text-sm text-gray-600 text-center mb-2">Rank: {rank}</p>

      {/* Skills List */}
      <div className="flex justify-center items-center space-x-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm text-blue-500 bg-blue-100 px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TalentCard;
