"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { doctorItems, generalItems, nurseItems } from "./main";

interface Tab {
  link: string;
  icon?: JSX.Element;
  text: string;
}

interface CustomLinkProps {
  tabs: Tab[];
}

const CustomLink: FC<CustomLinkProps> = ({ tabs }) => {
  return (
    <>
      {tabs.map((tab, index) => (
        <Link
          key={index}
          href={tab.link}
          className={`flex items-center gap-x-2 px-2 pl-4 py-1 lg:px-0 lg:gap-x-1 text-black font-medium text-md rounded-md hover:ml-4 transition-all hover:text-white transform ease-in-out duration-300`}
        >
          <span className="inline-flex justify-center items-center mx-2">
            {tab.icon !== undefined && <>{tab.icon}</>}
          </span>
          {tab.text}
        </Link>
      ))}
    </>
  );
};

const Sidebar: FC = () => {
  return (
    <div className="bg-secondary h-min-screen py-3">
      <h3 className="px-5 pb-5 my-2 text-3xl text-white md:pl-4 md:pr-0 border-b-2 border-dashed font-bold">
        CareSync
      </h3>

      <div id="sidebar" className="flex flex-col gap-y-4 px-2 md-px:1 lg:mt-4">
        <Link
          href={"/123"}
          className={`flex text-xl items-center gap-x-2 px-2 pl-4 py-1 lg:px-0 lg:gap-x-1 text-white font-medium text-md rounded-md hover:ml-4 transition-all hover:text-white transform ease-in-out duration-300`}
        >
          <span className="inline-flex justify-center items-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </span>
          {"Dashboard"}
        </Link>

        <div className="flex flex-row items-center border-b-2 border-gray">
          <div className="text-lg font-extrabold tracking-wide text-blue-900 lg:text-xl">
            Nurses
          </div>
        </div>
        <CustomLink tabs={nurseItems} />
        <div className="flex flex-row items-center border-b-2 border-gray">
          <div className="text-lg font-extrabold tracking-wide text-blue-900   lg:text-xl">
            Doctors
          </div>
        </div>
        <CustomLink tabs={doctorItems} />
        <div className="flex flex-row items-center border-b-2 border-gray">
          <div className="text-lg font-extrabold tracking-wide text-blue-900 lg:text-xl">
            General
          </div>
        </div>
        <CustomLink tabs={generalItems} />
      </div>
    </div>
  );
};

export default Sidebar;