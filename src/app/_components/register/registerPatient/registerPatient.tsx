"use client";
import { useState } from "react";
// import { postPatientRegister } from "@/app/_lib/api";
import { ChevronDown, ChevronUp } from "../../icons/icons";
import Link from "next/link";
import Alert from "../../alerts/basicAlert";

const PatientRegister = () => {
  const [error, setError] = useState<string | null>(null);
  const [showIncorrectModal, setIncorrectShowModal] = useState(false);

  // Patient Info
  const [insuranceNum, setInsuranceNum] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [martialStatus, setMartialStatus] = useState("single");
  const [famDoctor, setFamilyDoctor] = useState("");

  const [nokName, setNokName] = useState("");
  const [nokRelation, setNokRelation] = useState("");
  const [nokStreet, setNokStreet] = useState("");
  const [nokCity, setNokCity] = useState("");
  const [nokCountry, setNokCountry] = useState("");
  const [nokPostalCode, setNokPostalCode] = useState("");
  const [nokPhoneNum, setNokPhoneNum] = useState("");

  const validateFields = () => {
    let isValid = true;

    if (!insuranceNum.trim()) isValid = false;
    if (!firstName.trim()) isValid = false;
    if (!lastName.trim()) isValid = false;
    if (!street.trim()) isValid = false;
    if (!city.trim()) isValid = false;
    if (!country.trim()) isValid = false;
    if (!postalCode.trim()) isValid = false;
    if (!phoneNum.trim()) isValid = false;
    if (!dateOfBirth.trim()) isValid = false;
    if (!gender.trim()) isValid = false;
    if (!martialStatus.trim()) isValid = false;
    if (!famDoctor.trim()) isValid = false;
    if (!nokName.trim()) isValid = false;
    if (!nokRelation.trim()) isValid = false;
    if (!nokStreet.trim()) isValid = false;
    if (!nokCity.trim()) isValid = false;
    if (!nokCountry.trim()) isValid = false;
    if (!nokPostalCode.trim()) isValid = false;
    if (!nokPhoneNum.trim()) isValid = false;

    // if (!isValid) {
    //   setError("Please fill in all fields11.");
    // } else {
    //   setError(null);
    // }

    return isValid;
  };

  const closeModal = () => {
    setIncorrectShowModal(false);
    setError(null);
  };

const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateFields()) {
      return;
    }

    const data = {
      insuranceNum: insuranceNum,
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      country: country,
      postalCode: postalCode,
      phoneNum: phoneNum,
      dateOfBirth: dateOfBirth,
      gender: gender,
      martialStatus: martialStatus,
      famDoctor: famDoctor,
      nokName: nokName,
      nokRelation: nokRelation,
      nokStreet: nokStreet,
      nokCity: nokCity,
      nokCountry: nokCountry,
      nokPostalCode: nokPostalCode,
      nokPhoneNum: nokPhoneNum,
    };

    console.log(data);

    // setIncorrectShowModal(true); 
    // postPatientRegister(data).then((response: Response) => {
    //   console.log(response);
    // });
  }

  const [openStep, setOpenStep] = useState<string | null>("null");
  const toggleAccordion = (step: string) => {
    setOpenStep((prevStep) => (prevStep === step ? null : step));
  };

  return (
    <>
      {/* {showIncorrectModal && (
        <Alert
          message="Incorrect information!"
          // type="error"
          type={"error"}
          className="fixed top-2"
        />
      )} */}
      <div className="  flex items-center justify-center rounded-xl px-8 py-2">
        <div className="container mx-auto border-4 rounded-2xl p-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Register Patient</h1>
            <Link
              href={"/"}
              className="bg-red-500 text-white px-4 py-2 rounded-full mt-4"
            >
              Cancel
            </Link>
          </div>
          <form className=" mx-auto p-5 border-2">
            {error && <p className="text-red-500 text-lg mb-4">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-lg">Insurance Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  placeholder="###-###-###"
                  value={insuranceNum}
                  onChange={(e) => setInsuranceNum(e.target.value)}
                />
              </div>

              <div className="col-span-2 my-4 border-b">
                <button
                type="button"
                  onClick={() => toggleAccordion("patientInfo")}
                  className="w-full p-4 shadow-lg text-left flex items-center justify-between rounded-lg text-2xl font-semibold mb-2"
                >
                  Patient Information
                  {!(openStep === "patientInfo") ? (
                    <ChevronDown className="hidden sm:block h-6 w-6 text-black" />
                  ) : (
                    <ChevronUp className="hidden sm:block h-6 w-6 text-black" />
                  )}
                </button>
                {openStep === "patientInfo" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded"
                          placeholder="First/Given name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded"
                          placeholder="Last/Family name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block mb-1">Phone Number</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded"
                        placeholder="###-###-####"
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block mb-1">Date of Birth</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border rounded"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block mb-1">Gender</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block mb-1">Martial Status</label>
                      <select
                        className="w-full px-4 py-2 border rounded"
                        value={martialStatus}
                        onChange={(e) => setMartialStatus(e.target.value)}
                      >
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="separated">Separated</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                        <option value="livingCommonLaw">
                          Living common-law
                        </option>
                      </select>
                    </div>
                    <h2 className="text-xl font-bold my-4">Address</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">Street</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded"
                          placeholder="Street"
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block mb-1">City</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded"
                          placeholder="City"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block mb-1">Country</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded"
                          placeholder="Country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block mb-1">Postal Code</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded"
                          placeholder="e.g., A1B 2C3"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="col-span-2 my-4 border-b">
                <button
                type="button"
                  onClick={() => toggleAccordion("patientFamDoctor")}
                  className="w-full p-4 shadow-lg text-left flex items-center justify-between rounded-lg text-2xl font-semibold mb-2"
                >
                  Family Doctor
                  {!(openStep === "patientFamDoctor") ? (
                    <ChevronDown className="hidden sm:block h-6 w-6 text-black" />
                  ) : (
                    <ChevronUp className="hidden sm:block h-6 w-6 text-black" />
                  )}
                </button>
                {openStep === "patientFamDoctor" && (
                  <>
                    <div>
                      <label className="block mb-1">Family Doctor</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Name"
                        value={famDoctor}
                        onChange={(e) => setFamilyDoctor(e.target.value)}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="col-span-2 my-4 border-b mb-6">
                <button
                type="button"
                  onClick={() => toggleAccordion("nextOfKin")}
                  className="w-full p-4 shadow-lg text-left flex items-center justify-between rounded-lg text-2xl font-semibold mb-2"
                >
                  Next of Kin
                  {!(openStep === "nextOfKin") ? (
                    <ChevronDown className="hidden sm:block h-6 w-6 text-black" />
                  ) : (
                    <ChevronUp className="hidden sm:block h-6 w-6 text-black" />
                  )}
                </button>
                {openStep === "nextOfKin" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded"
                          placeholder="Name"
                          value={nokName}
                          onChange={(e) => setNokName(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block mb-1">Relation</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded"
                          placeholder="e.g., child, parent, sibling, etc."
                          value={nokRelation}
                          onChange={(e) => setNokRelation(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="my-4 border-t border-b">
                      <h3 className="text-md font-semibold mb-2">Address</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1">Street</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Street"
                            value={nokStreet}
                            onChange={(e) => setNokStreet(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block mb-1">City</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded"
                            placeholder="City"
                            value={nokCity}
                            onChange={(e) => setNokCity(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block mb-1">Country</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Country"
                            value={nokCountry}
                            onChange={(e) => setNokCountry(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block mb-1">Postal Code</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded"
                            placeholder="e.g., A1B 2C3"
                            value={nokPostalCode}
                            onChange={(e) => setNokPostalCode(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block mb-1">Phone Number</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded"
                        placeholder="###-###-####"
                        value={nokPhoneNum}
                        onChange={(e) => setNokPhoneNum(e.target.value)}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-4 text-center">
              <button
                type="submit"
                onClick={onSubmit}
                className="bg-special text-white px-6 py-3 rounded-full hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PatientRegister;
