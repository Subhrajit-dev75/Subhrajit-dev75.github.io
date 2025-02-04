import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to PhysicsMaster
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Empowering JEE aspirants with interactive physics coaching and innovative learning methods.
        </p>
        <a
          href="/courses"
          className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Explore Courses
        </a>
      </div>
    </div>
  );
};

export default Home;
