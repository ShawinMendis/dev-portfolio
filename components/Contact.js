import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 40 },
};

const Contact = () => {
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
      id="contact"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 2 }}
      className="h-screen flex flex-col justify-center items-center md:w-4/12 mx-auto"
    >
      <div className="text-gray-200 text-4xl mb-5">Reach Out To Me</div>
      <p className="text-lg text-gray-400 text-center">
        If you&apos;re looking for someone who can build the{" "}
        <span className="text-green-400">next digital experience</span> on the
        internet or your company reach out to me, lets chat. I&apos;m open for
        front end or fullstack opportunities.
      </p>

      <a
        href="mailto:shawin.dev@gmail.com"
        className="flex justify-center text-lg md:text-xl text-green-400 p-3 border-2 border-green-400 md:w-4/12 cursor-pointer mt-8"
      >
        Say Hello
      </a>
    </motion.div>
  );
};

export default Contact;
