'use client'; // This marks the component as a Client Component

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TalentCard from "./TalentCard";

const talents = [
  {
    name: "John Doe",
    picture: "/assets/person.jpg", // Updated path to be relative to the public folder
    skills: ["JavaScript", "React", "Node.js"],
    rank: "1st Place",
  },
  {
    name: "Jane Smith",
    picture: "/assets/person.jpg", // Updated path to be relative to the public folder
    skills: ["Python", "Django", "AI"],
    rank: "2nd Place",
  },
  {
    name: "Mark Johnson",
    picture: "/assets/person.jpg", // Updated path to be relative to the public folder
    skills: ["Java", "Spring", "Docker"],
    rank: "3rd Place",
  },
  {
    name: "Alice Green",
    picture: "/assets/person.jpg", 
    skills: ["Environmental Science", "Renewable Energy", "Sustainable Agriculture"],
    rank: "1st Place",
    category: "Sustainability",
  },
  {
    name: "Bob White",
    picture: "/assets/person.jpg", 
    skills: ["Climate Change Policy", "Sustainable Urban Planning", "Eco-friendly Technologies"],
    rank: "2nd Place",
    category: "Sustainability",
  },
  {
    name: "Eve Black",
    picture: "/assets/person.jpg", 
    skills: ["Financial Analysis", "Investment Banking", "Cryptocurrency"],
    rank: "1st Place",
    category: "Finance",
  },
  {
    name: "Chris Blue",
    picture: "/assets/person.jpg", 
    skills: ["Corporate Finance", "Stock Market Trading", "FinTech"],
    rank: "2nd Place",
    category: "Finance",
  },
  {
    name: "Dr. Emily White",
    picture: "/assets/person.jpg", 
    skills: ["Clinical Research", "Health Policy", "Public Health"],
    rank: "1st Place",
    category: "Healthcare",
  },
  {
    name: "Dr. Tom Green",
    picture: "/assets/person.jpg", 
    skills: ["Epidemiology", "Medical Diagnostics", "Healthcare Management"],
    rank: "2nd Place",
    category: "Healthcare",
  },
  {
    name: "Sarah Brown",
    picture: "/assets/person.jpg", 
    skills: ["Public Policy", "International Relations", "Governance"],
    rank: "1st Place",
    category: "Policy-Making",
  },
  {
    name: "David Gray",
    picture: "/assets/person.jpg", 
    skills: ["Legislative Affairs", "Social Justice", "Public Administration"],
    rank: "2nd Place",
    category: "Policy-Making",
  },
];

const TalentPlatformPage = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>("All");

  const skillsList = ["All", "JavaScript", "React", "Node.js", "Python", "Django", "AI", "Java", "Spring", "Docker", "Environmental Science", "Renewable Energy", "Sustainable Agriculture", "Climate Change Policy", "Investment Banking", "FinTech", "Clinical Research", "Public Policy", "International Relations", "Epidemiology"];

  // Filter talents based on selected skill
  const filteredTalents = selectedSkill === "All"
    ? talents
    : talents.filter(talent => talent.skills.includes(selectedSkill));

  return (
    <>
      <HeroSection />
      <div className="py-12 px-4 bg-gray-50">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">LinkLab Talent Platform</h1>

        {/* Filter Section */}
        <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter Talents by Skills</h2>
          <div className="relative">
            <select
              className="block w-full text-lg p-3 pr-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
            >
              <option value="All" selected>All</option>
              {skillsList.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fill-rule="evenodd" d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 14z" clip-rule="evenodd"/>
              </svg>
            </span>
          </div>
        </section>

        {/* Talent Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTalents.map((talent) => (
            <TalentCard
              key={talent.name}
              name={talent.name}
              picture={talent.picture}
              skills={talent.skills}
              rank={talent.rank}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default TalentPlatformPage;
