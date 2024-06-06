// components/ResizableDraggableItem.js
import React from "react";
import { Rnd } from "react-rnd";

const ResizableDraggableItem = ({
  id,
  type,
  content,
  onChange,
  onImageUpload,
}) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      onImageUpload(id, reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    document.getElementById(`file-input-${id}`).click();
  };

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
      bounds="parent"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        cursor: "move",
        background: "#fff",
      }}
    >
      {type === "image" && (
        <div onClick={triggerFileUpload} style={{ cursor: "pointer" }}>
          {content ? (
            <img
              src={content}
              alt="Uploaded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          ) : (
            <p>Click or drag to upload an image</p>
          )}
          <input
            type="file"
            id={`file-input-${id}`}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>
      )}
      {type === "title" && (
        <input
          type="text"
          placeholder="Enter title"
          value={content}
          onChange={(e) => onChange(id, e.target.value)}
          style={{ width: "100%", padding: "10px" }}
        />
      )}
      {type === "paragraph" && (
        <textarea
          placeholder="Enter paragraph"
          value={content}
          onChange={(e) => onChange(id, e.target.value)}
          style={{ width: "100%", padding: "10px", height: "100px" }}
        />
      )}
    </Rnd>
  );
};

export default ResizableDraggableItem;
