import React from "react";

const basicCard = ({
  imageUrl,
  title,
  subsection,
  bodyPart1,
  bodyPart2,
  bodyPart3=null,
  bodyPart4=null,
}) => {

  console.log(imageUrl)
  return (
    <div className="max-w-md mx-auto overflow-hidden shadow-lg rounded-lg bg-gray-300">
      <img className="w-full object-cover border-b-2 border-black" src={imageUrl} alt={title} />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <h2 className="text-lg font-medium mb-2">{subsection}</h2>

        <div>
          <p className="text-gray-700">{bodyPart1}</p>
          <p className="text-gray-700 mt-2">{bodyPart2}</p>
          {/* Optional */}
          {bodyPart3&&(
            <p className="text-gray-700 mt-2">{bodyPart3}</p>
          )}
          {bodyPart4&&(
            <p className="text-gray-700 mt-2">{bodyPart4}</p>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default basicCard;
