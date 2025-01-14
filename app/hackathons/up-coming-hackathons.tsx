
import HackathonCard from "../../components/HackathonCard";

const UpComingHackathon = () => {
  return (
    <>
    <div className="py-12 px-4 bg-gray-50">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Upcoming Hackathons
      </h1>
      
      {/* Hackathons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <HackathonCard 
          title="Green Innovation Hackathon" 
          date="March 2025"
          theme="Urban Sustainability"
        />
        <HackathonCard 
          title="Tech for Good Hackathon" 
          date="April 2025"
          theme="AI for Social Good"
        />
        <HackathonCard 
          title="HealthTech Innovation" 
          date="May 2025"
          theme="Healthcare Solutions"
        />
      </div>
    </div>
    </>
  );
};

export default UpComingHackathon;
