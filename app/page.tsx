'use client';

import Link from "next/link";
import HeroSection from "../components/HeroSection";
import UpComingHackathon from "./hackathons/up-coming-hackathons";
import { Badge, Avatar } from "@nextui-org/react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      
      {/* Welcome Section */}
      <section className="py-12 px-4 text-center bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Welcome to LinkLab
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          LinkLab is revolutionizing talent acquisition by connecting companies with skilled professionals through hackathons. Our platform fosters dynamic, hands-on recruitment and innovation.
        </p>
        <div className="mt-8">
          <Link href="/hackathons">
            <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300 dark:bg-indigo-700 dark:hover:bg-indigo-800">
              Join a Hackathon
            </button>
          </Link>
          <Link href="/about">
            <button className="ml-4 py-2 px-6 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Talents Section */}
      <section className="py-12 px-4 text-center bg-gray-50 dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Our Talents
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Meet some of the talented individuals who have participated in our hackathons. Their skills and expertise help drive innovation.
        </p>
        <div className="flex gap-8 justify-center">
          <Badge color="primary" size="md">
            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          </Badge>
          <Badge color="primary" size="md">
            <Avatar radius="md" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
          </Badge>
          <Badge color="primary" size="md">
            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          </Badge>
        </div>
      </section>

      <UpComingHackathon />
    </>
  );
};

export default HomePage;
