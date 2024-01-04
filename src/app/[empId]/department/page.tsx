import React from 'react';
import EmployeeListController from '@/app/_components/listing/employeeList/_controllers/employeeListController';

const page = () => {
  return (
    <div><EmployeeListController department={"Surgery"}/></div>
  )
}

export default page