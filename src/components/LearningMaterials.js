import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LearningMaterials.css';

const LearningMaterials = () => {
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [message, setMessage] = useState('');

  const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/files`);
        setFiles(response.data);
        setFilteredFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
        setMessage('Error fetching files.');
      }
    };

    fetchFiles();
  }, [baseURL]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const filtered = files.filter(file =>
      file.originalname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredFiles(filtered);
  };

  const getViewURL = (file) => {
    const ext = file.originalname.split('.').pop().toLowerCase();
    if (['pdf', 'jpg', 'jpeg', 'png'].includes(ext)) {
      return `${baseURL}/api/files/view/${file.filename}`;
    } else {
      return `${baseURL}/api/files/download/${file.filename}`;
    }
  };

  return (
    <div className="learning-materials-container">
      <h2 className="learning-materials-title">Learning Materials</h2>

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for files..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="file-grid">
        {filteredFiles.length === 0 ? (
          <p className="no-files-message">No files found.</p>
        ) : (
          filteredFiles.map((file) => (
            <div className="file-card" key={file.filename}>
              <div className="file-info">
                <p className="file-name">{file.originalname}</p>
                <p className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <div className="file-actions">
                <a
                  href={getViewURL(file)}
                  className="view-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href={`${baseURL}/api/files/download/${file.filename}`}
                  className="download-btn"
                  download
                >
                  Download
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LearningMaterials;