"use client";
import React, { useState, useEffect, FC } from "react";
import PatientProfile from "../profile/PatientProfile";
import { ChevronDown, ChevronUp, SuccessIcon } from "../icons/icons";
import BasicPopup from "../alerts/basicPopup";
import Receipt from "../receipts/receipt";
import Loader from "../loader/loader";
import { useRouter } from 'next/router';
import BedManagementController from "../bedManagement/controllers/bedManagementController";

interface AdmitPatientProps {
  patientId: string;
}

const AdmitPatient: FC<AdmitPatientProps> = ({patientId}) => {

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showPopupConfirmed, setShowPopupConfirmed] = useState<boolean>(false);
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    step1: any;
    step2: any;
    step3: any;
    complete: any;
  }>({
    step1: {},
    step2: {},
    step3: {},
    complete: {},
  });

  const toggleAccordion = (stepId: number): void => {
    setOpenStep((prevId) => (prevId === stepId ? null : stepId));
  };

  const handleFormSubmit = (): void => {

    if (currentStep <= steps.length + 2) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    if(currentStep==steps.length-1){

      setShowPopup(true)
    }
  };

  const handleStepSubmit = (stepData: any): void => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`step${currentStep}`]: stepData,
    }));

    handleFormSubmit();
  };

  const handleFormBack = (): void => {
    // Move back to the previous form section
    setShowPopup(false);
    setShowPopupConfirmed(false);
    setCurrentStep((prevStep) => Math.max(1, prevStep - 1));
  };

  const handleOnClose = (): void => {
    setShowPopupConfirmed(false);
  };

  const handleFormComplete = (): void => {
    console.log('Complete Form Data:', formData);

    setShowPopup(false);
  };

  useEffect(() => {
    // Check if formData is complete
    const isFormDataComplete: boolean =
      Object.keys(formData.step1).length > 0 &&
      Object.keys(formData.step2).length > 0;

    setLoading(!isFormDataComplete);
  }, [formData]);

  const steps = [
    {
      id: 1,
      label: "Consult Patient File",
      content: <PatientProfile onSubmit={handleStepSubmit } patientId={patientId} />,
    },
    {
      id: 2,
      label: "Select Bed",
      content: <BedManagementController onSubmit={handleStepSubmit} />,
    },{
      id:3,
      label:"Receipt",
      content: <Receipt  formData={formData}/>
    }
  ];

  return (
    <>
      <div className=" flex flex-col justify-center items-center border border-gray-500 py-8">
        <h1 className="text-3xl font-bold mb-8">Patient Admission Form</h1>

        <div className="w-full max-w-4xl">
          {steps.map((step) => (
            <div key={step.id} className="mb-4">
              <button
                onClick={() => toggleAccordion(step.id)}
                className="w-full bg-purple-200 p-2 py-4 text-left flex items-center justify-between rounded-lg text-2xl font-semibold"
              >
                <div className="flex items-center">
                  {step.label}
                  {currentStep > step.id && (
                    <SuccessIcon className="hidden sm:block h-6 w-6 text-black ml-2" />
                  )}
                </div>
                <div>
                  {!(openStep === step.id) ? (
                    <ChevronDown className="hidden sm:block h-6 w-6 text-black" />
                  ) : (
                    <ChevronUp className="hidden sm:block h-6 w-6 text-black" />
                  )}
                </div>
              </button>
              {/*  (openStep === step.id) && */}
              {currentStep === step.id && (
                <div>
                  {currentStep!==1&&
                  <div className="text-right">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-full mt-4"
                    onClick={handleFormBack}
                  >
                    Back
                  </button>
                  </div>}
                  {step.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {loading && <Loader/>}
            {showPopup && (
        <BasicPopup
          type={"caution"}
          message={"Select View Receipt to admit patient"}
          title={"Confirming Admission"}
          visible={showPopup}
          option1="View Receipt"
          onConfirm={handleFormComplete}
          goBack={handleFormBack}         />
      )}
      {showPopupConfirmed && (
        <BasicPopup
          type={"success"}
          message={"Complete! Printing incoming"}
          title={"Congrats"}
          visible={showPopup}
          onClose={handleOnClose}
          goBack={handleFormBack}        />
      )}
    </>
  );
};

export default AdmitPatient;