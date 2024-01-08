"use client"
import React, { useState, FC } from 'react';
import Prescribe from './prescribe';

interface PrescribeFormProps {
  show: boolean;
  patientId: number|null;
  handleClose: () => void;
}

const PrescribeForm: FC<PrescribeFormProps> = ({ show, patientId, handleClose }) => {
  const [showPrescribeForm, setShowPrescribeForm] = useState<boolean>(show);
  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  const handleClose1 = () => {
    handleClose();
  };

  const handleSubmit = (prescriptionDetails: any) => {
    console.log('Prescription submitted:', prescriptionDetails);

    setSubmitted(true);
    setShowPrescribeForm(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-50 overflow-auto">
      <div className="bg-white p-4 rounded-md shadow-md w-full my-4 max-w-screen-md">
        <Prescribe visible={showPrescribeForm} onClose={handleClose1} patientId={patientId} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default PrescribeForm;