"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, Variants } from "framer-motion"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };
  
  const item: Variants = {
    hidden: { y: -40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <nav className="w-full bg-black shadow-md px-6 py-3 flex items-center justify-center">
      <motion.div
        className="flex items-center justify-between w-full lg:w-[80%] "
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="text-xl font-bold text-gray-800">
          <span className="text-green-600 font-mono text-lg">
            &lt;Faiz Ahmed/&gt;
          </span>
        </motion.div>

        <motion.div variants={container} className="hidden md:flex lg:gap-6">
          {[
            { name: "Skills", href: "/" },
            { name: "About Me", href: "/about" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Projects", href: "/projects" },
            { name: "Experience", href: "/experience" },
            { name: "Contacts", href: "/contact" },
          ].map((link, index) => (
            <motion.div key={index} variants={item}>
              <Link
                href={link.href}
                className="text-green-600 hover:text-green-800 hover:bg-green-800 hover:text-white px-3 py-1 rounded-md transition"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          variants={item}
          className="md:hidden text-green-600 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </motion.div>

      {isOpen && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="md:hidden flex flex-col mt-4 w-full bg-black px-6 pb-4"
        >
          {[
            { name: "Skills", href: "/" },
            { name: "About Me", href: "/about" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Projects", href: "/projects" },
            { name: "Experience", href: "/experience" },
            { name: "Contacts", href: "/contact" },
          ].map((link, index) => (
            <motion.div key={index} variants={item}>
              <Link
                href={link.href}
                className="text-green-600 hover:bg-green-800 hover:text-white px-3 py-1 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
