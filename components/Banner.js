import React from "react";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const Banner = () => {
  return (
    <div>
      <div className="p-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-green-400 mb-4 md:mb-7 motion-safe:animate-fadeIn`"
        >
          Hi, my name is
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="text-5xl md:text-7xl text-gray-300 mb-4 md:mb-7"
        >
          Shawin Mendis.
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.5, duration: 2 }}
          className="text-4xl md:text-6xl text-gray-400 mb-4 md:mb-7"
        >
          Building Digital Experiences.
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.5, duration: 2.5 }}
          className="w-full text-lg text-gray-400 md:text-lg mb-4 md:mb-7 md:w-6/12"
        >
          I&apos;m a melbourne based software engineer who specializes in
          building digital experiences. I&apos;m a results-driven software
          engineer with over 3 years of experience in delivering high quality
          software.
        </motion.p>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.5, duration: 3 }}
          className="flex justify-center text-lg md:text-xl text-green-400 p-3 border-2 border-green-400 w-full md:w-2/12 cursor-pointer mt-8"
        >
          Latest Work
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
