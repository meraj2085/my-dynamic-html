// components/ResizableDraggableItem.js
import React, { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";

const ResizableDraggableItem = ({
  id,
  type,
  content,
  position,
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

  const triggerFileUpload = () => {
    document.getElementById(`file-input-${id}`).click();
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (contentRef.current) {
      onChange(id, contentRef.current.innerHTML);
    }
  };

  const getStyle = () => {
    if (type === "text") {
      return {
        cursor: "text",
        fontWeight: "normal",
        minHeight: "50px",
        minWidth: "200px",
        outline: "none",
        border: "1px solid #ccc",
      };
    }
    if (type === "image") {
      return { width: "100%" };
    }
    if (type === "divider") {
      return { width: "100%" };
    }
    if (type === "space") {
      return { width: "100%", height: "20px" };
    }
    if (type === "button") {
      return { cursor: "pointer" };
    }
    if (type === "socialShare" || type === "socialFollow") {
      return { cursor: "pointer", display: "flex", gap: "10px" };
    }
  };

  return (
    <Rnd
      default={{
        x: position.x,
        y: position.y,
        height: type === "text" ? 50 : 50,
        width: type === "image" ? 300 : 200,
      }}
      enableResizing={{
        bottomRight: true,
        bottomLeft: true,
        topRight: true,
        topLeft: true,
        right: true,
        left: true,
        bottom: true,
        top: true,
      }}
      style={{ border: "none", cursor: "move", background: "#fff" }}
      resizeHandleStyles={{
        bottomRight: {
          cursor: "nwse-resize",
          width: "10px",
          height: "10px",
          background: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      {(type === "text" ||
        type === "image" ||
        type === "divider" ||
        type === "space" ||
        type === "button" ||
        type === "socialShare" ||
        type === "socialFollow") && (
        <div
          ref={contentRef}
          contentEditable={isEditing}
          onClick={() => setIsEditing(true)}
          onBlur={handleBlur}
          style={getStyle()}
        >
          {type === "divider" || type === "space" ? (
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          ) : (
            content
          )}
        </div>
      )}
    </Rnd>
  );
};

export default ResizableDraggableItem;
