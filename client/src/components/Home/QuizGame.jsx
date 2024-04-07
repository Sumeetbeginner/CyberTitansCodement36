
import React, { useState, useEffect } from 'react';
import './quiz.css';

const QuizGame = () => {
  const [selectedCategory, setSelectedCategory] = useState('a1');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60); 


  const categories = {
    a1: 'DSA',
    a2: 'OOPS',
    b1: 'Web Development',
    b2: 'Machine Learning',
    c1: 'Fluid Mechanics',
    c2: 'Thermodynamics',
    d1: 'Computer Networks',
    d2: 'Microprocessors',
  };
  
  const questions = {
    a1: [
      {
        id: 1,
        question: 'What does DSA stand for?',
        options: ['Data Structures and Algorithms', 'Digital Signal Analysis', 'Dynamic System Analysis', 'Data System Architecture'],
        correctAnswer: 'Data Structures and Algorithms',
      },
      {
        id: 2,
        question: 'What is the time complexity of quicksort?',
        options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
        correctAnswer: 'O(n log n)',
      },
      {
        id: 3,
        question: 'Which data structure is used for breadth-first traversal of a graph?',
        options: ['Queue', 'Stack', 'Linked List', 'Tree'],
        correctAnswer: 'Queue',
      },
      {
        id: 4,
        question: 'What is the purpose of hash functions in hash tables?',
        options: ['To generate random numbers', 'To convert data into a fixed-size string of characters', 'To create backups of data', 'To find square roots'],
        correctAnswer: 'To convert data into a fixed-size string of characters',
      },
      {
        id: 5,
        question: 'Which algorithm is used for finding the shortest path in a weighted graph?',
        options: ['Breadth-First Search', 'Depth-First Search', 'Dijkstra\'s Algorithm', 'Prim\'s Algorithm'],
        correctAnswer: 'Dijkstra\'s Algorithm',
      },
    ],
    // Add more questions for DSA if needed
  
    a2: [
      {
        id: 1,
        question: 'What is OOP?',
        options: ['Object-Oriented Programming', 'Object-Oriented Process', 'Ordered Output Programming', 'Object-Oriented Protocol'],
        correctAnswer: 'Object-Oriented Programming',
      },
      {
        id: 2,
        question: 'What is encapsulation in OOP?',
        options: ['Hiding the implementation details and exposing the interface', 'Exposing the implementation details and hiding the interface', 'Encrypting the data', 'Compiling the code'],
        correctAnswer: 'Hiding the implementation details and exposing the interface',
      },
      {
        id: 3,
        question: 'What is inheritance?',
        options: ['A process where a subclass inherits properties and behaviors from a superclass', 'A process where a superclass inherits properties and behaviors from a subclass', 'A process of creating objects', 'A process of polymorphism'],
        correctAnswer: 'A process where a subclass inherits properties and behaviors from a superclass',
      },
      {
        id: 4,
        question: 'What is polymorphism?',
        options: ['The ability of a class to have multiple methods with the same name', 'The ability of a class to have only one method', 'The ability to create multiple instances of a class', 'The ability to hide the implementation details'],
        correctAnswer: 'The ability of a class to have multiple methods with the same name',
      },
      {
        id: 5,
        question: 'What is abstraction in OOP?',
        options: ['Hiding the complex implementation and showing only the essential features of an object', 'Exposing the complex implementation and hiding the essential features', 'The process of creating classes', 'The process of creating objects'],
        correctAnswer: 'Hiding the complex implementation and showing only the essential features of an object',
      },
    ],
    b1: [
        {
          id: 1,
          question: 'What is HTML?',
          options: ['Hyper Text Markup Language', 'High-level Text Manipulation Language', 'Hyper Transferable Text Language', 'High-level Transferable Text Language'],
          correctAnswer: 'Hyper Text Markup Language',
        },
        {
          id: 2,
          question: 'Which of the following is a CSS framework?',
          options: ['React', 'Angular', 'Bootstrap', 'Vue.js'],
          correctAnswer: 'Bootstrap',
        },
        {
          id: 3,
          question: 'What does the acronym "API" stand for in the context of web development?',
          options: ['Application Programming Interface', 'Advanced Programming Interface', 'Application Process Integration', 'Advanced Process Integration'],
          correctAnswer: 'Application Programming Interface',
        },
        {
          id: 4,
          question: 'Which programming language is commonly used for front-end web development?',
          options: ['Python', 'Java', 'Ruby', 'JavaScript'],
          correctAnswer: 'JavaScript',
        },
        {
          id: 5,
          question: 'What is the purpose of the "alt" attribute in an HTML image tag?',
          options: ['To define alternative text for the image', 'To specify the alignment of the image', 'To set the image source', 'To define the size of the image'],
          correctAnswer: 'To define alternative text for the image',
        },
      ],
      // Add more questions for Web Development (b1) if needed
    
      b2: [
        {
          id: 1,
          question: 'What is machine learning?',
          options: ['A programming language', 'A type of computer', 'A type of algorithm', 'A subset of artificial intelligence'],
          correctAnswer: 'A subset of artificial intelligence',
        },
        {
          id: 2,
          question: 'Which of the following is a supervised learning algorithm?',
          options: ['K-means clustering', 'Decision tree', 'K-nearest neighbors', 'Apriori algorithm'],
          correctAnswer: 'Decision tree',
        },
        {
          id: 3,
          question: 'What is the objective of reinforcement learning?',
          options: ['To classify data', 'To make predictions', 'To learn from a reward system', 'To perform clustering'],
          correctAnswer: 'To learn from a reward system',
        },
        {
          id: 4,
          question: 'What does SVM stand for in machine learning?',
          options: ['Support Vector Machine', 'Simple Vector Machine', 'Superior Vector Machine', 'Structured Vector Machine'],
          correctAnswer: 'Support Vector Machine',
        },
        {
          id: 5,
          question: 'In neural networks, what is the purpose of the activation function?',
          options: ['To define the learning rate', 'To add more layers to the network', 'To introduce non-linearity', 'To perform regression'],
          correctAnswer: 'To introduce non-linearity',
        },
      ],
      // Add more questions for Machine Learning (b2) if needed
      c1: [
        {
          id: 1,
          question: 'What is the study of fluid mechanics concerned with?',
          options: ['Properties and behavior of fluids', 'Properties of solids', 'Behavior of gases only', 'Properties of energy'],
          correctAnswer: 'Properties and behavior of fluids',
        },
        {
          id: 2,
          question: 'Which equation represents the continuity equation in fluid mechanics?',
          options: ['Bernoulli\'s equation', 'Euler\'s equation', 'Navier-Stokes equation', 'Equation of continuity'],
          correctAnswer: 'Equation of continuity',
        },
        {
          id: 3,
          question: 'What is the unit of dynamic viscosity in the SI system?',
          options: ['N/m²', 'Pa·s', 'kg/m³', 'm²/s'],
          correctAnswer: 'Pa·s',
        },
        {
          id: 4,
          question: 'What does Bernoulli\'s principle describe in fluid mechanics?',
          options: ['Conservation of mass', 'Conservation of energy', 'Conservation of momentum', 'Conservation of density'],
          correctAnswer: 'Conservation of energy',
        },
        {
          id: 5,
          question: 'In fluid dynamics, what is the Reynolds number used to predict?',
          options: ['Turbulence', 'Viscosity', 'Density', 'Pressure'],
          correctAnswer: 'Turbulence',
        },
      ],
      // Add more questions for Fluid Mechanics (c1) if needed
    
      c2: [
        {
          id: 1,
          question: 'What is thermodynamics?',
          options: ['The study of heat transfer', 'The study of motion', 'The study of temperature', 'The study of energy and its transformations'],
          correctAnswer: 'The study of energy and its transformations',
        },
        {
          id: 2,
          question: 'Which law of thermodynamics states that energy cannot be created or destroyed, only converted from one form to another?',
          options: ['Zeroth law', 'First law', 'Second law', 'Third law'],
          correctAnswer: 'First law',
        },
        {
          id: 3,
          question: 'What is entropy in thermodynamics?',
          options: ['Heat content of a system', 'Measure of disorder or randomness', 'Internal energy of a system', 'Temperature of a system'],
          correctAnswer: 'Measure of disorder or randomness',
        },
        {
          id: 4,
          question: 'What is the Carnot cycle used for in thermodynamics?',
          options: ['To determine the efficiency of heat engines', 'To measure temperature', 'To calculate pressure', 'To study fluid flow'],
          correctAnswer: 'To determine the efficiency of heat engines',
        },
        {
          id: 5,
          question: 'What is the unit of specific heat capacity in the SI system?',
          options: ['Joule (J)', 'Watt (W)', 'Kelvin (K)', 'Joule per kilogram per Kelvin (J/(kg·K))'],
          correctAnswer: 'Joule per kilogram per Kelvin (J/(kg·K))',
        },
      ],
      // Add more questions for Thermodynamics (c2) if needed
      d1: [
        {
          id: 1,
          question: 'What is a MAC address used for in computer networks?',
          options: ['To identify a device on a network', 'To determine the physical location of a device', 'To secure network communication', 'To allocate IP addresses'],
          correctAnswer: 'To identify a device on a network',
        },
        {
          id: 2,
          question: 'What is the purpose of ARP (Address Resolution Protocol) in computer networks?',
          options: ['To convert IP addresses to MAC addresses', 'To route data between networks', 'To secure network connections', 'To manage network resources'],
          correctAnswer: 'To convert IP addresses to MAC addresses',
        },
        {
          id: 3,
          question: 'Which network topology connects each device to a central hub or switch?',
          options: ['Bus topology', 'Ring topology', 'Star topology', 'Mesh topology'],
          correctAnswer: 'Star topology',
        },
        {
          id: 4,
          question: 'What does DNS (Domain Name System) do in computer networks?',
          options: ['Translates domain names to IP addresses', 'Encrypts network traffic', 'Routes data between networks', 'Manages network security'],
          correctAnswer: 'Translates domain names to IP addresses',
        },
        {
          id: 5,
          question: 'Which layer of the OSI model is responsible for end-to-end communication and data flow control?',
          options: ['Physical layer', 'Data link layer', 'Transport layer', 'Network layer'],
          correctAnswer: 'Transport layer',
        },
      ],
      // Add more questions for Computer Networks (d1) if needed
    
      d2: [
        {
          id: 1,
          question: 'What is the role of a microprocessor in a computer system?',
          options: ['Manages memory and storage', 'Performs arithmetic and logic operations', 'Handles input and output devices', 'Controls the display'],
          correctAnswer: 'Performs arithmetic and logic operations',
        },
        {
          id: 2,
          question: 'Which architecture is commonly used in modern microprocessors?',
          options: ['CISC (Complex Instruction Set Computing)', 'RISC (Reduced Instruction Set Computing)', 'VLIW (Very Long Instruction Word)', 'EPIC (Explicitly Parallel Instruction Computing)'],
          correctAnswer: 'RISC (Reduced Instruction Set Computing)',
        },
        {
          id: 3,
          question: 'What is pipelining in microprocessor design?',
          options: ['A technique to enhance instruction throughput', 'A method of cooling the microprocessor', 'A form of parallel computing', 'A way to store instructions in cache'],
          correctAnswer: 'A technique to enhance instruction throughput',
        },
        {
          id: 4,
          question: 'Which component of a microprocessor is responsible for storing temporary data?',
          options: ['ALU (Arithmetic Logic Unit)', 'Control unit', 'Register file', 'Cache memory'],
          correctAnswer: 'Register file',
        },
        {
          id: 5,
          question: 'What is the clock speed of a microprocessor?',
          options: ['The rate at which instructions are executed', 'The speed of data transfer between components', 'The frequency of the system clock', 'The power consumption of the microprocessor'],
          correctAnswer: 'The frequency of the system clock',
        },
      ],
    
  };
  
 const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(60); // Reset the timer when changing categories
  };

  const handleOptionClick = (selectedOption) => {
    const currentQuestion = questions[selectedCategory][currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < questions[selectedCategory].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(60); // Reset the timer for the next question
    } else {
      // Display score or navigate to the next category if available
      // You can add your logic here
      alert(`Quiz Completed!\nYour Score: ${score}`);
    }
  };

  // Use useEffect to update the timer every second
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Cleanup the interval on component unmount or when changing categories
    return () => clearInterval(countdown);
  }, [timer, selectedCategory]);

  // Use useEffect to check if the timer reaches 0
  useEffect(() => {
    if (timer === 0) {
      // Handle the case when time runs out
      // For example, move to the next question or display correct answer
      // You can add your logic here
      alert('Time ran out! Moving to the next question.');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(60); // Reset the timer for the next question
    }
  }, [timer, currentQuestionIndex]);

  return (
    <div id='flexQuiz'>
      <div id="quizPlayground">
        {/* Render questions, options, and timer based on the selected category and current question index */}
        {questions[selectedCategory][currentQuestionIndex] && (
          <div>
            <h4 className='questionTitle'>{questions[selectedCategory][currentQuestionIndex].question}</h4>
            <p className='timerCircle'>{timer} </p>
            <ul>
              {questions[selectedCategory][currentQuestionIndex].options.map((option, index) => (
                <p className='bcp' key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </p>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div id="quizTopics">
        <h3 className='centerText'>Quiz Topics</h3>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>
              {categories[category]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QuizGame;
