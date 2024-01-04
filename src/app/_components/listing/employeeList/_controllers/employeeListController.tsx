import React from 'react';
import EmployeeList from '../employeeList';


const employeeListController = ({department="Cardiology"}) => {


  const handleView = (id: string) => {
    // Will change to number
    console.log(`View patient with ID ${id}.`);
  };


  return (
    <EmployeeList department={department} onView={handleView}/>
  )
}

export default employeeListController