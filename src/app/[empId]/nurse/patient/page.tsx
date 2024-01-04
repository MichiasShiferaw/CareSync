import React from 'react'
import Main from '@/app/_components/listing/patient/main';
import SimpleHeader from '@/app/_components/bodyHeader/simpleHeader';

const page = () => {
  return (
    <div className='min-h-screen bg-gray-100 rounded-3xl p-4'>
      <SimpleHeader title={"Division's Patient Info"} className='my-2'/>
      
      <Main department={"surgery"}/></div>
  )
}

export default page