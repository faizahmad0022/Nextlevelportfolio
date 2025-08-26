"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Html/Css",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vs Code",
  "API Integration (Rest)",
  "Postman",
  "Code Optimization",
  "Routing & Dynamic Routes",
  "Object Oriented Language",
  "Databases",
];

export default function Home() {
  return (
    <motion.div
      className="flex justify-center items-center mt-20 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-green-100 w-full max-w-7xl rounded-2xl  p-6 sm:p-10">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center text-center mt-6 sm:mt-10">
          <motion.p
            className="text-2xl sm:text-3xl md:text-[50px] text-green-800 font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Technology
          </motion.p>
          <motion.p
            className="mt-3 text-green-600 text-sm sm:text-base md:text-[20px] max-w-xl md:max-w-2xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Front-end developer crafting responsive and engaging web experiences
            with React.js and Next.js.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 p-5 mt-8 sm:mt-10 md:w-[80%] w-[70%] mx-auto">
          {skills.map((skill, index) => (
            <motion.p
              key={index}
              className="bg-green-900 px-6 py-2 rounded-full text-center text-white text-sm sm:text-base transition-all duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-green-500/50"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2 * index, // 👈 staggered effect
              }}
            >
              {skill}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
