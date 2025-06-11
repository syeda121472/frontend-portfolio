import React from 'react';
import womenwalking from "../assets/womenwalking.jpg";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${womenwalking})` }}
    >
      </div>
  );
};

export default Home;
