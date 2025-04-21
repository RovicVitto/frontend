import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UploadResources from './components/UploadResources';
import LearningMaterials from './components/LearningMaterials';
import QuizSection from './components/QuizSection';
import QuizSubject from './components/QuizSubject'; // ✅ import new component
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [randomQuestions, setRandomQuestions] = useState([]);

  // ✅ Handles selection from QuizSection
  const handleCategorySelect = (category, questions) => {
    setSelectedCategory(category);
    setRandomQuestions(questions);
  };

  // ✅ Go back to QuizSection
  const handleBackToCategory = () => {
    setSelectedCategory(null);
    setRandomQuestions([]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadResources />} />
        <Route path="/materials" element={<LearningMaterials />} />
        <Route
          path="/quiz"
          element={
            !selectedCategory ? (
              <QuizSection onSelectCategory={handleCategorySelect} />
            ) : (
              <QuizSubject
                category={selectedCategory}
                questions={randomQuestions}
                onBack={handleBackToCategory} // Optional "back" button support
              />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
