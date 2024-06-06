// components/ResizableDraggableItem.js
import React, { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";

const ResizableDraggableItem = ({
  id,
  type,
  content,
  onChange,
  onImageUpload,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = content;
    }
  }, [content]);

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

  const handleBlur = () => {
    setIsEditing(false);
    if (contentRef.current) {
      onChange(id, contentRef.current.innerHTML);
    }
  };

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: type === "paragraph" ? 200 : 50,
      }}
      bounds="parent"
      style={{
        border: "none",
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
        <div
          ref={contentRef}
          contentEditable={isEditing}
          onClick={() => setIsEditing(true)}
          onBlur={handleBlur}
          style={{
            cursor: "text",
            padding: "10px",
            fontWeight: "bold",
            minHeight: "30px",
            outline: "none",
            border: isEditing ? "1px solid #ccc" : "none",
          }}
        >
          {content}
        </div>
      )}
      {type === "paragraph" && (
        <div
          ref={contentRef}
          contentEditable={isEditing}
          onClick={() => setIsEditing(true)}
          onBlur={handleBlur}
          style={{
            cursor: "text",
            padding: "10px",
            minHeight: "50px",
            outline: "none",
            border: isEditing ? "1px solid #ccc" : "none",
          }}
        >
          {content}
        </div>
      )}
    </Rnd>
  );
};

export default ResizableDraggableItem;
