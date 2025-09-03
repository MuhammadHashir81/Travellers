import React, { useState } from "react";
import { Upload, X } from "lucide-react"; // icons

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    setImage(null);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {!image ? (
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
        >
          <Upload className="w-10 h-10 text-gray-400 mb-2" />
          <span className="text-gray-600 text-sm">Click or drag to upload image</span>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      ) : (
        <div className="relative">
          <img
            src={image}
            alt="Uploaded Preview"
            className="w-full h-48 object-cover rounded-2xl shadow-md"
          />
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
