// components/DraggableItem.js
import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, children }) => {
  const [, dragRef] = useDrag({
    type,
    item: { type },
  });

  return (
    <div
      className="px-2 py-1 font-semibold rounded-md bg-gray-800 text-gray-100"
      ref={dragRef}
      style={{ cursor: "move" }}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
