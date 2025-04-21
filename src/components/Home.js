import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // We will create a new CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Main Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Learning Platform</h1>
          <p className="hero-subtitle">
            Access educational resources, materials, and quizzes to help you grow!
          </p>
          <Link to="/materials" className="cta-button">
            Explore Learning Materials
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-card">
          <h2 className="info-card-title">Upload Resources</h2>
          <p className="info-card-description">
            Share your learning resources with others.
          </p>
          <Link to="/upload" className="info-card-button">
            Upload Now
          </Link>
        </div>

        <div className="info-card">
          <h2 className="info-card-title">Take a Quiz</h2>
          <p className="info-card-description">
            Test your knowledge and improve your skills.
          </p>
          <Link to="/quiz" className="info-card-button">
            Start Quiz
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
