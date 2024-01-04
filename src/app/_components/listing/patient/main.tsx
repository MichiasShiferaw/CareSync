"use client";
import React, { useState } from "react";
import RequestListController from "./requestList/_controllers/requestListController";
import AdmittedListController from "./admittedList/_controllers/admittedListController";

const Main = ({ department }) => {
  const tabs = [
    {
      id: "All Patient",
      label: "All Patient",
      content: <AdmittedListController department={department} />,
    },
    {
      id: "Wait List",
      label: "Wait List",
      content: <RequestListController department={department} />,
    },
  ];
  const [activeTab, setActiveTab] = useState("All Patient");
  return (
    <div className="rounded-lg border-gray-300 border-2">
      <ul className="mb-4 flex list-none flex-row flex-wrap border-b-2 border-orange-800 pl-0 pb-2 ">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`cursor-pointer ${
              activeTab === tab.id ? "border-b-2 border-gray-800 bg-slate-600 text-white" : ""
            } my-2 block border-x-4 px-7 pb-3 pt-4 text-2xl font-medium leading-tight text-neutral-800 hover:isolate`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="flex-growpb-32 mx-4 pb-32">
        {tabs.map((tab) =>
          tab.id === activeTab ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

export default Main;
