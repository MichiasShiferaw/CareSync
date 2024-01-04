import Link from "next/link";
import React from "react";

const buttonHeader = ({ title, buttonName, href, desc = "",className="" }) => {
  return (
    <div className={`${className} lg:flex lg:items-center lg:justify-between py-4`}>
      <div className="min-w-0 flex-1 border-b">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h2>
        {desc ? (
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              {desc}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="sm:ml-3">
          <Link
            href={href}
            type="button"
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {buttonName}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default buttonHeader;
