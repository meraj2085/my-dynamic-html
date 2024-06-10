// components/DraggableItem.js
import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, children }) => {
  const [, dragRef] = useDrag({
    type,
    item: { type },
  });

  return type !== "image" ? (
    <div
      className="px-2 py-1 font-semibold rounded-md text-gray-800 border border-gray-800"
      ref={dragRef}
      style={{ cursor: "move" }}
    >
      {children}
    </div>
  ) : (
    <div className="" ref={dragRef} style={{ cursor: "move" }}>
      {children}
    </div>
  );
};

export default DraggableItem;
