"use client";
import { useState } from 'react';

const ImageUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          onUpload(data.imageUrl);
        } else {
          console.error('Image upload failed');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
        <input type="file" name="file" required onChange={handleFileChange}/>
        <button onClick={handleUpload} className="ring-2 px-3 py-2 bg-blue-800 text-white rounded-md">
          upload
        </button>
      
    </main>
  );
};

export default ImageUpload;
