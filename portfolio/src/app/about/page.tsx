"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  const aboutCards = [
    "I’m Faiz Ahmed, a passionate Front-End Developer dedicated to building responsive, dynamic, and user-friendly web applications.",
    "With expertise in Next.js, React.js, and TypeScript, I specialize in crafting seamless digital experiences that combine performance with modern design.",
    "From API integrations and dynamic routing to code optimization, I thrive on turning ideas into functional, impactful solutions.",
    "Beyond coding, I focus on writing clean, scalable code and constantly learning new tools to stay ahead in this fast-evolving field."
  ];

  return (
    <section id="about" className="py-16 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-green-100 rounded-2xl p-10 shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
          About Me
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutCards.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
