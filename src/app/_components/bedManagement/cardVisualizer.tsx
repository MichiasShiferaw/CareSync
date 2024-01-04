import React from 'react'

const getBackgroundColor = ({bed,selectedBedId})=>{
  if (bed.isUsed){
    return ('border-gray-200 border-1 bg-white hover:bg-gray-400')

  } else if (!bed.isUsed && selectedBedId ===bed.id){
    return ('border-blue-200 border-2 bg-blue-300 hover:bg-blue-400')
  }
  else{
    return("border-green-200 border-1 bg-green-300 hover:bg-green-400")

  }
}

const cardVisualizer = ({room,onCardClick, selectedBedId}) => {



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
      {room.beds.map((bed) => (
        <div
          key={bed.id}
          className={`
            p-4 border cursor-pointer rounded-md ${getBackgroundColor({bed,selectedBedId})}`}
          onClick={() => onCardClick(bed.id)}
        >
          <p className="text-lg font-semibold">{bed.name}</p>
          <p className="text-sm">{!bed.isUsed ? 'Available' : null}</p>

          {!bed.isUsed && selectedBedId === bed.id && (
            <p className="text-black font-semibold p-2 rounded-lg underline">
              Assigned
            </p>
          )}

          {bed.isUsed && selectedBedId === bed.id && (
            <div className="text-black font-semibold p-2 rounded-lg underline">
              Patient details
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default cardVisualizer