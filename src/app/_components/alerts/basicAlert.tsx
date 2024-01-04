"use client"
import React, { useEffect, useState } from 'react';
import {CautionSign, IdeaIcon, SuccessIcon,ErrorIcon } from '../icons/icons';



const getBackgroundColor = (type:string)=>{
  switch (type) {
    case 'success':
    return (`bg-bgsuccess text-textsuccess`)
  case 'caution':
    return("bg-bgcaution text-textcaution")
  case 'error':
    return ('bg-bgwarning text-textwarning')
  default:
    return("bg-bgidea text-textidea")
  }
}



const Alert = ({message, timerVal=10000000, type, className=""}) => {
  console.log(type)

  const [isVisible, setIsVisible] = useState(true);


  const handleClick = () => {
    setIsVisible(false);
  };




  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timerVal);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* {true && ( */}
       <div
          className={`flex flex-row items-center w-full mx-auto mb-4 px-4 self-center py-2 ${getBackgroundColor(
        type
      )} rounded-md shadow-md transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
        >
  <div className="flex-shrink-0 md:mb-0 md:mr-4">
    {type === 'success' ? (
      <SuccessIcon className="w-8 h-8" />
    ) : type === 'caution' ? (
      <CautionSign className="w-8 h-8" />
    ) : type === 'error' ? (
      <ErrorIcon className="w-8 h-8" />
    ): (
      <IdeaIcon className="w-8 h-8" />
    )}
  </div>
<div className="text-lg leading-6 md:leading-5 md:text-2xl font-medium flex-grow md:mb-0">
        {/* Conditionally render message only on screens larger than md */}
        <div className=" md:block">{message}</div>
      </div>
  <div className="md:ml-auto ml-2 md:pl-3 flex-shrink-0 flex">
    <div>
      <button onClick={handleClick} className="mx-[-0.275rem] w-8 h-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="nz sb"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>;
      {/* )} */}
    </>
  );
};


export default Alert