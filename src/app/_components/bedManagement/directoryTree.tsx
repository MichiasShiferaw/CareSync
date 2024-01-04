import React from "react";

const DirectoryTree = ({ rooms }) => {
  return (
    <>
      <h2 className="md:text-xl font-bold mb-2 text-sm">Directory Tree</h2>
      <ul className="rounded-xl px-4">
        {rooms?.map((room) => (
          <li key={room.id}>
            <span className="font-bold text-lg text-special2">Room #{room.name}</span>
            <ul>
              {room.beds?.map((bed) => (
                <li key={bed.id} className=" ml-4 font-medium text-md">
                  <span className="text-special2">&bull;</span> bed {bed.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DirectoryTree;
