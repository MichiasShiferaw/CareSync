"use client";
import React, { useState } from "react";
import { BlackIcon } from "../icons/icons";
import Image from "next/image";

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [showIncorrectModal, setIncorrectShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const closeModal = () => {
    setIncorrectShowModal(false);
  };

  const validateForm = (): boolean => {
    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Please fill in all fields.");
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIncorrectShowModal(true); // @jjsoong if the values are wrong

      console.log(formData);
    }
  };

  return (
    <div className="h-screen md:flex bg-gradient-to-tr from-blue-500 to-sky-100 ">
      <div className="relative overflow-hidden md:flex w-2/3 justify-around items-center hidden text-center">
        
        <div className="text-center mx-auto">
          <h1 className=" text-white text-8xl font-bold mb-4">CareSync</h1>
          <p className="text-white mt-1 text-xl">Navigating Wellness Together!</p>
        </div>
      </div>

      <div className="w-full h-full flex md:w-1/3 justify-center py-10 items-center shadow-2xl ">

        <form onSubmit={handleSubmit} className="w-2/3">
          <div className="shadow-xl rounded-lg p-4 mb-4" style={{boxShadow: "0 4px 1px -2px gray"}}>
                    <div className="cursor-pointer flex items-center">
                            <Image
            src="/Icon.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "2.5rem", height: "auto" }}
            alt="Error"
          />
                        <div className="text-4xl text-blue-900 ml-2 tracking-wide font-semibold">CareSync</div>
                    
                    </div>
                </div>
                        
          <h1 className="text-gray-800 font-bold text-4xl mb-1">
            Hello Again!
          </h1>
          <p className="text-lg font-normal text-gray-600 mb-7">Welcome Back</p>

          <div className="flex items-center border-2 border-gray-500 py-3 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none bg-inherit"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center border-2 border-gray-500  py-3 px-3 rounded-2xl">
            <input
              className="pl-2 outline-none border-none bg-inherit bg-black"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="block w-full bg-blue-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 text-2xl transition ease-in duration-100  transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
      {/* Modal */}
      {showIncorrectModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute bg-white rounded-md p-8">
            <div className="flex items-center justify-between">
              <p
                style={{
                  color: "red",
                  paddingTop: "0.3rem",
                  marginRight: "20px",
                }}
              >
                Incorrect information!
              </p>
              <span
                className="text-lg font-semibold cursor-pointer"
                onClick={closeModal}
              >
                &times;
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
