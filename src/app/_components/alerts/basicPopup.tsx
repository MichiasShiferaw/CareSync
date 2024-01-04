"use client";
import React, { useEffect, useState } from "react";
import { CautionSign, IdeaIcon, SuccessIcon, ErrorIcon } from "../icons/icons";

const basicPopup = ({
  message,
  title,
  onClose,
  type,
  className = "",
  visible,
  goBack,
  option1,
  onConfirm,
}) => {
  if (!visible) return null;



  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm top-0 left-0 right-0 bottom-0 flex items-center justify-center ${className}`}
      >
        <div className="bg-gray-100 py-8 rounded-md w-1/2 relative">
          <div className=" transition-all ease-in-out duration pt-5 pb-4 rounded-lg overflow-hidden">
            {(onClose!==null)?(
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              X
            </button>
            ):(
              null
              )
            }

            <div>
              <div className="rounded-full flex justify-center items-center w-16 h-16 mx-auto">
                {type === "success" ? (
                  <SuccessIcon className="w-32 h-32" />
                ) : type === "error" ? (
                  <ErrorIcon className="w-32 h-32" />
                ): type === "caution" ? (
                  <CautionSign className="w-32 h-32" />
                )  : (
                  <IdeaIcon className="w-32 h-32" />
                )}
              </div>
              <div className="text-center mt-3">
                <h3 className="leading-6 font-semibold text-2xl">{title}</h3>
                <div className="mt-2">
                  <p>{message}</p>
                </div>
              </div>

              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-5">
                <button onClick={onConfirm} 
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">
                  {(option1 !== null) ? option1 : "Confirm"}
                </button>
                <button
                  onClick={goBack}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Undo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default basicPopup;
