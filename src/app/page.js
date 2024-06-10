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

  const handleDrop = (item, monitor) => {
    const dropPosition = monitor.getClientOffset();
    const position = {
      x: dropPosition.x - 250, // Adjust if needed based on sidebar width
      y: dropPosition.y - 50, // Adjust if needed based on navbar height or other offset
    };

    const defaultContent = {
      image: "",
      text: "Default Text",
      divider: "<hr class='hrTag'>",
      space: "<div style='height:20px;'></div>",
      button: "<button class='styled-button'>Button</button>",
      socialShare: `
        <div class="socialShare">
          <a href="#" class="social-icon"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></a>
          <a href="#" class="social-icon"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></a>
          <a href="#" class="social-icon"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg></a>
        </div>
      `,
      socialFollow: `
        <div class="socialShare">
          <a href="#" class="social-icon"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></a>
          <a href="#" class="social-icon"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></a>
          <a href="#" class="social-icon"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg></a>
        </div>
      `,
    };

    setElements((prevElements) => [
      ...prevElements,
      {
        id: uuidv4(),
        type: item.type,
        content: defaultContent[item.type],
        position,
      },
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
    const container = exportRef.current;
    const clonedContainer = container.cloneNode(true);
    const items = clonedContainer.querySelectorAll(".resizable-draggable-item");

    items.forEach((item) => {
      const computedStyle = window.getComputedStyle(item);
      item.style.position = "absolute";
      item.style.left = computedStyle.left;
      item.style.top = computedStyle.top;
      item.style.width = computedStyle.width;
      item.style.height = computedStyle.height;
    });

    const htmlContent = clonedContainer.innerHTML;
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
        .styled-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .styled-button:hover {
          background-color: #0056b3;
        }
        .social-icon {
          margin: 0 5px;
          text-decoration: none;
          color: #000;
        }
        .social-icon i {
          font-size: 20px;
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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
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
            <DraggableItem type="text">📝 Drag Text</DraggableItem>
            <DraggableItem type="divider">─ Drag Divider</DraggableItem>
            <DraggableItem type="space">⬜ Drag Space</DraggableItem>
            <DraggableItem type="button">🔘 Drag Button</DraggableItem>
            <DraggableItem type="socialShare">
              🔗 Drag Social Share
            </DraggableItem>
            <DraggableItem type="socialFollow">
              👥 Drag Social Follow
            </DraggableItem>
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
            accept={[
              "image",
              "text",
              "divider",
              "space",
              "button",
              "socialShare",
              "socialFollow",
            ]}
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
                  position={el.position}
                  onChange={handleChange}
                  onImageUpload={handleImageUpload}
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
