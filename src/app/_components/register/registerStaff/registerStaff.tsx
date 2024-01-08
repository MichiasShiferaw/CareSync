"use client";
import React, { useState } from "react";

const RegisterEmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    streetAddress: "",
    postalCode: "",
    city: "",
    division: "cardiology",
    role: "personnelDirector",
    empFirstName: "",
    empLastName: "",
    registrationDate: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // const validateForm = () => {
  //   const newErrors: Record<string, string> = {};

  //   const requiredFields = [
  //     "firstName",
  //     "lastName",
  //     "email",
  //     "password",
  //     "streetAddress",
  //     "city",
  //     "division",
  //     "role",
  //     "empFirstName",
  //     "empLastName",
  //     "registrationDate",
  //   ];
  //   requiredFields.forEach((field) => {
  //     if (!formData[field]) {
  //       newErrors[field] = "This field is required";
  //     }
  //   });

  //   setErrors(newErrors);

  //   return Object.keys(newErrors).length === 0;
  // };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form
    // if (validateForm()) {
      // Submit the form data or perform other actions
      console.log("Form submitted:", formData);
    // } else {
    //   console.log("Form validation failed.");
    //   console.log(formData)
    // }
  };
  return (
    <div className="container mx-auto mt-4 border-4 border-primary shadow-2xl rounded-xl pt-4 pb-2">
      <h1 className="text-4xl font-bold mb-4 ml-4 text-center">Employee Register Form</h1>
      <form className=" mx-auto p-8" onSubmit={handleSubmit}>
        {/* Basic Info Section */}
        <h1 className="text-lg font-bold mb-4 border-b-2 border-black pb-4">
          Basic Info
        </h1>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 `}
            />
            
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3`}
            />

          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border rounded-md py-2 px-3 $`}
          />
          
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 ml-2">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 `}
            />
            
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 `}
            />
           
          </div>
        </div>

        {/* Address Info Section */}
        <h1 className="text-lg font-bold mb-4 border-b-2 border-black pb-4">
          Address Info
        </h1>
        <div className="flex mb-4">
          <div className="w-6/12 mr-2">
            <label
              htmlFor="streetAddress"
              className="block text-gray-700 font-bold mb-2"
            >
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 `}
            />
            
          </div>

          <div className="w-1/6 ml-2">
            <label
              htmlFor="city"
              className="block text-gray-700 font-bold mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 `}
            />
            
          </div>

          <div className="w-4/12 ml-2">
            <label
              htmlFor="postalCode"
              className="block text-gray-700 font-bold mb-2"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 `}
            />
            
          </div>
        </div>

        {/* Role Section */}
        <h1 className="text-lg font-bold mb-4 border-b-2 border-black pb-4">
          Role
        </h1>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="division"
              className="block text-gray-700 font-bold mb-2"
            >
              Division
            </label>
            <select
              id="division"
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
            >
              <option value="cardiology">Cardiology</option>
              <option value="option2">Option2</option>

            </select>
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="role"
              className="block text-gray-700 font-bold mb-2"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
            >
              <option value="medicalDirector">Medical Director</option>
              <option value="personnelDirector">Personnel Director</option>
              <option value="nurse">Nurse</option>
              <option value="specialistStaff">Specialist Staff</option>
              <option value="chargeNurse">Charge Nurse</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
        </div>

        <h1 className="text-lg font-bold my-4 border-b-2 border-black pb-4">
          Employee Acknowledge
        </h1>
        <div className="flex mb-4 self-center">
          {/* Date of Registration */}
          <div className="w-1/3 mr-2">
            <label
              htmlFor="empFirstName"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="empFirstName"
              name="empFirstName"
              value={formData.empFirstName}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 `}
            />
            
          </div>
          <div className="w-1/3 mx-2">
            <label
              htmlFor="empLastName"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="empLastName"
              name="empLastName"
              value={formData.empLastName}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 `}
            />
            
          </div>
          <div className="w-1/4 ml-2">
            <label
              htmlFor="registrationDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Registration Date
            </label>
            <input
              type="date"
              id="registrationDate"
              name="registrationDate"
              value={formData.registrationDate}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 `}
            />
            
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterEmployeeForm;
