import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800">About AI & Future</h1>
        <p className="mt-4 text-gray-600">Learn more about the advancements in AI technology and its future implications.</p>
      </div>
    </div>
  );
};

export default About;