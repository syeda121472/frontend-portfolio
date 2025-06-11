import React from 'react';
import codeimage from "../assets/codeimage.svg";

const Hero3 = () => {
  return (
    <div className="px-4 md:px-12 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <img 
            src={codeimage} 
            alt="Code Illustration" 
            className="w-60 md:w-80 pt-3"
          />
        </div>

        <div className="pt-6 md:pt-12 text-justify">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-wider pb-4">
            Code and Coffee
          </h1>
          <hr className="border-gray-300" />
          <p className="pt-4 text-gray-500">
            I'm Wajeeha, a seasoned web developer with expertise in React and component-based projects. 
            With a year of experience, I've mastered Redux for global state management and wield Axios 
            for seamless data fetching. Let's collaborate and transform your ideas into digital brilliance!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
