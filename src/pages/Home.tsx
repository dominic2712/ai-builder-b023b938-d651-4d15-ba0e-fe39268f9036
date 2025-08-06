import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Future of AI</h1>
        <p className="mt-4 text-gray-600">Discover the impact of AI on our future and how it changes the world.</p>
      </div>
    </div>
  );
};

export default Home;