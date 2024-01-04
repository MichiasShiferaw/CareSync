import React from 'react';
// import AdmittedList from '@/app/_components/listing/patient/admittedList/admittedList';
import AdmittedListController from '@/app/_components/listing/patient/admittedList/_controllers/admittedListController';
import SimpleHeader from '@/app/_components/bodyHeader/simpleHeader';
const page = () => {
  return (
    <div>
      <SimpleHeader title={"Admitted Patients"} className={"mb-4"}/>
      <AdmittedListController department={"Surgery"} /></div>
  )
}

export default page