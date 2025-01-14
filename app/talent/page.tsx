'use client'; // This marks the component as a Client Component

import React, { useState } from "react";
import Footer from "@/components/Footer";
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
  // Add more talent objects as needed
];

const TalentPlatformPage = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>("All");

  const skillsList = ["All", "JavaScript", "React", "Node.js", "Python", "Django", "AI", "Java", "Spring", "Docker"];

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
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Filter Talents by Skills</h2>
          <select
            className="bg-white border border-gray-300 text-lg p-2 rounded-md shadow-sm"
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            {skillsList.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
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
      <Footer />
    </>
  );
};

export default TalentPlatformPage;
