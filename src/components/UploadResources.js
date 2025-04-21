import React, { useState } from 'react';
import axios from 'axios';
import './UploadResources.css';

const UploadResources = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${baseURL}/api/files/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage(response.data.message || 'File uploaded successfully!');
      setFile(null);
    } catch (error) {
      console.error('Upload error:', error);
      setMessage(error.response?.data?.message || 'Something went wrong during file upload.');
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2 className="upload-title">📁 Upload Learning Resource</h2>
        <form className="upload-form" onSubmit={handleUpload}>
          <label className="custom-file-input">
            <input type="file" onChange={handleFileChange} />
            {file ? file.name : 'Choose File'}
          </label>
          <button type="submit" className="upload-btn">Upload</button>
        </form>
        {message && <p className="upload-message">{message}</p>}
      </div>
    </div>
  );
};

export default UploadResources;
