import React, { FC } from "react";
import RequestListController from "@/app/_components/listing/patient/requestList/_controllers/requestListController";
import Link from "next/link";
import {
  DoctorIcon,
  AvatarIcon,
  NurseIcon,
  DirectorIcon,
  BedIcon,
  PatientIcon,
  BedIcon2,
  HospitalIconDraft,
} from "@/app/_components/icons/icons";
import ButtonHeader from "@/app/_components/bodyHeader/buttonHeader";
import SimpleHeader from "../bodyHeader/simpleHeader";

interface EmployeeCountCompProps {
  position: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  num: string;
}


const EmployeeCountComp: FC<EmployeeCountCompProps> = ({
  position,
  Icon,
  num,
}) => {
  return (
    <div className="flex flex-col p-4 bg-white border-black border-4 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
      <div className="flex items-center justify-between">
        <div className="flex items-center mr-auto">
          <div className="inline-flex w-12 h-12">
            <Icon
              color="#000"
              className=" relative w-12 h-12 object-cover rounded-2xl"
            />

            <span></span>
          </div>

          <div className="flex flex-col ml-3">
            <div className="font-semibold text-3xl leading-none text-black hidden 2xl:block">
              {position}
            </div>
          </div>
        </div>
        <div className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-40 mr-2">
          <span className="inline-flex items-center justify-center px-2 py-1 text-lg font-bold leading-none text-white bg-secondary rounded-full ml-2">
            {num}
          </span>
        </div>
      </div>
    </div>
  );
};

interface VisualizeDepartmentProps {
  divisionName: string;
}

const VisualizeDepartment: FC<VisualizeDepartmentProps> = ({
  divisionName,
}) => {
  return (
    <>
      <SimpleHeader
        title={`Visualize > ${divisionName}`}
        className="pb-2 text-special"
      />
      {/* Redirect */}
      <div className="m-4 container mx-auto">
        <div className=" w-full mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col">
            <div className=" border-4 border-special shadow-2xl  rounded-2xl p-4">
              <div className="flex-none sm:flex">
                <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                  <HospitalIconDraft className=" w-32 h-32 object-cover rounded-2xl" />
                </div>
                <div className="flex-auto sm:ml-5 justify-evenly">
                  <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <div className="w-full flex-none text-4xl text-special font-bold leading-none bg-transparent">
                          {divisionName}
                        </div>
                        <div className="flex-auto text-gray-700 my-1">
                          <span className="mr-3 ">IDENTIFICATION</span>
                          <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                          <span>Head Boss</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-1">
              <div className="p-4 relative  shadow-lg rounded-2xl bg-white border-2 border-special2">
                <BedIcon
                  color="text-green-400"
                  className="h-10 w-10 md:h-14 md:w-14 absolute bottom-2 right-2"
                />
                <div className="text-xl md:text-4xl text-special2 font-medium leading-6 md:leading-8 mt-3 md:mt-5">
                  20
                </div>
                <div className="text-sm md:text-2xl text-black">
                  Bed Status
                </div>
                <Link
                  href={"/123/nurse/bed_manage"}
                  className="absolute top-2 right-2 underline text-black px-5 py-1 hover:shadow-lg font-medium rounded-2xl transition ease-in duration-300"
                >
                  View More
                </Link>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-1">
              <div className="p-4 relative  shadow-lg rounded-2xl bg-white border-2 border-special2">
                <PatientIcon
                  color="#000"
                  className="h-10 w-10 md:h-14 md:w-14 absolute bottom-2 right-2"
                />
                <div className="text-xl md:text-4xl text-special2 font-medium leading-6 md:leading-8 mt-3 md:mt-5">
                  29
                </div>
                <div className="text-sm md:text-2xl text-black">
                  Admitted
                </div>
                <Link
                  href={"/123/nurse/patient"}
                  className="absolute top-2 right-2 underline text-black px-5 py-1 hover:shadow-lg font-medium rounded-2xl transition ease-in duration-300"
                >
                  View More
                </Link>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-1">
              <div className="p-4 relative  shadow-lg rounded-2xl bg-white border-2 border-special2">
                <AvatarIcon
                  color="#000"
                  className="h-10 w-10 md:h-14 md:w-14 absolute bottom-2 right-2"
                />
                <div className="text-xl md:text-4xl text-special2 font-medium leading-6 md:leading-8 mt-3 md:mt-5">
                  50
                </div>
                <div className="text-sm md:text-2xl text-black">
                  Employees
                </div>
                <Link
                  href={"/123/department"}
                  className="absolute top-2 right-2 underline text-black px-5 py-1 hover:shadow-lg font-medium rounded-2xl transition ease-in duration-300"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap overflow-hidden gap-4">
            <div className="flex-grow w-full lg:w-9/12 p-4 relative items-center bg-white border-secondary border-4 shadow-lg rounded-2xl overflow-hidden">
              <div className="container mx-auto py-4">
                <div className="flex justify-between mb-4">
                  <h1 className="text-2xl font-bold  inline-flex text-primary">
                    Patient Waiting List
                  </h1>
                  <Link
                    href="/123/nurse/request"
                    target="_blank"
                    className="flex-no-shrink inline-flex bg-gray-400 hover:bg-gray-500 px-5 ml-4 text-lg shadow-md hover:shadow-lg font-medium tracking-wider border-2 border-gray-300 hover:border-gray-500 text-white rounded-lg"
                  >
                    View More
                  </Link>
                </div>
                <div className="flex-grow overflow-hidden">
                  <RequestListController
                    department={divisionName}
                    className="max-h-48"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/12 flex flex-col space-y-4">
              <EmployeeCountComp
                position="doctor"
                Icon={DoctorIcon}
                num="12"
              />
              <EmployeeCountComp position="nurse" Icon={NurseIcon} num="3" />
              <EmployeeCountComp
                position="staff members"
                Icon={DirectorIcon}
                num={"24"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisualizeDepartment;