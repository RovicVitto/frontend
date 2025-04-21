import React, { useState, useEffect } from 'react';
import './QuizSubject.css';

const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const QuizSubject = ({ category, questions = [], onBack }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);

  // Only shuffle the questions when the component first mounts
  useEffect(() => {
    if (questions && questions.length > 0) {
      const shuffled = shuffleArray(questions); // shuffle the questions only once
      setShuffledQuestions(shuffled);
      setCurrentIndex(0); // Reset current question to 0
      setScore(0); // Reset score to 0
      setSelectedAnswer(''); // Reset the selected answer
      setFeedback(''); // Reset feedback
      setQuizFinished(false); // Quiz isn't finished yet
    } else {
      console.error("No questions available");
    }
  }, [questions]); // Only re-run on changes to `questions` prop

  const handleSubmit = () => {
    if (!selectedAnswer) return; // If no answer is selected, don't proceed

    const currentQuestion = shuffledQuestions[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    if (isCorrect) {
      setScore(prev => prev + 1); // Increment score if correct
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
      setQuizFinished(true); // End quiz immediately if answer is incorrect
      return;
    }

    // Move to next question only if answer is correct
    const nextIndex = currentIndex + 1;
    if (nextIndex < shuffledQuestions.length) {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(''); // Reset selected answer for the next question
      setFeedback(''); // Reset feedback for the next question
    } else {
      setQuizFinished(true); // End quiz when all questions are answered
    }
  };

  if (quizFinished) {
    return (
      <div className="quiz-page">
        <h2>{category} Quiz</h2>
        <p>Quiz finished!</p>
        <p>Your Score: {score} / {shuffledQuestions.length}</p>
        <button className="back-btn" onClick={onBack}>← Back to Categories</button>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];
  if (!currentQuestion) return null; // If there is no current question, return nothing

  return (
    <div className="quiz-page">
      <div className="quiz-info-bar">
        <div className="score-display">Score: {score}</div>
      </div>

      <h2 className="quiz-title">{category} Quiz</h2>

      <div className="quiz-question">
        <p><strong>{currentQuestion.question}</strong></p>
        <div className="quiz-options">
          {currentQuestion.options && currentQuestion.options.map((option, i) => (
            <label key={i}>
              <input
                type="radio"
                name="quiz"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        {feedback && <p className="feedback">{feedback}</p>}
      </div>

      <button className="back-btn" onClick={onBack}>← Back to Categories</button>
    </div>
  );
};

export default QuizSubject;
