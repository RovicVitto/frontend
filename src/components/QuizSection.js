import React from 'react';
import './QuizSection.css'; // CSS for styling
import quizData from '../data/questions'; // ✅ Import question data

const categories = ['STEM', 'ABM', 'HUMSS', 'TVL-ICT', 'TVL-FBS/COOKERY'];

// ✅ Utility function to get random questions
const getRandomQuestions = (category, count = 60) => {
  const questions = quizData[category] || [];  // Default to empty array if no questions for the category
  const shuffled = [...questions].sort(() => 0.5 - Math.random()); // Shuffle questions
  return shuffled.slice(0, count);  // Return the top 'count' random questions
};

const QuizSection = ({ onSelectCategory }) => {

  // ✅ Handle category click and pass questions to the parent
  const handleCategoryClick = (category) => {
    const randomQuestions = getRandomQuestions(category); // Get random questions for the selected category
    onSelectCategory(category, randomQuestions); // Pass category and questions to the parent
  };

  return (
    <div className="quiz-container">
      <h2>Select a Quiz Category</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="category-card"
            onClick={() => handleCategoryClick(category)} // Trigger onClick for category selection
          >
            {category}  {/* Display category name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSection;
