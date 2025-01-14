import HeroSection from "@/components/HeroSection";
import { FaBullhorn, FaEye, FaBullseye } from "react-icons/fa"; // Icons for Mission, Vision, and Objectives

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
          About LinkLab
        </h1>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
            <FaBullhorn className="mr-3 text-indigo-600" /> Mission
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our mission is to create a high-impact recruitment platform that connects organizations with skilled professionals in a dynamic, challenge-based setting, fostering solutions for pressing societal issues.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-12 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
            <FaEye className="mr-3 text-indigo-600" /> Vision
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            To become Belgium’s premier platform for experiential, cross-disciplinary talent discovery and recruitment, recognized for its innovative approach through hackathons across various fields.
          </p>
        </section>

        {/* Objectives Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center">
            <FaBullseye className="mr-3 text-indigo-600" /> Objectives
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-800 space-y-2">
            <li>Build a Skilled Talent Pool/Platform</li>
            <li>Address Industry Needs</li>
            <li>Drive Innovation</li>
            <li>Achieve Sustainable Growth</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
