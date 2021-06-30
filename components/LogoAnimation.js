import React from "react";
import Link from "next/link";

const LogoAnimation = () => {
  return (
    <Link href="/" passHref>
      <div className="flex flex-col items-center justify-center border-green-400 border-4 rounded-full text-white text-2xl w-14 h-14 cursor-pointer transform duration-1000 hover:rotate-270">
        S
      </div>
    </Link>
  );
};

export default LogoAnimation;
