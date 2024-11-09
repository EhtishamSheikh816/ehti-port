import React from "react";
import Image from "next/image";
import { title } from "process";

const About = () => {
  return (

    <div id="about">
      <div className="bg-gray-800 flex max-h-screen px-11 pt-8 pb-11 mb-[5%] mx-[2%] rounded-lg shadow-xl shadow-black py-[2%]">
        <div className="w-[50%]">
          <div>
            <h1 className="text-orange-500 text-4xl font-extrabold">About Me</h1>
          </div>
          <div>
            <h2 className="text-navColor text-2xl font-semibold p-3">
              Get to know me!
            </h2>
          </div>
          <div>
            <p className="text-white pb-3 text-xl font-medium">
              I'm a passionate Front-End Developer with expertise in building
              dynamic and responsive web applications. I have a strong foundation in
              both front-end and back-end technologies, enabling me to create
              seamless user experiences and robust server-side logic.
            </p>
          </div>
          <div>
            <p className="text-white text-xl">
              I am a passionate Front-End Developer specializing in HTML, CSS,
              Typescript, Next.js, Tailwind.css and Figma. With a solid foundation
              in front-end technologies, I create modern web applications that are
              not only functional but also user-friendly.
            </p>
            <p className="text-white text-xl">
              I am dedicated to delivering high-quality projects on time, always
              focused on meeting the unique needs of my clients. My goal is to
              transform ideas into reality while providing an exceptional user
              experience.
            </p>
          </div>
        </div>
        <div className="pl-[8%]">
          <div className="flex flex-wrap justify-center mb-8 pl-6">
            <Image className="rounded-full shadow-xl flex justify-center" src="/image/i.jpeg" alt="me" width={300} height={600} />
          </div>
          <div className="flex flex-wrap space-y-5 justify-center space-x-4 mt-5">
            <span></span>
            <span className="text-orange-500 bg-orange-300 px-5 py-2 font-bold rounded-full">HTML/CSS</span>
            <span className="text-orange-500 bg-orange-300 px-5 py-2 font-bold rounded-full">Javascript</span>
            <span className="text-orange-500 bg-orange-300 px-5 py-2 font-bold rounded-full">Typescript</span>
            <span className="text-orange-500 bg-orange-300 px-5 py-2 font-bold rounded-full">Next.JS</span>
            <span className="text-orange-500 bg-orange-300 px-5 py-2 font-bold rounded-full">Tailwind.css</span>
            <span className="text-orange-500 bg-orange-300 px-5 py-2 font-bold rounded-full">Figma</span>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="flex justify-center">
          <h1 className="text-orange-500 text-4xl font-extrabold">Education & Skills</h1>
        </div>
        <div className="my-10 space-x-4 flex justify-center">
          <span className="text-gray-600 bg-gray-400 px-6 py-3 rounded-md font-bold text-basenpm run dev" id="edu">Education</span>
        </div>
        <div>
        
        </div>
      </div> */}
    </div>
  );
};
export default About;
