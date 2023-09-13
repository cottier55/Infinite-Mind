import React, { useState } from 'react';

const Question = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    onAnswer(option === correctAnswer);
  };

  return (
    <div className="question">
      <h3>{question}</h3>
      <ul>
        {options.map((option) => (
          <li
            key={option}
            className={selectedOption === option ? 'selected' : ''}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

