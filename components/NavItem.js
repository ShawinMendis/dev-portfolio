import React from "react";
import Link from "next/link";

const NavItem = ({ title, Icon, link }) => {
  return (
    <Link href={`#${link}`} passHref>
      <a className="group flex items-center px-5 text-gray-300 cursor-pointer">
        <Icon className="h-8 group-hover:animate-bounce text-green-400 mr-2" />
        <p className="text-sm hover:text-green-400">{title}</p>
      </a>
    </Link>
  );
};

export default NavItem;
