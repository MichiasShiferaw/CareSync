import { ConsultFile,
  Employee,
  EmployeeProfile,
  HospitalBed,
  HospitalBuilding,
  Medication,
  RegisterPatient,
  RequestAdmission,
  UpdateFile } from "../../icons/icons";


export const generalItems= [
    {
      id: 4,
      text: "Register Staff",
      icon: <Employee className="w-5 h-5" color={"#ff1200"} />,
      link: "/123/register_staff",
    },
    {
      id: 5,
      text: "Register Patient",
      icon: <RegisterPatient className="w-5 h-5" color={"#269"} />,
      link: "/123/register",
    },
    // {
    //   id: 6,
    //   text: "Consult Patient File",
    //   icon: <ConsultFile className="w-5 h-5" color={"#ff1200"} />,
    //   link: "/123/consult",
    // },
    {
      id: 7,
      text: "Profile",
      icon: <EmployeeProfile className="w-5 h-5" color={"#ff1200"} />,
      link: "/13/profile",
    }
  ];

export const doctorItems= [
    {
      id: 1,
      text: "Prescribe Medication",
      icon: <Medication className="w-5 h-5" color={"#ff2200"} />,
      link: "/123/doctor",
    }
  ];

export const nurseItems= [
    {
      id: 2,
      text: "BedManagement",
      icon: <HospitalBed className="w-5 h-5" />,
      link: "/123/nurse/bed_manage",
    },
    {
      id: 3,
      text: "Visualize Division",
      icon: <HospitalBuilding className="w-5 h-5" color={"#ff2200"} />,
      link: "/123/nurse/visualize_depart",
    },
        
    //     {
    //   id: 6,
    //   text: "Request Patient Admission",
    //   icon: <RequestAdmission className="w-5 h-5" color={"#ff1200"} />,
    //   link: "/123/nurse/requestAdmit",
    // },
    {
      id: 6,
      text: "Admitted List",
      icon: <UpdateFile className="w-5 h-5" color={"#ff1200"} />,
      link: "/123/nurse/admitted",
    },
        {
      id: 6,
      text: "Request List",
      icon: <UpdateFile className="w-5 h-5" color={"#89cff0"} />,
      link: "/123/nurse/request",
    },
  ];