import React from "react";
import PatientProfile from "@/app/_components/profile/patientProfile";
import SimpleHeader from "@/app/_components/bodyHeader/simpleHeader";

const profile = () => {
  return (
    <>
      <SimpleHeader title="Profile" className="ps-4" />
      <div className="container my-5 p-5 border-2 shadow-2xl rounded-2xl">
        <div className="md:flex no-wrap rounded-2xl">
          <div className="md:mx-2 rounded-2xl">
            <div className="bg-white p-3">
              <div className="image overflow-hidden">
                <img
                  className="h-1/4 w-1/4 mx-auto"
                  src="https://www.pngall.com/wp-content/uploads/5/Profile.png"
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 font-bold text-3xl leading-8 my-6">
                Michias Shiferaw
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6 text-xl my-6">
                Staff ID: 200
              </h3>
              <ul className="border-2 border-special rounded-full w-3/4 text-gray-600 hover:text-gray-700 hover:shadow px-8 mt-3 divide-y shadow-sm">
                <li className="flex items-center py-3">
                  <span>Role</span>
                  <span className="ml-auto px-2">
                    <span className="bg-special2 py-1 px-2 rounded-full text-white text-sm">
                      Admin
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="my-4"></div>
            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-blue-500">
                  <svg
                    className="h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide text-2xl py-2">About</span>
              </div>
              <div className="grid grid-cols-1">
                <div className="text-gray-700 text-2x;">
                  {/* <div className="grid md:grid-cols-3 text-sm"> */}
                  <div className="grid grid-cols-3">
                    <div className="py-2 font-semibold">First Name</div>
                    <div className="py-2">Michias</div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className=" py-2 font-semibold">Last Name</div>
                    <div className=" py-2">Shiferaw</div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className=" py-2 font-semibold">Password</div>
                    <div className=" py-2">********</div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="py-2 font-semibold">Email</div>
                    <div className="py-2">hello@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
