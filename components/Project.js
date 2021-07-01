import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 40 },
};

const Project = ({ projects }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.stop();
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="latest"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 2.5 }}
      className="flex flex-col items-center container mx-auto mt-40"
    >
      {projects.map((project, key) => {
        return (
          <div
            className={`flex flex-col my-5 p-8 md:${
              key % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={key}
          >
            <div
              className={`flex flex-col justify-center w-full md:w-6/12 items-start md:${
                key % 2 === 0 ? "items-start" : "items-end"
              }`}
            >
              <p className="text-green-400 text-lg mb-2">{project.name}</p>
              <h2 className="text-gray-200 text-xl mb-4">{project.headline}</h2>
              <p className="text-lg text-gray-400 bg-blue-shade mb-4 p-4 shadow-xl">
                {project.description}
              </p>
              <div className="flex flex-row text-sm text-gray-300 my-4">
                {project.tech.map((tech, i) => {
                  return (
                    <p className="mr-3" key={i}>
                      {tech}
                    </p>
                  );
                })}
              </div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ delay: 1, duration: 1 }}
              className="mx-2 md:w-6/12"
            >
              <Image
                alt={project.name}
                src={project.asset}
                width={800}
                height={600}
                layout="responsive"
              />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Project;
