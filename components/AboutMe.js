import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tech1 = ["React", "Next", "Angular", "Typescript"];
const tech2 = ["Javascript (ES6+)", "Node Js", "REST API/GraphQL", "AWS"];

const iamgeVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 40 },
};

const AboutMe = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={2}
      className="flex flex-col h-screen items-center justify-center container mx-auto md:w-8/12"
    >
      <div className="flex flex-col md:flex-row">
        <div className="text-lg text-gray-400 w-full md:w-8/12 p-8">
          <p className="my-5">
            Hello! My name is Shawin and I am a{" "}
            <span className="text-green-400">
              results-driven Software Engineer
            </span>{" "}
            with 3 years of experience in delivering high quality Software with
            a deep understanding of various{" "}
            <span className="text-green-400">
              technical foundations, business logic and customer experience.
            </span>{" "}
            Proficient in JavaScript, Node Js, Angular, React Js, cloud
            technologies & applying modern agile principles to deliver business
            value.
          </p>
          <p>
            Fast-forward to today, I have developed comprehensive Web and Mobile
            apps for diverse range of clients using Ionic(angular), React js and
            Next js met KPIs on delivery time and maintained quality of code at
            all times. Below are some technologies I have worked with.
          </p>
          <div className="ml-5 flex flex-row my-5">
            <ol className="list-disc mr-10">
              {tech1.map((t, i) => {
                return (
                  <li key={i} className="text-green-400">
                    <span className="text-gray-300">{t}</span>
                  </li>
                );
              })}
            </ol>
            <ol className="list-disc mr-10">
              {tech2.map((t, i) => {
                return (
                  <li key={i} className="text-green-400">
                    <span className="text-gray-300">{t}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={iamgeVariants}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/me.jpeg"
            alt="me"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
