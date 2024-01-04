'use client'
import React, { useState } from 'react';
import BedManagement from '../bedManagement';


const bedManagementController = ({onSubmit=null}) => {
  // Sample
      const [rooms, setRooms] = useState([
    {
      id: 1,
      name: 'U1203',
      beds: [
        { id: 0, name: '101', isUsed: false },
        { id: 1, name: '102', isUsed: true },
        { id: 2, name: '103', isUsed: false },
        { id: 3, name: '104', isUsed: false },
        { id: 4, name: '105', isUsed: true },
        { id: 5, name: '106', isUsed: false },
        { id: 6, name: '107', isUsed: false },
        { id: 7, name: '108', isUsed: false },
      ],
    },
    {
      id: 2,
      name: 'U0192',
      beds: [
        { id: 0, name: '201',isUsed: false },
        { id: 1, name: '202',isUsed: true },
      ],
    },
  ]);



  const handleAddRoom = (name: string) => {
    const newRoom = {
      id: rooms.length + 1,
      name,
      beds: [],
    };
    console.log(`add room #${newRoom.id} - ${name} `)
    setRooms([...rooms, newRoom]);
  };

  const handleAddBed = ( name: string, roomId: number) => {
    console.log(name, roomId)
    const updateRooms = rooms.map((room) =>
      room.id === roomId ? { ...room, beds: [...room.beds, { id: room.beds.length + 1, name, isUsed:false }] } : room
    );
    setRooms(updateRooms);
  };
  return (
    <>
    
     <BedManagement rooms={rooms} onAddRoom={handleAddRoom} onAddBed={handleAddBed} onSubmit={onSubmit} />
    </>
  );
};

export default bedManagementController