
import React, { useState } from 'react';

const CodingGame = () => {
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      description: 'Fix the syntax error in the code',
      code: `function addNumbers(a, b {
  return a + b;
}

const result = addNumbers(2, 3);
console.log('The result is: ' + result);`,
      answer: `function addNumbers(a, b) {
  return a + b;
}

const result = addNumbers(2, 3);
console.log('The result is: ' + result);`,
    },
    {
      id: 2,
      description: 'Complete the function to multiply two numbers',
      code: `function multiplyNumbers(a, b) {
  // Your code here
}`,
      answer: `function multiplyNumbers(a, b) {
  return a * b;
}`,
    },
    {
      id: 3,
      description: 'Fix the logical error in the code',
      code: `function isEven(number) {
  if (number % 2 = 0) {
    return true;
  } else {
    return false;
  }
}

const result = isEven(6);
console.log('Is 6 even? ' + result);`,
      answer: `function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const result = isEven(6);
console.log('Is 6 even? ' + result);`,
    },
    // Add more challenges as needed
  ]);

  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);
  const [userCode, setUserCode] = useState(currentChallenge.code); // Set initial userCode with the challenge code
  const [isCodeCorrect, setIsCodeCorrect] = useState(null);

  const handleInputChange = (event) => {
    setUserCode(event.target.value);
  };

  const handleSubmit = () => {
    // Replace newlines and spaces to make comparison easier
    const formattedUserCode = userCode.replace(/\s/g, '');
    const formattedCorrectCode = currentChallenge.answer.replace(/\s/g, '');

    if (formattedUserCode === formattedCorrectCode) {
      setIsCodeCorrect(true);
    } else {
      setIsCodeCorrect(false);
    }
  };

  const handleNextChallenge = () => {
    const nextChallengeIndex = challenges.findIndex((challenge) => challenge.id === currentChallenge.id) + 1;
    if (nextChallengeIndex < challenges.length) {
      setCurrentChallenge(challenges[nextChallengeIndex]);
      setUserCode(challenges[nextChallengeIndex].code); // Set userCode with the new challenge code
      setIsCodeCorrect(null);
    } else {
      // All challenges completed
      alert('Congratulations! You completed all challenges.');
    }
  };

  return (
    <div className='codingPg'>
      <h2 >Coding Challenge</h2>
      <p>{currentChallenge.description}</p>
      <textarea value={userCode} onChange={handleInputChange} rows={10} cols={50} />
      <button onClick={handleSubmit}>Submit</button>
      {isCodeCorrect && <p style={{ color: 'green' }}
      >Congratulations! Code is correct.</p>}
      {isCodeCorrect === false && (
        <p style={{ color: 'red' }}>Sorry, the code is not correct. Try again!</p>
      )}
      
      {isCodeCorrect && (
        <button className='nextBtn' onClick={handleNextChallenge}>Next Challenge</button>
      )}
    </div>
  );
};

export default CodingGame;
