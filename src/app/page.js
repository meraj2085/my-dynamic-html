"use client";
import React, { useState, useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "../components/DraggableItem";
import DroppableArea from "../components/DroppableArea";
import ResizableDraggableItem from "../components/ResizableDraggableItem";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [elements, setElements] = useState([]);
  const exportRef = useRef(null);
  const droppableAreaRef = useRef(null);

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

  const handleImageUpload = (id, image) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, content: image } : el))
    );
  };

  const exportHTML = () => {
    const htmlContent = exportRef.current.innerHTML;
    const styles = `
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        div[contenteditable="true"] {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          outline: none;
        }
        .resizable-draggable-item {
          padding: 10px;
          cursor: move;
          background: #fff;
          border: none;
        }
        .resizable-draggable-item img {
          max-width: 100%;
          height: auto;
        }
      </style>
    `;
    const completeHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Exported HTML</title>
          ${styles}
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;
    const blob = new Blob([completeHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "export.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <div
          className="sidebar p-4 bg-gray-100"
          style={{ width: "250px", minHeight: "100vh" }}
        >
          <div className="flex flex-col gap-5">
            <DraggableItem type="image">📷 Drag Image</DraggableItem>
            <DraggableItem type="title">🖋️ Drag Title</DraggableItem>
            <DraggableItem type="paragraph">📄 Drag Paragraph</DraggableItem>
          </div>
          <button
            onClick={exportHTML}
            className="px-2 py-1 mt-4 font-semibold rounded-md bg-gray-800 text-gray-100"
          >
            📤 Export as HTML
          </button>
        </div>
        <div className="flex-grow p-4">
          <DroppableArea
            ref={droppableAreaRef}
            accept={["image", "title", "paragraph"]}
            onDrop={handleDrop}
          >
            <div
              className="min-h-screen"
              ref={exportRef}
              style={{
                position: "relative",
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              {elements.map((el) => (
                <ResizableDraggableItem
                  key={el.id}
                  id={el.id}
                  type={el.type}
                  content={el.content}
                  onChange={handleChange}
                  onImageUpload={handleImageUpload}
                  bounds={droppableAreaRef}
                />
              ))}
            </div>
          </DroppableArea>
        </div>
      </div>
    </DndProvider>
  );
};

export default Home;
