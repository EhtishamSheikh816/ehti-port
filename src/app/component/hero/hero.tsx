"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center text-center items-center py-[25%] max-h-screen">
      <div className="text-center w-[50%]">
        <div className="text-5xl font-extrabold text-navColor">HI, I'm</div>
        <div className="text-5xl font-extrabold bg-gradient-to-tr from-orange-600 to-yellow-600 bg-clip-text text-transparent font-sans">
          EHTISHAM
        </div>
        <div className="text-5xl font-extrabold">
          <Typewriter
            options={{
              strings: ["Front-End Developer", "UI/UX Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div>
          <p className="text-2xl text-yellow-600 py-3">
            I am a passionate front-end developer with expertise in building
            dynamic and responsive web applications. I have a strong foundation
            in front-end technologies, which enables me to create seamless user
            experiences and strong server-side logic.
          </p>
        </div>
        <div className="space-x-4 mt-6">
          <a
            className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600 transition duration-300"
            href="#"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
          <a
            className="bg-gray-700 text-white py-2 px-6 rounded hover:bg-gray-800 transition duration-300"
            href="#"
            rel="noopener noreferrer"
          >
            My CV
          </a>
        </div>
      </div>
      <div className="flex justify-center ml-24">
        <Image
          className="rounded-full"
          src="/image/i.jpeg"
          alt="my pic"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
};

export default Hero;


// style={{
//   backgroundImage: "url('/image/bgi.jpeg')",
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   width: '100%',
//   height: '100vh'
// }}