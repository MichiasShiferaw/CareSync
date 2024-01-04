"use client";
import { ChevronDown, ChevronUp } from "@/app/_components/icons/icons";
import React, { Fragment, useState } from "react";
import TableVisualizer from "./tableVisualizer";
import CardVisualizer from "./cardVisualizer";
import DirectoryTree from "./directoryTree";

const BedManagement = ({
  rooms,
  onAddRoom,
  onAddBed,onSubmit=null
}) => {
  const [selectedSection, setSelectedSection] = useState<string>("+");
  const [newBedNumber, setNewBedNumber] = useState("");
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [newRoomName, setNewRoomName] = useState("");
  const [currentView, setCurrentView] = useState<string>("table");
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const [newRoomVisible, setNewRoomVisible] = useState(false);
  const [newBedVisible, setNewBedVisible] = useState(false);
  const [selectedBedId, setSelectedBedId] = useState<number | null>(null);

  const handleAddRoom = () => {
    if (newRoomName.trim() !== "") {
      onAddRoom(newRoomName);
      setNewRoomName("");
    }
  };


  const handleSelectedClick = (bedId) => {
    setSelectedBedId(bedId);
    console.log(`Bed ${bedId} assigned`)
  };

  const handleAddBed = () => {
    if (selectedRoomId && newBedNumber.trim() !== "") {
      console.log(selectedRoomId)
      onAddBed(newBedNumber, selectedRoomId);
      setNewBedNumber("");
    }
  };

  const [openRoomId, setOpenRoomId] = useState<number | null>(null);

  const toggleAccordion = (roomId: number) => {
    setOpenRoomId((prevId) => (prevId === roomId ? null : roomId));
  };

  const toggleViewMode = () => {
    setCurrentView((prevMode) =>
      prevMode === "table" ? "card" : "table"
    );
  };
  const handleRoomSelect = (roomId: number) => {
    setSelectedRoomId(roomId);
  };

    const handleSubmit = () => {
    if (selectedBedId !== null && openRoomId !== null) {
      onSubmit({ selectedBedId, openRoomId });
    }
  };

  return (
    <div className="relative">
      <h1 className="text-3xl font-bold my-2">Bed Management</h1>
      <div className="container mx-auto p-4 flex flex-col md:flex-row">
        <div className=" w-full md:w-1/6 mr-2 hidden md:block">
          <DirectoryTree rooms={rooms}/>

        </div>

        <div className="mx-auto w-full md:w-5/6 mb-4 md:ml-4">
          <div className="text-right">

            {/* Dropdown to select add bed/room */}
            <div className="mb-4">
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="p-2 border rounded-md bg-slate-300"
              >
                <option value="none" className="border-2">&#43;</option>
                <option value="addRoom">Add Room</option>
                <option value="addBed">Add Bed</option>
              </select>
            </div>

            {/* Add Room Section */}
            {selectedSection === "addRoom" && (
              <div className="mb-4">
                <label className="mr-2">Add Room:</label>
                <input
                  type="text"
                  value={newRoomName}
                  onChange={(e) => setNewRoomName(e.target.value)}
                  className="border rounded p-2"
                />
                
                <button
                  onClick={() => {
                    handleAddRoom();
                    setNewRoomVisible(false);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                >
                  Add Room
                </button>
              </div>
            )}

            {/* Add Bed Section */}
            {selectedSection === "addBed" && (
              <div className="mb-4">
                <label htmlFor="roomSelect">Select Room:</label>
                <select
                  id="roomSelect"
                  className="p-2 border rounded-md"
                  onChange={(e) => handleRoomSelect(Number(e.target.value))}
                >
                  <option value="" disabled selected>
                    Select a Room
                  </option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="New Bed Name"
                  value={newBedNumber}
                  onChange={(e) => setNewBedNumber(e.target.value)}
                  className="p-2 border rounded-md"
                />
                <button
                  onClick={() => {
                    handleAddBed();
                    setNewBedVisible(false);
                  }}
                  className="bg-special2 text-white px-4 py-2 rounded-md"
                >
                  Add Bed
                </button>
              </div>
            )}
          </div>

          {rooms.map((room) => (
            <div key={room.id} className="mb-4">
              <button
                onClick={() => toggleAccordion(room.id)}
                className="w-full shadow-xl hover:shadow-2xl hover:shadow-black shadow-gray-400 py-6 my-2 px-2 text-left flex items-center justify-between rounded-lg text-2xl font-semibold"
              >
                Room {room.id} - {room.name}
                {!(openRoomId === room.id) ? (
                  <ChevronDown className="hidden sm:block h-6 w-6 text-black" />
                ) : (
                  <ChevronUp className="hidden sm:block h-6 w-6 text-black" />
                )}
              </button>
              {openRoomId === room.id && (
                <div>
                  <button
                    onClick={toggleViewMode}
                    className="float-right mt-2 mb-4 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-sm hover:shadow-lg"
                  >
                    {currentView === "table"
                      ? "Switch to Card View"
                      : "Switch to Table View"}
                  </button>
                  {currentView === "table" ? (
                    <TableVisualizer room={room} 
                                    onRowClick={handleSelectedClick}
              selectedBedId={selectedBedId}/>
                  ) : (
                      <CardVisualizer room={room} 
                                    onCardClick={handleSelectedClick}
              selectedBedId={selectedBedId}/>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div  className="text-right">
                  {onSubmit&&(<button className="bg-purple-500 text-white px-4 py-2 rounded mr-4" onClick={handleSubmit }>
        Submit
      </button>)}
      </div>
    </div>
  );
};

export default BedManagement;
