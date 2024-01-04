import React from 'react'

const Receipt = ({formData}) => {

  return (
    <div>

              <div className="bg-gray-100 p-8 shadow-md rounded-md max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Hospital Admission Receipt</h1>

        <div className="bg-gray-200 p-4 rounded-md mb-6">
      <p className="text-sm font-semibold">Admission Time: {new Date(Date.now() - 72 * 3600 * 1000).toLocaleString()}</p>

    </div>

      {/* Step 1: Personal Info */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
        <p>First Name: {formData.step1.firstName}</p>
        <p>Last Name: {formData.step1.lastName}</p>
        <p>Gender: {formData.step1.gender}</p>
        <p>Date of Birth: {formData.step1.dOB}</p>
        <p>Martial Status: {formData.step1.martialStatus}</p>
        <p>Phone Number: {formData.step1.phoneNumber}</p>
        <p>Address: {formData.step1.addressStreetName}, {formData.step1.addressCity}, {formData.step1.addressPostCode}</p>
      </section>

      {/* Step 2: Room Info */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Step 2: Room Information</h2>
        <p>Room Number: {formData.step2.openRoomId}</p>
        <p>Bed Number: {formData.step2.selectedBedId}</p>
      </section>
    </div>
    </div>
  )
}

export default Receipt