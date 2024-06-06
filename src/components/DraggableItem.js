// components/DraggableItem.js
import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, children }) => {
  const [, dragRef] = useDrag({
    type,
    item: { type },
  });

  return (
    <div ref={dragRef} style={{ cursor: "move" }}>
      {children}
    </div>
  );
};

export default DraggableItem;
