// components/ImageDropZone.tsx

import React, { useState } from "react";

interface ImageDropZoneProps {
  placeholderText?: string;
  onImageUpload: (imageData: File | null) => void;
}

const ImageDropZone: React.FC<ImageDropZoneProps> = ({
  placeholderText = "Drag & Drop Image Here or Click to Add",
  onImageUpload,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    loadImage(file);
  };

  const handleRemove = () => {
    setImageSrc(null);
    onImageUpload(null); // Notify parent component about image removal
  };

  const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      loadImage(file);
    }
    onImageUpload(file); // Notify parent component about image upload
  };

  const loadImage = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImageSrc(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div
      className="border-2 border-dashed border-gray-400 p-4 text-center cursor-pointer"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {imageSrc ? (
        <div>
          <picture>
            <img
              className="max-w-full max-h-48 mb-4"
              src={imageSrc}
              alt="Dropped Image"
            />
          </picture>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleRemove}
          >
            Remove Image
          </button>
        </div>
      ) : (
        <>
          <label htmlFor="file-input" className="cursor-pointer">
            <p>{placeholderText}</p>
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAdd}
          />
        </>
      )}
    </div>
  );
};

export default ImageDropZone;
