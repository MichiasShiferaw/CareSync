import React from "react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="bg-gray-200 text-gray-700 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="ml-2 text-2xl font-bold">CareSync</span>
      </div>

      <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
        <Link
          href="#"
          className="relative flex items-center lg:ml-4 sm:mr-0 mr-2 ml-2 border-2 px-4 py-2 bg-gray-200 shadow-lg hover:specialHover cursor-pointer rounded-2xl text-stone-900  hover:text-black active:text-blue-800 focus:text-blue-600"
        >
          Thing1
        </Link>
        <Link
          href="#"
          className="relative flex items-center lg:ml-4 sm:mr-0 mr-2 ml-2 border-2 px-4 py-2 bg-gray-200 shadow-lg hover:specialHover cursor-pointer rounded-2xl text-stone-900  hover:text-black active:text-blue-800 focus:text-blue-600"
        >
          Thing2
        </Link>
        <Link
          href="#"
          className="relative flex items-center lg:ml-4 sm:mr-0 mr-2 ml-2 border-2 px-4 py-2 bg-gray-200 shadow-lg hover:specialHover cursor-pointer rounded-2xl text-stone-900  hover:text-black active:text-blue-800 focus:text-blue-600"
        >
          Thing3
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
