"use client"
import React, { useState } from 'react'
import Prescribe from './prescribe';


const PrescribeForm = ({show,patientId,handleClose}) => {
    const [showPrescribeForm, setShowPrescribeForm] = useState(show);
  const [isSubmitted, setSubmitted] = useState(false);

  

  const handleClose1=()=>{
    // setShowPrescribeForm(false);
    handleClose()


  }
  const handleSubmit = (prescriptionDetails) => {
    // Handle the submission logic using prescriptionDetails
    console.log('Prescription submitted:', prescriptionDetails);

    setSubmitted(true);
    setShowPrescribeForm(false)
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-50 overflow-auto">
      <div className="bg-white p-4 rounded-md shadow-md w-full my-4 max-w-screen-md">

        <Prescribe visible={showPrescribeForm} onClose={handleClose1} patientId={patientId} onSubmit={handleSubmit}/>
        </div>
        </div>
  )
}

export default PrescribeForm