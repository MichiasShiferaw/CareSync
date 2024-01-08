"use client"
import React from 'react'
import AdmitPatient from '@/app/_components/forms/admitPatient';
interface PageProps {
  searchParams: {
    patientId: string;
  };
}


const page:React.FC<PageProps>= ({searchParams}) => {
  const id= searchParams.patientId
  return (
    <AdmitPatient patientId={id}/>
  )
}

export default page