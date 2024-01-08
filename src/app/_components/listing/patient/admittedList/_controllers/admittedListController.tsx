"use client";
import React, { useState,FC } from "react";
import AdmittedList from "../admittedList";
import DischargePatientForm from "@/app/_components/forms/dischargePatientForm";
import Alert from "@/app/_components/alerts/basicAlert";

interface AdmittedListControllerProps {
  department: String; 
}


  interface Patient {
  id: number;
  name: string;
  age: number;
  bedNumber: string;
  admissionDate: string;
}

const department1: Patient[] = [
 {
    id: 1,
    name: 'John Doe',
    age: 30,
    bedNumber: 'B101',
    admissionDate: '2022-01-01',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    bedNumber: 'B102',
    admissionDate: '2022-01-02',
  },
];
  


const AdmittedListController: FC<AdmittedListControllerProps> =  ({ department }) => {
  const [showDischargeForm, setShowDischargeForm] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleDischarge = (id: number) => {
    // Will change to number
    console.log(`Patient with ID ${id} is discharged.`);
    setShowDischargeForm(true);
  };

  const handleView = (id: number) => {
    // Will change to number
    console.log(`View patient with ID ${id}.`);
  };

  const handleOnClose = () => {
    setShowDischargeForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted successfully!");
    setSubmitted(true);

    handleOnClose();
  };

  return (
    <>
      {isSubmitted && (
        <Alert
          type={"success"}
          message={"Complete! Printing incoming"}
          className="fixed top-2"
        />
      )}
      <AdmittedList
        department={department1}
        onDischarge={handleDischarge}
        onView={handleView}
      />
      <DischargePatientForm
        onClose={handleOnClose}
        visible={showDischargeForm}
        patient={"Hi"}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AdmittedListController;
