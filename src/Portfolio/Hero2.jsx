import React from 'react';
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

const Hero2 = () => {
  return (
    <div className="bg-slate-50 min-h-[500px] w-full">
      <div className="w-[90%] mx-auto pt-16">
        <h1 className="text-3xl font-semibold tracking-wider pb-4">Tech Stack</h1>
        <hr className="border-gray-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14 w-[90%] mx-auto">
        <div className="max-w-full">
          <FaHtml5 className="h-20 w-16 text-green-800" />
          <h1 className="font-bold text-[20px] py-4">HTML & CSS</h1>
          <p className="text-gray-500">
            Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.
          </p>
        </div>

        <div className="max-w-full">
          <FaJs className="h-20 w-16 text-green-600" />
          <h1 className="font-bold text-[20px] py-4">JavaScript</h1>
          <p className="text-gray-500">
            Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.
          </p>
        </div>

        <div className="max-w-full">
          <FaReact className="h-20 w-16 text-green-600" />
          <h1 className="font-bold text-[20px] py-4">React</h1>
          <p className="text-gray-500">
            Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
