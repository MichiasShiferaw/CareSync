"use client";
import React, { useState } from "react";
import AdmittedList from "../admittedList";
import DischargePatientForm from "@/app/_components/forms/dischargePatientForm";
import Alert from "@/app/_components/alerts/basicAlert";

const admittedListController = ({ department }) => {
  const [showDischargeForm, setShowDischargeForm] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleDischarge = (id: string) => {
    // Will change to number
    console.log(`Patient with ID ${id} is discharged.`);
    setShowDischargeForm(true);
  };

  const handleView = (id: string) => {
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
        department={department}
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

export default admittedListController;
