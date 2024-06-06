// components/ImageUpload.js
import React, { useState } from "react";

const ImageUpload = ({ id, onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
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
    <div
      onClick={triggerFileUpload}
      style={{ cursor: "pointer", border: "1px dashed #ccc", padding: "10px" }}
    >
      {image ? (
        <img
          src={image}
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
  );
};

export default ImageUpload;
