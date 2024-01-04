"use client";
import React, { useState } from "react";

const Prescribe = ({ visible, onClose, patientId, onSubmit }) => {
  const [drugName, setDrugName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [route, setRoute] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [startDateType, setStartDateType] = useState("today");
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(
    new Date(Date.now() + 10 * 24 * 3600 * 1000)
  );

  const [validated, setValidated] = useState(false);

  if (!visible) return null;

  const handleStartDateTypeChange = (type) => {
    setStartDateType(type);
    console.log(type)
    if (type === "today") {
      setStartDateType(new Date(Date.now() - 192 * 3600 * 1000));
    } else {
      setStartDate(new Date(Date.now() - 96 * 3600 * 1000));
    }
  };

  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      drugName,
      dosage,
      frequency,
      route,
      timeOfDay,
      startDate,
      finishDate,
    });

    // Close the popup
    onClose();
  };

  const handlePrescribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    const formData = new FormData(form);
    const prescriptionData: any = {};

    formData.forEach((value, key) => {
      prescriptionData[key] = value;
    });

    try {
      const response = await fetch("/submit-prescription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prescriptionData),
      });

      if (response.ok) {
        console.log("Prescription data sent successfully");
        onClose();
      } else {
        console.error("Failed to submit prescription data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-auto mt-8 border rounded-md bg-gray-100 p-4 overflow-y-auto">
      <h2 className="mb-2 text-2xl font-semibold mt-4 underline">
        Prescribe Medication
      </h2>
      <button
        className="absolute top-3 right-3 text-3xl text-black"
        onClick={onClose}
      >
        X{" "}
      </button>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="mb-2 text-xl font-semibold">Patient Name</h3>
          <p className="mb-2">Gender</p>
          <p>Date of Birth</p>
        </div>

        <div>
          <p>Patient ID</p>
          <p className=" bg-gray-700 rounded-full p-2 ml-2 text-white text-md">
            12345
          </p>
        </div>
      </div>

      {/* Prescribe Medication Form */}
      <form onSubmit={handlePrescriptionSubmit} className="mt-4 bg-white p-4 ">
        {/* Drug Search */}
        <h1 className="text-3xl pb-4 font-bold">Prescribe Medication</h1>
        <div className="mb-4 border-b-2">
          <label
            htmlFor="drugName"
            className="block text-md font-medium text-gray-600 w-full mb-2"
          >
            Drug Name or ID
            <input
              type="text"
              id="drugName"
              name="drugName"
              value={drugName}
              onChange={(e) => setDrugName(e.target.value)}
              className="mt-1 ml-3 p-2 border-b-2 rounded-md w-1/2 bg-gray-200"
            />
          </label>
        </div>

        {/* Dosage, Frequency, Route, Time of Day */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Dosage */}
          <div className="col-span-1">
            <label
              htmlFor="dosage"
              className="block text-sm font-medium text-gray-600"
            >
              Dosage
            </label>
            <input
              type="number"
              id="dosage"
              name="dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Frequency */}
          <div className="col-span-1">
            <label
              htmlFor="frequency"
              className="block text-sm font-medium text-gray-600"
            >
              Frequency
            </label>
            <input
              type="number"
              id="frequency"
              name="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Route */}
          <div className="col-span-1">
            <label
              htmlFor="route"
              className="block text-sm font-medium text-gray-600"
            >
              Route
            </label>
            <input
              type="text"
              id="route"
              name="route"
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        </div>
        {/* Time of Day */}
        <div className="col-span-1 mb-4">
          <label
            htmlFor="timeOfDay"
            className="block text-sm font-medium text-gray-600 w-full"
          >
            Time of Day
          </label>
          <input
            type="text"
            id="timeOfDay"
            name="timeOfDay"
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Start Date Type (Today or Order Day) */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-lg text-gray-600">
              Start Date
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  value="today"
                  checked={startDateType === "today"}
                  onChange={() => handleStartDateTypeChange("today")}
                  className="mr-1"
                />
                Today
              </label>
              <label>
                <input
                  type="radio"
                  value="other"
                  checked={startDateType === "other"}
                  onChange={() => handleStartDateTypeChange("other")}
                  className="mr-1"
                />
                Other
              </label>
              {startDateType === "other" && (
                <input
                  type="date"
                  value={startDate.toISOString().split("T")[0]}
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                  className="mt-1 p-2 border rounded-md ml-2"
                />
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="finishDate"
              className="block text-sm font-large text-gray-600"
            >
              Finish Date
            </label>
            <input
              type="date"
              id="finishDate"
              value={finishDate.toISOString().split("T")[0]}
              onChange={(e) => setFinishDate(new Date(e.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div className="mb-4">
          <label
            htmlFor="additionalNotes"
            className="block text-sm font-medium text-gray-600"
          >
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Prescribe Medication
        </button>
      </form>

      {/* Active Prescriptions Table */}

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Active Prescriptions</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Start Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Id
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Drug Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Route
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Dosage
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time of Day
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* {patientId.activePrescriptions.map((prescription) => (
        <tr key={prescription.id}>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.startDate}</td>
            <td className="px-6 py-4 whitespace-nowrap">{prescription.drugNum}</td>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.drugName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.methodOfAdminstration}</td>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.unitsByDay}</td>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.adminstrationTimes}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="text-blue-500 hover:underline mr-2">Edit</button>
            <button className="text-red-500 hover:underline">Stop</button>
          </td>
        </tr>
      ))} */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Past Prescriptions Table */}
      {/* ... (Table for Past Prescriptions) */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Past Prescriptions</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  End Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Drug Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Route
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Dosage
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time of Day
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* {patientId.pastPrescriptions.map((prescription) => (
        <tr key={prescription.id}>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.endDate}</td>
            <td className="px-6 py-4 whitespace-nowrap">{prescription.drugNum}</td>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.drugName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.methodOfAdminstration}</td>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.unitsByDay}</td>
          <td className="px-6 py-4 whitespace-nowrap">{prescription.adminstrationTimes}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="text-green-500 hover:underline">Renew</button>
          </td>
        </tr>
      ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Prescribe;
