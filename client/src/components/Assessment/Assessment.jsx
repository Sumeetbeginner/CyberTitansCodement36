import React, { useState, useEffect } from 'react';
import stringSimilarity from 'string-similarity';

const ResultPopup = ({ results }) => (
  <div className="popup">
    <h2>Assessment Results</h2>
    <ul>
      {Object.entries(results).map(([question, isCorrect]) => (
        <li key={question}>
          {question}: {isCorrect ? 'Correct' : 'Wrong'}
        </li>
      ))}
    </ul>
  </div>
);

const Assessment = () => {
  const [questions, setQuestions] = useState({});
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const assessmentData = JSON.parse(localStorage.getItem('assessmentData'));
    setQuestions(assessmentData);
  }, []);

  const handleChange = (question, answer) => {
    setUserAnswers({
      ...userAnswers,
      [question]: answer
    });
  };

  const handleSubmit = () => {
    const updatedResults = {};
    for (const [question, userAnswer] of Object.entries(userAnswers)) {
      const correctAnswer = questions[question];
      const isCorrect = checkAnswer(userAnswer, correctAnswer);
      updatedResults[question] = isCorrect;
    }
    setResults(updatedResults);
    setShowResults(true);
  };

  const checkAnswer = (userAnswer, correctAnswer) => {
    const similarity = stringSimilarity.compareTwoStrings(userAnswer.trim().toLowerCase(), correctAnswer.trim().toLowerCase());
    return similarity > 0.5;
  };

  return (
    <div className='bgDivQ'>
      <h1 className='h1Q'>Assessment</h1>
      <form>
        {Object.entries(questions).map(([question, correctAnswer]) => (
          <div className='questionD' key={question}>
            <p className='questionC'>{question}</p>
            <input className='ansInp'
              type="text"
              value={userAnswers[question] || ''}
              onChange={(e) => handleChange(question, e.target.value)}
            />
          </div>
        ))}
        <button className='resBtn'  type="button" onClick={handleSubmit}>
          See Results
        </button>
      </form>
      {showResults && <ResultPopup results={results} />}
    </div>
  );
};

export default Assessment;
