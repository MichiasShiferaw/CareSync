import React from 'react'
import RequestListController from '@/app/_components/listing/patient/requestList/_controllers/requestListController'
import SimpleHeader from '@/app/_components/bodyHeader/simpleHeader'
const page = () => {
  return (
    <div className='bg-gray-200 min-h-screen p-3 rounded-2xl'>
      <SimpleHeader title={"Request Waiting Lists"} className='my-2'/>
      <RequestListController department={"surgery"} /></div>
  )
}

export default page