'use client'
import React from 'react';
import RequestList from '../requestList';



const requestListController = ({department,className="" }) => {
    const handleAdmit = (id: string) => {
    // Will change to number
    console.log(`Patient with ID ${id} checked in.`);
  };

  const handleView = (id: string) => {
    // Will change to number
    console.log(`View patient with ID ${id}.`);
  };

  const handleRemove = (id: string) => {
        // Will change to number
    console.log(`Remove patient with ID ${id} from waiting list.`);
  };


  return (
    <RequestList department={department} onAdmit={handleAdmit} onView={handleView} onRemove={handleRemove} className={className}/>
  )
}

export default requestListController