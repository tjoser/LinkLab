const SustainabilityHackathonPage = () => {
    return (
      <div className="py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Brussels University Sustainability Hackathon</h1>
        <section>
          <h2 className="text-2xl font-semibold">Program Tracks</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Sustainable Campus Project</li>
            <li>City-wide Environmental Solutions</li>
            <li>Policy-oriented Solutions</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">How to Participate</h2>
          <p className="text-lg text-gray-700">
            Whether you are a student, professional, or organization, you can get involved in this transformative event. Join us to solve real-world sustainability challenges.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4">Register Now</button>
        </section>
      </div>
    );
  };
  
  export default SustainabilityHackathonPage;
  