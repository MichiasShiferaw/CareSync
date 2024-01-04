import BedManagement from '@/app/_components/bedManagement/bedManagement'
import React from 'react'
import BedManagementController from '@/app/_components/bedManagement/controllers/bedManagementController'

const page = () => {
  return (
    <div className='min-h-screen border-2 border-black rounded-xl py-2 px-4'><BedManagementController/></div>
  )
}

export default page