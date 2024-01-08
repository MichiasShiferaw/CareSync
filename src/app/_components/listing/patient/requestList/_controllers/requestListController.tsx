'use client'
import React,{FC} from 'react';
import RequestList from '../requestList';

interface RequestListControllerProps {
  department: string; 
  className?:string;
}

  interface Patient {
  id: number;
  name: string;
  severity: string;
}

const department1: Patient[] = [
    { id: 1, name: 'John Doe', severity: 'Low' },
    { id: 2, name: 'Jane Smith', severity: 'Medium' },
    { id: 3, name: 'Alice Johnson', severity: 'High' },
    { id: 4, name: 'Bob Williams', severity: 'Low' },
    { id: 5, name: 'Eva Brown', severity: 'Medium' },
    { id: 6, name: 'Michael Miller', severity: 'High' },
    // Add more patients as needed
  ];

const requestListController:FC<RequestListControllerProps> = ({department,className="" }) => {
    const handleAdmit = (id: number) => {
    // Will change to number
    console.log(`Patient with ID ${id} checked in.`);
  };

  const handleView = (id: number) => {
    // Will change to number
    console.log(`View patient with ID ${id}.`);
  };

  const handleRemove = (id: number) => {
        // Will change to number
    console.log(`Remove patient with ID ${id} from waiting list.`);
  };


  return (
    <RequestList department={department1} onAdmit={handleAdmit} onView={handleView} onRemove={handleRemove} className={className}/>
  )
}

export default requestListController