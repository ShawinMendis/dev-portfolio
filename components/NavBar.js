import React from "react";
import NavItem from "../components/NavItem";
import {
  UserCircleIcon,
  CodeIcon,
  InboxIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";
import LogoAnimation from "./LogoAnimation";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
};

const AllNavItems = [
  {
    title: "About Me",
    Icon: UserCircleIcon,
    link: "about",
    duration: 0.5,
  },
  {
    title: "Latest Work",
    Icon: TrendingUpIcon,
    link: "latest",
    duration: 1,
  },
  {
    title: "Projects",
    Icon: CodeIcon,
    link: "projects",
    duration: 1.5,
  },
  {
    title: "Contact",
    Icon: InboxIcon,
    link: "contact",
    duration: 2,
  },
];

const NavBar = () => {
  return (
    <nav className="flex justify-between p-5 shadow-lg top-0 z-50 bg-blue-shade2 opacity-75">
      <LogoAnimation />
      <div className="hidden md:flex md:flex-wrap">
        {AllNavItems.map((item, i) => {
          return (
            <motion.div
              key={i}
              className="mt-4"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: item.duration }}
            >
              <NavItem title={item.title} Icon={item.Icon} link={item.link} />
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
