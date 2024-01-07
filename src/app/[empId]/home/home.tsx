import {
  ConsultFile,
  Employee,
  EmployeeProfile,
  HospitalBed,
  HospitalBuilding,
  Medication,
  RegisterPatient,
  RequestAdmission,
  UpdateFile,
} from "@/app/_components/icons/icons";
// import { getUser } from "@/app/_lib/user";
import Link from "next/link";
import React from "react";

// const ButtonLink = ({ icon, text, color }) => {
//   return (
//     <Link
//       href={"home/"}
//       className={`flex flex-col rounded-xl  text-gray-700 shadow-md bg-${color}-500 hover:bg-${color}-600 border border-${color}-600 hover:border-${color}-700 p-4 text-center shadow-md m-2`}
//     >
//       <div className="mb-2  text-8xl self-center">{icon}</div>
//       <p className="text-black  w-full text-xl font-semibold">{text}</p>
//     </Link>
//   );
// };


const ButtonLink = ({ icon, text, link }) => {
  return (
    <Link
      href={link}
      className={`flex flex-col rounded-xl  text-gray-700 shadow-md bg-gray-200 hover:bg-gray-300 border border-gray-600 hover:border-gray-700 p-4 text-center m-2 transition ease-in duration-200  transform hover:scale-105`}
    >
      <div className="mb-2  text-8xl self-center">{icon}</div>
      <p className="text-black  w-full text-xl font-semibold">{text}</p>
    </Link>
  );
};


const DashboardHome = () => {
//   const user = getUser(localStorage);

  // Sample
  const doctorButtons = [
        {
      id: 1,
      text: "Prescribe Medication",
      icon: <Medication className="w-36 h-36" color={"#ff2200"} />,
      link: "/123/doctor",
    }
  ];
  
  const nurseButtons = [
    {
      id: 2,
      text: "BedManagement",
      icon: <HospitalBed className="w-36 h-36" />,
      link: "/123/nurse/bed_manage",
    },
    {
      id: 3,
      text: "Visualize Division",
      icon: <HospitalBuilding className="w-36 h-36" color={"#ff2200"} />,
      link: "/123/nurse/visualize_depart",
    },
        
    //     {
    //   id: 4,
    //   text: "Request Patient Admission",
    //   icon: <RequestAdmission className="w-36 h-36" color={"#ff1200"} />,
    //   link: "/123/nurse/requestAdmit",
    // },
    {
      id: 5,
      text: "Admitted List",
      icon: <UpdateFile className="w-36 h-36" color={"#ff1200"} />,
      link: "/123/nurse/admitted",
    },
        {
      id: 6,
      text: "Request List",
      icon: <UpdateFile className="w-36 h-36" color={"#89cff0"} />,
      link: "/123/nurse/request",
    }
  ];

  const buttons = [
    {
      id: 7,
      text: "Register Staff",
      icon: <Employee className="w-36 h-36" color={"#ff1200"} />,
      link: "/123/register_staff",
    },
    {
      id: 8,
      text: "Register Patient",
      icon: <RegisterPatient className="w-36 h-36" color={"#269"} />,
      link: "/123/register",
    },
    // {
    //   id: 9,
    //   text: "Consult Patient File",
    //   icon: <ConsultFile className="w-36 h-36" color={"#ff1200"} />,
    //   link: "/123/consult",
    // },
    {
      id: 10,
      text: "Profile",
      icon: <EmployeeProfile className="w-36 h-36" color={"#ff1200"} />,
      link: "/123/profile",
    }
  ];

//   console.log(user.role.role);
//   let renderedButtons;
//   if (user.role.role == 'doctor') {
//     renderedButtons = doctorButtons.concat(buttons);
//   } else if (user.role.role == 'chargeNurse') {
//     renderedButtons = nurseButtons.concat(buttons);
//   } else {
//     renderedButtons = buttons;
//   }


  return (
    <div className="container mx-auto px-[12px] md:px-24 xl:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 lg:gap-y-4">
        {/* {renderedButtons.map((button) => ( */}
          <ButtonLink key={button.id} {...button} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default DashboardHome;