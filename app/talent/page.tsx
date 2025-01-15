'use client'; // This marks the component as a Client Component

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TalentCard from "./TalentCard";

const talents = [
  {
    name: "John Doe",
    picture: "/assets/person.jpg",
    skills: ["JavaScript", "React", "Node.js"],
    rank: "1st Place",
    category: "Tech",
  },
  {
    name: "Jane Smith",
    picture: "/assets/person.jpg",
    skills: ["Python", "Django", "AI"],
    rank: "2nd Place",
    category: "Tech",
  },
  {
    name: "Alice Green",
    picture: "/assets/person.jpg",
    skills: ["Environmental Science", "Renewable Energy", "Sustainable Agriculture"],
    rank: "1st Place",
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
    name: "Dr. Emily White",
    picture: "/assets/person.jpg",
    skills: ["Clinical Research", "Health Policy", "Public Health"],
    rank: "1st Place",
    category: "Healthcare",
  },
  {
    name: "Sarah Brown",
    picture: "/assets/person.jpg",
    skills: ["Public Policy", "International Relations", "Governance"],
    rank: "1st Place",
    category: "Policy-Making",
  },
];

const categoriesList = ["All", "Tech", "Sustainability", "Finance", "Healthcare", "Policy-Making"];
const skillsList = ["JavaScript", "React", "Node.js", "Python", "Django", "AI", "Environmental Science", "Renewable Energy", "Sustainable Agriculture", "Financial Analysis", "Investment Banking", "Cryptocurrency", "Clinical Research", "Health Policy", "Public Health", "Public Policy", "International Relations", "Governance"];

const TalentPlatformPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Toggle skill selection
  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedSkills([]);
  };

  // Filter talents based on category and skills
  const filteredTalents = talents.filter((talent) => {
    const matchesCategory = selectedCategory === "All" || talent.category === selectedCategory;
    const matchesSkills =
      selectedSkills.length === 0 || selectedSkills.some((skill) => talent.skills.includes(skill));
    return matchesCategory && matchesSkills;
  });

  return (
    <>
      <HeroSection />
      <div className="py-12 px-4 bg-gray-50">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">LinkLab Talent Platform</h1>

        {/* Filter Section */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
            <button
              className="text-sm text-indigo-600 hover:underline"
              onClick={clearFilters}
            >
              Reset Filters
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category Filter */}
            <div className="relative">
              <label className="block text-lg font-medium text-gray-700 mb-1">Category</label>
              <select
                className="block w-full text-lg p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categoriesList.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Skill Filter */}
            <div className="relative">
              <label className="block text-lg font-medium text-gray-700 mb-1">Skills</label>
              <div className="border border-gray-300 rounded-md shadow-sm p-3 max-h-40 overflow-y-auto">
                {skillsList.map((skill) => (
                  <div key={skill} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={skill}
                      value={skill}
                      checked={selectedSkills.includes(skill)}
                      onChange={() => toggleSkill(skill)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor={skill} className="ml-2 text-sm text-gray-800">
                      {skill}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Talent Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTalents.length > 0 ? (
            filteredTalents.map((talent) => (
              <TalentCard
                key={talent.name}
                name={talent.name}
                picture={talent.picture}
                skills={talent.skills}
                rank={talent.rank}
                category={talent.category}
              />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No talents match your selected filters.
            </p>
          )}
        </section>
        <p className="text-center mt-8 text-gray-500">
          Showing {filteredTalents.length} of {talents.length} talents.
        </p>
      </div>
    </>
  );
};

export default TalentPlatformPage;
