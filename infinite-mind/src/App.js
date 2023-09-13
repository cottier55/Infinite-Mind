import React, { useState } from 'react';
import Category from './components/Category';
import Question from './components/Question';
import categoriesData from './data/categories.json';

function App() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStartCategory = (categoryIndex) => {
    setCurrentCategoryIndex(categoryIndex);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Avanzar a la siguiente pregunta o finalizar el juego cuando corresponda
    if (currentQuestionIndex < categoriesData.categories[currentCategoryIndex].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Completaste todas las preguntas en la categoría, muestra el resultado o Game Over
      alert(`¡Juego terminado!\nPuntaje: ${score}`);
      setCurrentCategoryIndex(null);
    }
  };

  return (
    <div className="App">
      <h1>Trivia Game</h1>
      {!currentCategoryIndex ? (
        // Mostrar categorías al principio
        <div className="categories">
          {categoriesData.categories.map((category, index) => (
            <Category
              key={index}
              name={category.name}
              image={category.image}
              onStartCategory={() => handleStartCategory(index)}
            />
          ))}
        </div>
      ) : (
        // Mostrar preguntas cuando el usuario selecciona una categoría
        <Question
          question={categoriesData.categories[currentCategoryIndex].questions[currentQuestionIndex].question}
          options={categoriesData.categories[currentCategoryIndex].questions[currentQuestionIndex].options}
          correctAnswer={categoriesData.categories[currentCategoryIndex].questions[currentQuestionIndex].correctAnswer}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;

