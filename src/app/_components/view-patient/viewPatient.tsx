"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Prescribe from '../prescribe/prescribe';
import PrescribeForm from '../prescribe/prescribeForm';
import Image from 'next/image';
import { AvatarIcon, FemaleAvatar, PatientIcon, RegisterPatient } from '../icons/icons';

const ViewPatients = (doctorId) => {
  const [patientInfo, setPatientInfo] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
//   const [showPrescription, setShowButton] = useState(userRole === 'doctor');
  const [showPrescription, setShowButton] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = (patientId: string) => {
    setSelectedPatientId(patientId);
    setShowButton(true)
    setShowModal(true);
  }

  const handlePatientDetailClick = (patientId: string) => {
    setPatientInfo((prevPatientInfo) =>
      prevPatientInfo === patientId ? null : patientId
    );
  };

  const handleCloseButton = () => {
    setPatientInfo(null);
  };

//   useEffect(() => {
//     setShowButton(userRole === 'doctor');
//   }, [userRole]);


  const patients = [
    { id: 1, name: 'John Doe', phonenumber: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phonenumber: '987-654-3210' },
    {
  id: 3,
  name: 'Michael Brown',
  phonenumber: '333-333-3333',
},
{
  id: 4,
  name: 'Emma Wilson',
  phonenumber: '444-444-4444',
},
{
  id: 5,
  name: 'Daniel Taylor',
  phonenumber: '555-555-5555',
},
{
  id: 6,
  name: 'Sophia Lee',
  phonenumber: '666-666-6666',
},
{
  id: 7,
  name: 'Matthew Johnson',
  phonenumber: '777-777-7777',
},
{
  id: 8,
  name: 'Olivia Davis',
  phonenumber: '888-888-8888',
},
{
  id: 9,
  name: 'William Moore',
  phonenumber: '999-999-9999',
},
{
  id: 10,
  name: 'Ava Anderson',
  phonenumber: '101-101-1010',
},

  ]
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Side - Buttons */}
      <div className="lg:w-3/5 p-4 bg-gray-200 flex-1 flex flex-col w-full">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className='bg-gray-400 text-2xl'>
          <tr>
            <th className="py-2 px-4 border-b">Patient ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b hidden md:table-cell">#### </th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>

                    {/* Add later */}
{patients.map((patient,index) => ( 
            <tr key={index}>
            {/* <tr> */}
              <td className="py-2 px-4 border-b">{patient.id}</td>
              <td className="py-2 px-4 border-b">{patient.name}</td>
              <td className="py-2 px-4 border-b hidden md:table-cell">{patient.phonenumber}</td>
              <td className="py-2 px-4 border-b  text-center">
                <button onClick={() => handlePatientDetailClick(patient.id)}
                className="bg-secondary text-black py-1 px-2 rounded-md shadow-xl hover:text-tertiary hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className={`w-full lg:w-2/5 ${patientInfo !== null ? 'flex' : 'hidden'} flex-col items-center justify-center bg-blue-400 rounded-2xl ml-2 relative p-4`}>
        <div className="text-4xl font-bold text-tertiary" >
          <div className=' flex justify-center'>
          <RegisterPatient color={"ffffff"} className={ "h-32 w-32"}/>
          {/* <Image
            src="/assets/.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "15rem", height: "auto" }}
            alt="Error"
          /> */}
          </div>
          Patient: {patientInfo}


        </div>
        <button
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-red absolute top-4 right-4"
          onClick={handleCloseButton}
        >
          Close
        </button>
        {/* {/* {showPrescription && ( */}
                  <button className='bg-purple-300 text-white py-1 px-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue' onClick={() => handleShow("name")}> Prescribe Medication </button>

                  {/* )} */}
      </div>


      {showPrescription &&
 (     <div>
        <PrescribeForm  show={showModal} handleClose={handleClose} patientId={selectedPatientId}/>
      </div>

)}

    </div>
  );
};



export default ViewPatients