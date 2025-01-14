import Link from "next/link";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import UpComingHackathon from "./hackathons/up-coming-hackathons";


const HomePage = () => {
  return (
    <>
          <Header />

      <HeroSection />
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome to LinkLab</h2>
        <p className="text-lg text-gray-700">
          LinkLab is revolutionizing talent acquisition by connecting companies with skilled professionals through hackathons. Our platform fosters dynamic, hands-on recruitment and innovation.
        </p>
        <div className="mt-8">
          <Link href="/hackathons">
            <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700">
              Join a Hackathon
            </button>
          </Link>
          <Link href="/about">
            <button className="ml-4 py-2 px-6 border border-gray-400 rounded hover:bg-gray-100">
              Learn More
            </button>
          </Link>
        </div>
      </section>
      <UpComingHackathon />

      <Footer />
    </>
  );
};

export default HomePage;
