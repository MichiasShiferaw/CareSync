import React from 'react';
import Link from 'next/link';

interface Patient {
  id: number;
  name: string;
  age: number;
  bedNumber: string;
  admissionDate: string;
}

interface AdmittedListProps {
  department: Patient[];
  onDischarge: (id: number) => void;
  onView: (id: number) => void;
}

const AdmittedList: React.FC<AdmittedListProps> = ({
  department,
  onDischarge,
  onView,
}) => {

  department = [
  { id: 1, name: 'John Doe', age: 30, bedNumber: 'B101', admissionDate: '2023-01-01' },
  { id: 2, name: 'Jane Smith', age: 25, bedNumber: 'A202', admissionDate: '2023-01-02' },
  { id: 3, name: 'Alice Johnson', age: 35, bedNumber: 'C303', admissionDate: '2023-01-03' },
  { id: 4, name: 'Bob Thompson', age: 40, bedNumber: 'A104', admissionDate: '2023-01-04' },
  { id: 5, name: 'Emily Davis', age: 28, bedNumber: 'B205', admissionDate: '2023-01-05' },
  { id: 6, name: 'David Wilson', age: 32, bedNumber: 'C306', admissionDate: '2023-01-06' },
  { id: 7, name: 'Grace Brown', age: 50, bedNumber: 'A107', admissionDate: '2023-01-07' },
  { id: 8, name: 'Henry Lee', age: 45, bedNumber: 'B208', admissionDate: '2023-01-08' },
  { id: 9, name: 'Olivia Miller', age: 27, bedNumber: 'C309', admissionDate: '2023-01-09' },
  { id: 10, name: 'Daniel White', age: 38, bedNumber: 'A110', admissionDate: '2023-01-10' },
  { id: 11, name: 'Sophia Turner', age: 22, bedNumber: 'B211', admissionDate: '2023-01-11' },
  { id: 12, name: 'Michael Harris', age: 33, bedNumber: 'C312', admissionDate: '2023-01-12' },
  { id: 13, name: 'Ella Martin', age: 29, bedNumber: 'A113', admissionDate: '2023-01-13' },
  { id: 14, name: 'Christopher Adams', age: 48, bedNumber: 'B214', admissionDate: '2023-01-14' },
  { id: 15, name: 'Ava Garcia', age: 31, bedNumber: 'C315', admissionDate: '2023-01-15' },
  { id: 16, name: 'William Clark', age: 42, bedNumber: 'A116', admissionDate: '2023-01-16' },
  { id: 17, name: 'Sofia Martinez', age: 26, bedNumber: 'B217', admissionDate: '2023-01-17' },
  { id: 18, name: 'Joseph Rodriguez', age: 36, bedNumber: 'C318', admissionDate: '2023-01-18' },
  { id: 19, name: 'Victoria Hernandez', age: 23, bedNumber: 'A119', admissionDate: '2023-01-19' },
  { id: 20, name: 'Ethan Wilson', age: 37, bedNumber: 'B220', admissionDate: '2023-01-20' },
  { id: 21, name: 'Madison Taylor', age: 34, bedNumber: 'C321', admissionDate: '2023-01-21' },
  { id: 22, name: 'Jackson Scott', age: 39, bedNumber: 'A122', admissionDate: '2023-01-22' },
  { id: 23, name: 'Lily Allen', age: 24, bedNumber: 'B223', admissionDate: '2023-01-23' },
  { id: 24, name: 'Andrew Hall', age: 41, bedNumber: 'C324', admissionDate: '2023-01-24' },
  { id: 25, name: 'Samuel Johnson', age: 45, bedNumber: 'C325', admissionDate: '2023-01-25' },
];

  return (
    <div className=" overflow-y-auto">
      <table className="table-auto w-full border border-secondary rounded-2xl">
        <thead className='bg-secondary'>
          <tr>
            <th className="py-2 px-4 border-b border-2 border-gray-700">ID</th>
            <th className="py-2 px-4 border-b border-2 border-gray-700">Name</th>
            <th className="py-2 px-4 border-b border-2 border-gray-700">Age</th>
            <th className="py-2 px-4 border-b border-2 border-gray-700">Bed</th>
            <th className="py-2 px-4 border-b border-2 border-gray-700">Admitted Time</th>
            <th className="py-2 px-4 border-b border-2 border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>

          {/* Add later */}
{department.map((patient,index) => ( 
             <tr key={index}> 
            {/* // <tr> */}
              <td className="py-6 px-4 border-2 border-gray-700 text-center">{patient.id}</td>
              <td className="py-6 px-4 border-2 border-gray-700 text-center">{patient.name}</td>
              <td className="py-6 px-4 border-2 border-gray-700 text-center">{patient.age}</td>
              <td className="py-6 px-4 border-2 border-gray-700 text-center">{patient.bedNumber}</td>
              <td className="py-6 px-4 border-2 border-gray-700 text-center">{patient.admissionDate}</td>
              <td className="py-2 px-4 border-2 text-center border-gray-700">
                <button 
                onClick={() => onDischarge(patient.id)}
                 className="mr-1 bg-blue-500 px-6 p-1 text-gray-50 duration-150 hover:!border-b-2  rounded-xl drop-shadow-lg items-center border-2 border-b-4 border-blue-950 cursor-pointer active:bg-blue-400">
                  Discharge
                </button>
                <Link
                  href={{
                    pathname: "/123/view",
                    query: { patientId: patient.id },
                  }}
                onClick={() => onView(123)} 
                className="mx-1 px-6 bg-secondary p-1 duration-150 hover:!border-b-2 text-blue-900 rounded-xl drop-shadow-lg items-center border-2 border-b-4 border-blue-950 cursor-pointer active:bg-yellow-400">
                  View File
                </Link>
              </td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdmittedList