import React, { FC } from "react";
import Card, { BasicCardProps } from "./basicCard";

interface CardGroupProps {
  cards: BasicCardProps[];
}

const CardGroup: FC<CardGroupProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-full lg:w-1/3 xl:w-1/4 px-4 mb-4"
        >
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardGroup;