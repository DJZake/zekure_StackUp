import React, { useState } from 'react';
import './index.css'; // Import the CSS file
import Home from './home';
function Quiz() {
  const [quizData, setQuizData] = useState({
    questions: [
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
      },
      {
        question: 'What is the capital of England?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'London',
      },
      // ... more questions ...
    ],
    currentQuestion: 0,
    score: 0,
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption === quizData.questions[quizData.currentQuestion].correctAnswer) {
      setQuizData({
        ...quizData,
        score: quizData.score + 1,
      });
    }
    setQuizData({
      ...quizData,
      currentQuestion: quizData.currentQuestion + 1
    });
    setSelectedOption(null);
  };

  const handlePreviousClick = () => {
    setQuizData({
      ...quizData,
      currentQuestion: quizData.currentQuestion - 1
    });
    setSelectedOption(null);
  };

  const handleSubmitClick = () => {
    if (selectedOption === quizData.questions[quizData.currentQuestion].correctAnswer) {
      setQuizData({
        ...quizData,
        score: quizData.score + 1,
      });
    }
    setIsSubmitted(true);
  };

  const currentQuestion = quizData.questions[quizData.currentQuestion];

  if (!quizData || !currentQuestion) {
    return <p>Loading...</p>;
  }

  if (isSubmitted) {
    return <p>Your final score is {quizData.score} out of {quizData.questions.length}</p>;
  }

  return (
    <>
    <Home/>
    <div className='quiz-box'>
      <h1>{currentQuestion.question}</h1>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index} className={`option-button ${selectedOption === option ? 'selected' : ''}`} onClick={() => handleAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      {quizData.currentQuestion > 0 && (
        <button onClick={handlePreviousClick}>Previous</button>
        )}
      {quizData.currentQuestion === quizData.questions.length - 1 ? (
        <button onClick={handleSubmitClick}>Submit</button>
        ) : (
        <button onClick={handleNextClick}>Next</button>
      )}
    </div>

        </>
  );    

}


export default Quiz;