"use client";

import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "../components/DraggableItem";
import DroppableArea from "../components/DroppableArea";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [elements, setElements] = useState([]);

  const handleDrop = (item) => {
    setElements((prevElements) => [
      ...prevElements,
      { id: uuidv4(), type: item.type, content: "" },
    ]);
  };

  const handleChange = (id, content) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, content } : el))
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Dynamic HTML Page</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <DraggableItem type="image">📷 Drag Image</DraggableItem>
          <DraggableItem type="title">🖋️ Drag Title</DraggableItem>
          <DraggableItem type="paragraph">📄 Drag Paragraph</DraggableItem>
        </div>
        <DroppableArea
          accept={["image", "title", "paragraph"]}
          onDrop={handleDrop}
        >
          {elements.map((el) => (
            <div key={el.id} style={{ margin: "10px 0" }}>
              {el.type === "image" && (
                <input
                  type="text"
                  placeholder="Enter image URL"
                  value={el.content}
                  onChange={(e) => handleChange(el.id, e.target.value)}
                />
              )}
              {el.type === "title" && (
                <input
                  type="text"
                  placeholder="Enter title"
                  value={el.content}
                  onChange={(e) => handleChange(el.id, e.target.value)}
                />
              )}
              {el.type === "paragraph" && (
                <textarea
                  placeholder="Enter paragraph"
                  value={el.content}
                  onChange={(e) => handleChange(el.id, e.target.value)}
                />
              )}
            </div>
          ))}
        </DroppableArea>
      </div>
    </DndProvider>
  );
};

export default Home;
