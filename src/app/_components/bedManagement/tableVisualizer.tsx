import React, { FC } from "react";
import { IdeaIcon } from "@/app/_components/icons/icons";

interface Bed {
  id: number;
  name: string;
  isUsed: boolean;
}

interface Room {
  beds: Bed[];
}

interface TableVisualizerProps {
  room: Room;
  onRowClick: (id: number) => void;
  selectedBedId: number;
}

const getBackgroundColor = ({ bed, selectedBedId }: { bed: Bed; selectedBedId: number }): string => {
  if (bed.isUsed) {
    return "border-gray-200 border-1 bg-white hover:bg-gray-400 text-red-700";
  } else if (!bed.isUsed && selectedBedId === bed.id) {
    return "border-blue-100 border-2 bg-blue-200 hover:bg-blue-300 text-green-800";
  } else {
    return "border-green-100 border-1 bg-green-200 hover:bg-green-300 text-green-500";
  }
};

const TableVisualizer: FC<TableVisualizerProps> = ({ room, onRowClick, selectedBedId }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-800 mt-2">
      <thead>
        <tr>
          <th className="border border-gray-800 p-2"></th>
          <th className="border border-gray-800 p-2">Status</th>
          <th className="border border-gray-800 p-2">Bed ID</th>
          <th className="border border-gray-800 p-2">Bed Name</th>
        </tr>
      </thead>
      <tbody>
        {room &&room.beds.map((bed) => (
          <tr
            key={bed.id}
            onClick={() => onRowClick(bed.id)}
            className={`
            p-4 border cursor-pointer rounded-md ${getBackgroundColor({
              bed,
              selectedBedId,
            })}`}
          >
            <td
              className={` border-gray-800 p-2 flex items-center justify-center`}
            >
              {" "}
              {bed.isUsed && <IdeaIcon className={undefined} />}
            </td>
            <td className={`border border-gray-800 p-2`}>
              {!bed.isUsed && selectedBedId === bed.id && (
                <span className="ml-2 underline text-black">Assigned</span>
              )}
              <span className="ml-2">{bed.isUsed ? "Used" : "Available"}</span>
            </td>
            <td className="border border-gray-800 p-2">{bed.id}</td>
            <td className="border border-gray-800 p-2">{bed.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableVisualizer;