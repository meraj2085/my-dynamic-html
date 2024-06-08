// components/DroppableArea.js
import React from "react";
import { useDrop } from "react-dnd";

const DroppableArea = ({ accept, onDrop, children }) => {
  const [, dropRef] = useDrop({
    accept,
    drop: (item) => onDrop(item),
  });

  return (
    <div
      ref={dropRef}
      style={{ minHeight: "200px", border: "1px solid gray" }}
      className="m-4"
    >
      {children}
    </div>
  );
};

export default DroppableArea;
