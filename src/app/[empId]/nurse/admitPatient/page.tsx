"use client"
import React from 'react'
import AdmitPatient from '@/app/_components/forms/admitPatient';



const page = ({searchParams}) => {
    const id= searchParams.patientId
  return (
    <AdmitPatient patientId={id}/>
  )
}

export default page