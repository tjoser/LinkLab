import HackathonCard from "./HackathonCard";

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
  image="https://escp.eu/sites/default/files/inline-images/1732018404364.jpg"          
/>
<HackathonCard 
  title="Tech for Good Hackathon" 
  date="April 2025"
  theme="AI for Social Good"
  image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"          
/>
<HackathonCard 
  title="HealthTech Innovation" 
  date="May 2025"
  theme="Healthcare Solutions"
  image="https://assets.entrepreneur.com/content/3x2/2000/1706678049-Untitleddesign-2024-01-31T091351371.png?format=pjeg&auto=webp&crop=16:9&width=675&height=380"          
/>
<HackathonCard 
  title="Financial Future Hackathon" 
  date="June 2025"
  theme="FinTech and Investment"
  image="https://fastforward.com.cy/sites/default/files/styles/media_image/public/2024-05/hackaithon_banner_v2_1.jpg?h=c8e83125&itok=IsBRRxF9"          
/>
<HackathonCard 
  title="Policy Makers' Challenge" 
  date="July 2025"
  theme="Governance and Public Policy"
  image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*PDeERuo0vp4nq2bm0e8htw.jpeg"          
/>
<HackathonCard 
  title="Next-Gen Tech Hackathon" 
  date="August 2025"
  theme="Cutting-edge Tech Innovations"
  image="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"          
/>

        </div>
      </div>
    </>
  );
};

export default UpComingHackathon;
