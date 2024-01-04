import AdmittedList from '@/app/_components/listing/patient/admittedList/admittedList'
import React from 'react';
import ViewPatients from '@/app/_components/view-patient/viewPatient';

import SimpleHeader from '@/app/_components/bodyHeader/simpleHeader';

const page = ({searchParams}) => {
  const id= searchParams.employeeId
  return (
    <div className='min-h-screen p-4 rounded-xl border-2 border-primary'>
      <SimpleHeader title={"View My Patients"} className='my-2'/>
      <ViewPatients doctorId={id}/>
    </div>
  )
}

export default page