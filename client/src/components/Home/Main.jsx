


import React, { useState, useEffect } from 'react'
import course1 from '../../assets/images/courses/course1.jpg';
import course2 from '../../assets/images/courses/course2.jpg';
import course3 from '../../assets/images/courses/course3.jpg';
import course4 from '../../assets/images/courses/course4.jpg';
import course5 from '../../assets/images/courses/course5.jpg';
import course6 from '../../assets/images/courses/course6.jpg';
import course7 from '../../assets/images/courses/course7.jpg';
import course8 from '../../assets/images/courses/course8.jpg';
import course9 from '../../assets/images/courses/course9.jpg';
import course10 from '../../assets/images/courses/course10.jpg';

import { Link } from 'react-router-dom';
import game1 from '../../assets/images/games/game1.webp'
import game2 from '../../assets/images/games/game2.png'
import game3 from '../../assets/images/games/game3.avif'
import { useNavigate } from 'react-router-dom'
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css'; // Icons

const Main = () => {

    const [user, setUser] = useState(null)
    const history = useNavigate();


    const [searchQuery, setSearchQuery] = useState('')


    let userDataI = JSON.parse(JSON.parse(localStorage.getItem('userData')).userInterest)
    console.log(userDataI);

    const [preference, setPreference] = useState(userDataI);

    console.log(preference);
    const [type, setType] = useState('courses')

    const handleInterestChange = (e) => {
        setPreference(e.value);
    };

    const changeToGames = () => {
        setType('games');
        document.getElementById('selGames').style.backgroundColor = "#3a3fc5";
        document.getElementById('selCourse').style.backgroundColor = "#14152a";
    };

    const changeToCourses = () => {
        setType('courses');
        document.getElementById('selCourse').style.backgroundColor = "#3a3fc5";
        document.getElementById('selGames').style.backgroundColor = "#14152a";
    };


    const courses = [
        {
            id: 1,
            name: 'Data Structures and Algorithms',
            description: 'From arrays and linked lists to dynamic programming, learn key concepts and techniques essential for efficient problem-solving in programming. Perfect for beginners and intermediate learners.',
            image: course1,
            branch: 'Computer Science',

            pathname: '/learnboard/check',

            url: 'https://youtu.be/oz9cEqFynHU?si=j8pT_0AtCxZpI6o3',

            content: `
            Being proficient in data structures and algorithms is akin to possessing the holy grail of computer science skills. It's the equivalent of being a virtuoso in the realm of coding. People assume you're a prodigy, shower you with lucrative job offers from esteemed companies, and you even become a hot commodity on internet forums. But let me tell you, the journey from being a novice to mastering algorithmic wizardry is anything but easy.

            It's a journey fraught with frustration and plagued by impostor syndrome. I've personally experienced the struggle. However, now I've garnered offers from top-tier companies, which essentially qualifies me to perform miracles like curing cancer. So, in an effort to give back and aid even the most bewildered programmers, consider this video as my contribution. After all, the tech industry can be likened to a malignant tumor, and I aim to provide the remedy.
            
            The cornerstone of learning anything new lies in your genuine desire to acquire knowledge. This is a lesson I learned the hard way, particularly when I floundered in my attempts to grasp Spanish. Therefore, before delving into the intricacies of data structures and algorithms, take a moment to introspect. Ask yourself, why do you want to embark on this journey? Don't pursue it merely for the allure of landing a job at Google. Instead, embrace it because mastering these concepts fundamentally alters your thought process.
            
            Data structures and algorithms revolve around the art of solving problems with utmost efficiency. A subpar programmer tackles problems in a haphazard manner, whereas a truly abysmal one is clueless about the inefficiencies in their approach. Let's address this head-on.
            
            How do we gauge the efficiency of an algorithm? Let's consider a scenario where we write a function to iterate through a list of numbers and sum them up. Each addition operation counts as one operation. Therefore, running this function on a list with 10 numbers requires 10 operations, and on a list with 20 numbers, it necessitates 20 operations.
            
            Now, imagine another function that merely returns the first number in a list. Regardless of the list's size, this function always completes in one operation. Clearly, these two algorithms exhibit different time complexities, denoting the relationship between input size and operations. We express these time complexities using Big O notation.
            
            Let's delve into common complexities: constant, linear, quadratic, logarithmic, n log n, exponential, and factorial. The first algorithm runs in O(n), signifying a linear relationship between operations and input size. Conversely, the second algorithm operates independently of input size, thus achieving constant time complexity.
            
            Consider a scenario where we must execute a function with an input size of 5 versus 50. Initially, the disparity might seem negligible. However, as the input size escalates, the gap becomes glaringly evident. For instance, if n were 10,000, an algorithm with a time complexity of O(log n) would execute in a mere 14 operations, whereas an algorithm with a factorial time complexity would unleash computational havoc, potentially incinerating your computer.
            
            In Big O notation, we disregard constants. Therefore, O(10 * n) and O(n/10) are both equivalent to O(n). This simplification underscores the linear growth pattern. Moreover, Big O notation extends to space complexity, reflecting the amount of space an algorithm consumes as n burgeons.
            
            Unless you spend your days sequestered, fervently deciphering algorithms, chances are you've forgotten the nuances of logarithms. Essentially, logarithms serve as the inverse to exponential functions. Consider a scenario where you're rifling through a dictionary to locate a word. The archaic method involves laboriously sifting through every word, akin to an O(n) operation. However, humans employ a more nuanced approach—binary search.
            
            In binary search, we repeatedly halve the search window, swiftly zeroing in on the desired word. This logarithmic time complexity facilitates rapid searches, rendering tasks like finding a word in a vast dictionary a matter of seconds. Such efficiency underscores the prowess of logarithmic operations.
            
            In computer science, sorting algorithms play a pivotal role. Let's dissect two fundamental sorting techniques: selection sort and merge sort. Selection sort entails sequentially scanning a list to pinpoint the minimum element, gradually assembling the sorted collection. This quadratic time complexity warrants a more efficient alternative—merge sort.
            
            Merge sort leverages a divide-and-conquer strategy, partitioning the collection into sub-collections until individual elements can be sorted effortlessly. Subsequently, it merges these sorted sub-collections, culminating in a fully sorted collection. This logarithmic time complexity epitomizes efficiency, making merge sort the de facto choice for sorting vast datasets.
            
            Perhaps the quintessential data structure is the array—an indexable, contiguous chunk of memory. Arrays boast fixed sizes, precluding the insertion of additional elements once capacity is reached. Conversely, linked lists offer flexibility, accommodating dynamic resizing. Linked lists comprise nodes, each containing data and a pointer to the subsequent node.
            
            Traversing a linked list mirrors navigating a labyrinth of hyperlinks—a cascade of directional cues leading to the desired destination. Dubbed as a fundamental data structure, linked lists facilitate rapid insertion and deletion operations, albeit at the expense of direct index-based access.
            
            Binary trees introduce a hierarchical structure to data storage, with nodes branching into left and right child nodes. Binary search trees adhere to a strict ordering criterion, facilitating efficient search operations. Leveraging binary search trees, we navigate through the data landscape, swiftly homing in on the desired element.
            
            Heaps, often likened to priority queues, feature a root element with the highest or lowest priority. Heap operations, such as insertion and deletion, maintain this priority hierarchy, ensuring expedient access to critical data. With its logarithmic time complexity, heap manipulation emerges as a quintessential operation in data management.
            
            Graphs, a versatile abstraction, model complex relationships between entities. Comprising vertices and edges, graphs lend themselves to diverse applications, from social network analysis to route optimization. Graph algorithms, such
            
             as breadth-first search and Dijkstra's algorithm, underpin pivotal tasks, ranging from friend recommendations to navigation services.
            
            Hash maps epitomize efficiency, offering constant-time retrieval of key-value pairs. Hash functions facilitate seamless indexing, transforming keys into unique hash codes. Collisions, a common hurdle, are circumvented through linked lists or alternative collision resolution strategies. Hash maps, with their unparalleled efficiency, represent a cornerstone of modern computing.
            
            In essence, mastering data structures and algorithms unlocks a realm of computational possibilities. Armed with this knowledge, you possess the acumen to tackle complex problems with elegance and efficiency. So, whether you opt for structured courses like Joma Class or delve into free resources like MIT lectures, embark on this journey with zeal and determination. After all, the pursuit of knowledge knows no bounds.
            `,
            info: `
            "Data Structures and Algorithms is fundamental tools in computer programming and essential for organizing data effectively and solving problems efficiently.",
            "Understanding DSA is crucial for programmers as it enables them to write better, faster, and more optimized code.",
            "By learning DSA, programmers gain a toolkit of strategies to tackle various programming challenges, such as sorting data quickly or finding the most efficient route in a map application.",
            "Moreover, proficiency in DSA opens up numerous opportunities in the tech industry, as companies often seek programmers with strong DSA skills to develop robust software solutions and address complex problems effectively.",
            "Common DSA concepts encompass arrays, linked lists, sorting algorithms, and searching algorithms, which provide a foundation for problem-solving and algorithmic thinking.",
            "Learning DSA can be achieved through various resources like online courses, books, tutorials, and practice problems, allowing programmers to enhance their skills and excel in the field of computer science."    
            `

        },
        {
            id: 2,
            name: 'Rigid Body and Equilibrium',
            description: 'Dive deep into the fundamentals of rigid body dynamics in our comprehensive course. Explore essential principles governing the behavior of rigid bodies in motion, from understanding their fundamental properties to analyzing complex interactions.',
            image: course2,
            branch: 'Mechanical',
            pathname: '/learnboard',
            url: ' https://www.youtube.com/watch?v=QCerFSLpkrI&list=PLd-0K-8ZyM0VjXkFKsQjJMFKh7_bgRJhN&index=11',
            content: `
            The primary distinction between particle and rigid body equilibrium, concerning statics analysis, lies in our consideration of rotational aspects. A particle, defined simplistically for statics purposes, lacks the capacity for rotation because all forces act directly on the particle itself. Contrastingly, in the case of a rigid body, even if the forces on it yield a static state (meaning no acceleration), their location may induce rotation or angular acceleration, rendering the body not in equilibrium.

            To assess this rotational aspect, beyond ensuring that the sum of forces in all three orthogonal directions is zero, we scrutinize the rotation of the body. This scrutiny manifests practically as the sum of moments, akin to how we sum forces in a particular direction (like x, y, or z). When calculating the moment about a point, we consider two key concepts: the line of action of a force (an imaginary line parallel to the force vector) and the perpendicular distance from the point of rotation to this line of action. The moment is then the product of this distance and the force magnitude.
            
            In terms of vectors, we seek the cross product of the force vector and the radius of rotation. The direction of a moment is deemed positive if it causes counterclockwise rotation and negative if it induces clockwise rotation, as per the right-hand rule convention. Thus, when summing moments, we add up the moments generated by each force vector, acknowledging that some may be negative due to their rotation direction.
            
            External couples and reaction moments, in addition to forces, must also be factored into the sum of moments. Couples arise when two opposing forces of equal magnitude but differing lines of action induce rotation without resultant force. Reaction moments, on the other hand, stem from physical constraints on the body, such as walls, preventing rotation.
            
            The equations used to determine reaction forces or moments can be summarized as a sum of forces (two for 2D problems, three for 3D) and at least one sum of moments about a point. In many cases, starting with a sum of moments simplifies the analysis, aiding in solving for unknown variables.
            
            Understanding the various types of supports—pins, rollers, and fixed supports—is crucial. These supports dictate the reaction loads that exist or don't exist. For example, pins and rollers allow rotation, whereas fixed supports prevent translation and induce reaction moments.
            
            In practical applications, analyzing the perpendicular distances to slanted force vectors can be complex, so breaking down forces into their horizontal and vertical components simplifies calculations. By applying these principles, one can effectively analyze rigid body equilibrium and solve statics problems.            
            `,
            info: `
            "The primary distinction between particle and rigid body equilibrium, concerning statics analysis, lies in our consideration of rotational aspects.",
            "A particle, defined simplistically for statics purposes, lacks the capacity for rotation because all forces act directly on the particle itself.",
            "Contrastingly, in the case of a rigid body, even if the forces on it yield a static state (meaning no acceleration), their location may induce rotation or angular acceleration, rendering the body not in equilibrium.",
            "To assess this rotational aspect, beyond ensuring that the sum of forces in all three orthogonal directions is zero, we scrutinize the rotation of the body.",
            "This scrutiny manifests practically as the sum of moments, akin to how we sum forces in a particular direction (like x, y, or z).",
            "When calculating the moment about a point, we consider two key concepts: the line of action of a force (an imaginary line parallel to the force vector) and the perpendicular distance from the point of rotation to this line of action.",
            "The moment is then the product of this distance and the force magnitude.",
            "In terms of vectors, we seek the cross product of the force vector and the radius of rotation.",
            "The direction of a moment is deemed positive if it causes counterclockwise rotation and negative if it induces clockwise rotation, as per the right-hand rule convention.",
            "Thus, when summing moments, we add up the moments generated by each force vector, acknowledging that some may be negative due to their rotation direction.",
            "External couples and reaction moments, in addition to forces, must also be factored into the sum of moments.",
            "Couples arise when two opposing forces of equal magnitude but differing lines of action induce rotation without resultant force.",
            "Reaction moments, on the other hand, stem from physical constraints on the body, such as walls, preventing rotation.",
            "The equations used to determine reaction forces or moments can be summarized as a sum of forces (two for 2D problems, three for 3D) and at least one sum of moments about a point.",
            "In many cases, starting with a sum of moments simplifies the analysis, aiding in solving for unknown variables.",
            "Understanding the various types of supports—pins, rollers, and fixed supports—is crucial.",
            "These supports dictate the reaction loads that exist or don't exist. For example, pins and rollers allow rotation, whereas fixed supports prevent translation and induce reaction moments.",
            "In practical applications, analyzing the perpendicular distances to slanted force vectors can be complex, so breaking down forces into their horizontal and vertical components simplifies calculations.",
            "By applying these principles, one can effectively analyze rigid body equilibrium and solve statics problems."    
            `
        },
        {
            id: 3,
            name: 'Object Oriented Programming',
            description: 'Object-oriented programming (OOP) is a programming paradigm that structures code around objects, encapsulating data and behavior to enhance code organization and reusability.',
            image: course3,
            branch: 'Computer Science',

            pathname: '/learnboard',

            url: 'https://www.youtube.com/watch?v=pTB0EiLXUC8',
            content: `
            A popular interview question often concerns the four core concepts in object-oriented programming: encapsulation, abstraction, inheritance, and polymorphism. Let's delve into each of these concepts.

            Before object-oriented programming, we had procedural programming, which divided a program into a set of functions that operated on data stored in variables. While simple and straightforward, this approach could lead to "spaghetti code," where functions were interdependent and changes in one could break others.
            
            Object-oriented programming (OOP) addresses this by combining related variables and functions into units called objects. Properties represent the variables, and methods represent the functions. For example, a car object would have properties like make, model, and color, and methods like start, stop, and move.
            
            Encapsulation is the practice of grouping related variables and functions into objects. This approach simplifies function parameters, leading to functions with fewer parameters and easier maintenance.
            
            Abstraction involves hiding the complexity of an object's internal workings and exposing only essential features. For instance, a DVD player's external buttons abstract away the complex logic board inside.
            
            Inheritance allows us to eliminate redundant code by defining common properties and methods in a generic object and having other objects inherit them. This reduces code duplication and promotes code reuse.
            
            Polymorphism enables us to handle multiple object types in a uniform manner without resorting to lengthy if-else or switch-case statements. It allows objects of different types to be treated as instances of a common superclass.
            `,
            info: `
            "A popular interview question often concerns the four core concepts in object-oriented programming: encapsulation, abstraction, inheritance, and polymorphism.",
            "Let's delve into each of these concepts.",
            "Before object-oriented programming, we had procedural programming, which divided a program into a set of functions that operated on data stored in variables.",
            "While simple and straightforward, this approach could lead to 'spaghetti code,' where functions were interdependent and changes in one could break others.",
            "Object-oriented programming (OOP) addresses this by combining related variables and functions into units called objects.",
            "Properties represent the variables, and methods represent the functions.",
            "For example, a car object would have properties like make, model, and color, and methods like start, stop, and move.",
            "Encapsulation is the practice of grouping related variables and functions into objects.",
            "This approach simplifies function parameters, leading to functions with fewer parameters and easier maintenance.",
            "Abstraction involves hiding the complexity of an object's internal workings and exposing only essential features.",
            "For instance, a DVD player's external buttons abstract away the complex logic board inside.",
            "Inheritance allows us to eliminate redundant code by defining common properties and methods in a generic object and having other objects inherit them.",
            "This reduces code duplication and promotes code reuse.",
            "Polymorphism enables us to handle multiple object types in a uniform manner without resorting to lengthy if-else or switch-case statements.",
            "It allows objects of different types to be treated as instances of a common superclass."
        
            `
        },
        {
            id: 4,
            name: 'Latch and flipflop',
            description: 'A latch is an asynchronous digital circuit that stores data, while a flip-flop is a clocked digital circuit that stores and transitions data based on clock signals.',
            image: course4,
            branch: 'Electrical Engineering',

            pathname: '/learnboard',

            url: 'https://www.youtube.com/watch?v=LTtuYeSmJ2g',
            content: `
            Certainly! Here is a cleaned-up version of the provided information:
            
            Today, we'll explore two fundamental types of memory elements: Latches and Flip-Flops.
            
            Both Latches and Flip-Flops serve as bistable multivibrators, capable of storing a single bit of information, representing either zero or one.
            
            Let's start with Latches. There are Transparent Latches that promptly respond to input changes, reflecting the current input state. On the other hand, Gated Latches become transparent based on a control input. When the enable input is high, they respond to changes; when low, they maintain their previous state.
            
            Now, Flip-Flops operate differently. They only respond to input changes during clock transitions, making them Edge-Triggered Memory Elements. Positive Edge-Triggered Flip-Flops respond at rising clock edges, while Negative Edge-Triggered Flip-Flops respond at falling edges. They remain unaffected by input changes between clock transitions.
            
            In synchronous circuits, Flip-Flops are commonly preferred due to their edge-triggered nature. Gated Latches can be adapted to function as Flip-Flops by incorporating clock transition circuits.
            
            Both Latches and Flip-Flops are implemented using logic gates. In our next video, we'll delve into designing transparent and gated latches using these gates.
            
            Feel free to share any questions or suggestions in the comments below. If you found this information helpful, don't forget to like and subscribe for more content.
            
            `,
            info: `
            "Today, we'll explore two fundamental types of memory elements: Latches and Flip-Flops.",
            "Both Latches and Flip-Flops serve as bistable multivibrators, capable of storing a single bit of information, representing either zero or one.",
            "Let's start with Latches. There are Transparent Latches that promptly respond to input changes, reflecting the current input state.",
            "On the other hand, Gated Latches become transparent based on a control input. When the enable input is high, they respond to changes; when low, they maintain their previous state.",
            "Now, Flip-Flops operate differently. They only respond to input changes during clock transitions, making them Edge-Triggered Memory Elements.",
            "Positive Edge-Triggered Flip-Flops respond at rising clock edges, while Negative Edge-Triggered Flip-Flops respond at falling edges. They remain unaffected by input changes between clock transitions.",
            "In synchronous circuits, Flip-Flops are commonly preferred due to their edge-triggered nature. Gated Latches can be adapted to function as Flip-Flops by incorporating clock transition circuits.",
            "Both Latches and Flip-Flops are implemented using logic gates. In our next video, we'll delve into designing transparent and gated latches using these gates.",
            "Feel free to share any questions or suggestions in the comments below. If you found this information helpful, don't forget to like and subscribe for more content."
        
            `

        },
        {
            id: 5,
            name: 'Supervised and Unsupervised Learning',
            description: 'Supervised learning uses labeled data for training, predicting specific outputs, while unsupervised learning works with unlabeled data to identify patterns or relationships without predefined outputs.',
            image: course5,
            branch: 'Artificial Intelligence',

            pathname: '/learnboard',

            url: 'https://www.youtube.com/watch?v=1FZ0A1QCMWc',
            content: `
            In this video, we'll delve into an intriguing topic in machine learning: supervised versus unsupervised versus reinforcement learning. Let's examine each of these in detail to understand when to utilize these algorithms along with their applications.

            There are various algorithms in machine learning to tackle complex problems, each falling into specific categories: supervised learning, unsupervised learning, and reinforcement learning.
            
            Supervised learning employs labeled data to train machine learning models. This means that the output is known beforehand, and the model maps inputs to these outputs. For example, training a machine to identify animal images using labeled data.
            
            Unsupervised learning, on the other hand, utilizes unlabeled data to train machines. The model learns from the data, discovers patterns and features, and generates outputs. For instance, classifying vehicles as buses or trucks based on their features without predefined output variables.
            
            Reinforcement learning trains machines to take appropriate actions to maximize rewards in given situations. It involves an agent interacting with an environment to produce actions and receive rewards. There's no predefined target variable, and it's often used in scenarios where the best course of action is learned through trial and error.
            
            Each of these learning techniques is associated with specific algorithms. Common supervised learning algorithms include linear regression, logistic regression, support vector machines, and decision trees. Unsupervised learning algorithms include k-means clustering, hierarchical clustering, and principal component analysis. Reinforcement learning algorithms encompass Q-learning, Monte Carlo methods, SARSA, and deep Q-networks.
            
            In supervised learning, labeled inputs are mapped to known outputs. Unsupervised learning discovers trends and patterns in data to predict outputs. Reinforcement learning relies on trial and error to achieve desired outcomes, with rewards or penalties guiding the learning process.
            
            Supervised learning is typically applied to classification and regression problems, while unsupervised learning is used for clustering and association tasks. Reinforcement learning is commonly used in scenarios where actions lead to rewards or penalties, such as gaming or robotic applications.
            
            To summarize, supervised learning is guided by labeled data, unsupervised learning discovers patterns without labels, and reinforcement learning learns through interaction with an environment to maximize rewards. Each has its own set of algorithms and applications tailored to different problem domains
            `,
            info: `
            "In this video, we'll delve into an intriguing topic in machine learning: supervised versus unsupervised versus reinforcement learning.",
            "Let's examine each of these in detail to understand when to utilize these algorithms along with their applications.",
            "There are various algorithms in machine learning to tackle complex problems, each falling into specific categories: supervised learning, unsupervised learning, and reinforcement learning.",
            "Supervised learning employs labeled data to train machine learning models. This means that the output is known beforehand, and the model maps inputs to these outputs. For example, training a machine to identify animal images using labeled data.",
            "Unsupervised learning, on the other hand, utilizes unlabeled data to train machines. The model learns from the data, discovers patterns and features, and generates outputs. For instance, classifying vehicles as buses or trucks based on their features without predefined output variables.",
            "Reinforcement learning trains machines to take appropriate actions to maximize rewards in given situations. It involves an agent interacting with an environment to produce actions and receive rewards. There's no predefined target variable, and it's often used in scenarios where the best course of action is learned through trial and error.",
            "Each of these learning techniques is associated with specific algorithms. Common supervised learning algorithms include linear regression, logistic regression, support vector machines, and decision trees.",
            "Unsupervised learning algorithms include k-means clustering, hierarchical clustering, and principal component analysis. Reinforcement learning algorithms encompass Q-learning, Monte Carlo methods, SARSA, and deep Q-networks.",
            "In supervised learning, labeled inputs are mapped to known outputs. Unsupervised learning discovers trends and patterns in data to predict outputs. Reinforcement learning relies on trial and error to achieve desired outcomes, with rewards or penalties guiding the learning process.",
            "Supervised learning is typically applied to classification and regression problems, while unsupervised learning is used for clustering and association tasks. Reinforcement learning is commonly used in scenarios where actions lead to rewards or penalties, such as gaming or robotic applications.",
            "To summarize, supervised learning is guided by labeled data, unsupervised learning discovers patterns without labels, and reinforcement learning learns through interaction with an environment to maximize rewards. Each has its own set of algorithms and applications tailored to different problem domains."
        
            `
        },
        {
            id: 6,
            name: 'Neural Networks',
            description: 'Explore the foundations of computer science with our specialized Discrete Mathematics course. From logic and set theory to graph theory and algorithms, develop critical thinking skills essential for computational problem-solving.',
            image: course6,
            branch: 'Artificial Intelligence',

            pathname: '/learnboard',

            url: ' https://www.youtube.com/watch?v=bfmFfD2RIcg',
            content: `
            Neural networks form the basis of deep learning, a subfield of machine learning inspired by the structure of the human brain. Neural networks take in data, train themselves to recognize patterns, and then predict outputs for new similar data.

            Let's understand how this works. Imagine constructing a neural network to differentiate between a square, circle, and triangle. Neural networks consist of layers of neurons, the core processing units. The input layer receives input, the output layer predicts the final output, and in between, exist hidden layers that perform most computations.
            
            For example, consider an image of a circle composed of 28x28 pixels, totaling 784 pixels. Each pixel is fed as input to neurons in the first layer. Neurons in one layer are connected to neurons in the next layer through channels, each assigned a weight. These inputs are multiplied by corresponding weights, summed, and passed through an activation function to determine if the neuron activates or not. This process, known as forward propagation, continues through the network.
            
            During training, the network's predicted output is compared against the actual output, and the error is calculated. This error information is then used to adjust the weights through backpropagation, reducing errors iteratively until the network predicts shapes correctly.
            
            Neural networks have various applications, such as facial recognition, weather forecasting, stock price prediction, and music composition. However, training neural networks can be time-consuming, taking hours or even months.
            
            In conclusion, while neural networks and deep learning are still evolving, companies like Google, Amazon, and Nvidia are investing in developing products and technologies to support their implementation. The future of neural networks and their ability to replicate the human brain remains a topic of debate among visionaries.
            `,
            info: `
            "Neural networks form the basis of deep learning, a subfield of machine learning inspired by the structure of the human brain.",
            "Neural networks take in data, train themselves to recognize patterns, and then predict outputs for new similar data.",
            "Let's understand how this works. Imagine constructing a neural network to differentiate between a square, circle, and triangle.",
            "Neural networks consist of layers of neurons, the core processing units. The input layer receives input, the output layer predicts the final output, and in between, exist hidden layers that perform most computations.",
            "For example, consider an image of a circle composed of 28x28 pixels, totaling 784 pixels. Each pixel is fed as input to neurons in the first layer.",
            "Neurons in one layer are connected to neurons in the next layer through channels, each assigned a weight. These inputs are multiplied by corresponding weights, summed, and passed through an activation function to determine if the neuron activates or not.",
            "This process, known as forward propagation, continues through the network.",
            "During training, the network's predicted output is compared against the actual output, and the error is calculated.",
            "This error information is then used to adjust the weights through backpropagation, reducing errors iteratively until the network predicts shapes correctly.",
            "Neural networks have various applications, such as facial recognition, weather forecasting, stock price prediction, and music composition.",
            "However, training neural networks can be time-consuming, taking hours or even months.",
            "In conclusion, while neural networks and deep learning are still evolving, companies like Google, Amazon, and Nvidia are investing in developing products and technologies to support their implementation.",
            "The future of neural networks and their ability to replicate the human brain remains a topic of debate among visionaries."
        
            `
        }, {
            id: 7,
            url: "https://www.youtube.com/watch?v=e5L3XgLPtZQ&list=PL1O57nCUQ-e-OVRFdIB-Gu1U91yH7egmm&index=16",
            branch: "Business",
            name: "Basics of Business Economics",
            description: "This video is all you need to know about basic business economics before you start a business. So, watch this full video to understand business economics for your business and business ideas",
            content: "Economics is a crucial aspect of business that entrepreneurs should be familiar with. Businesses operate according to economic trends. For instance, the law of supply and demand defines commodity prices and determines the marketability of goods. Additionally, the gross domestic product (GDP) reflects a country's financial health, influencing the actions of governments, banks, and companies in the coming year. Entrepreneurs must prioritize understanding business economics to effectively navigate challenges. Reviewing and updating the business plan is essential. This allows for assessing whether the business is on track and whether any emergency plans need to be incorporated to address the current financial crisis. A well-prepared budget, along with industry dynamics, company law, business strategy, advanced management controls, international accounting standards, and advanced corporate finance knowledge, enables effective business management.",
            info: "Economics is a crucial aspect of business that entrepreneurs should be familiar with. Businesses operate according to economic trends. For instance, the law of supply and demand defines commodity prices and determines the marketability of goods. Additionally, the gross domestic product (GDP) reflects a country's financial health, influencing the actions of governments, banks, and companies in the coming year. Entrepreneurs must prioritize understanding business economics to effectively navigate challenges. Reviewing and updating the business plan is essential. This allows for assessing whether the business is on track and whether any emergency plans need to be incorporated to address the current financial crisis. A well-prepared budget, along with industry dynamics, company law, business strategy, advanced management controls, international accounting standards, and advanced corporate finance knowledge, enables effective business management.",
            image: course7,
            pathname: "/learnboard"
        },
        {
            id: 8,
            url: "https://youtu.be/gmvvaobm7eQ?si=-3TpNiwXXN83_Wqz",
            branch: "Machine Learning",
            name: "Machine Learning Tutorial Python -1: What is Machine Learning?",
            description: "What is Machine Learning? This is an introduction to machine learning to begin the python machine learning tutorial series. This video describes what is machine learning, deep learning, machine learning application in real life.",
            content: "I'm thrilled to introduce a new series on machine learning with Python in this tutorial. We'll delve into the concept of machine learning. Computers excel in certain tasks where humans may struggle. For instance, multiplying large numbers or searching through millions of records are tasks computers can perform rapidly, unlike humans. Conversely, tasks such as driving cars or engaging in natural language conversations are areas where humans outperform machines. Machine learning aims to enhance computer capabilities in tasks traditionally dominated by humans. This is achieved by mimicking human learning processes. Human brains consist of billions of neurons interconnected by synapses. When we learn something new, specific neurons are activated, forming pathways that strengthen with repetition. Similarly, computers can be trained using neural network models, adjusting connections between neurons based on vast amounts of training data. This process, known as deep learning, is a subset of machine learning, which encompasses various techniques for utilizing available data to make informed decisions. Machine learning has diverse real-life applications, such as spam filters in email accounts, personal assistant devices like Amazon Alexa and Google Home, recommendation systems like YouTube's suggested videos, and the development of driverless cars by companies like Tesla, Google, and Uber.",
            info: "I'm thrilled to introduce a new series on machine learning with Python in this tutorial. We'll delve into the concept of machine learning. Computers excel in certain tasks where humans may struggle. For instance, multiplying large numbers or searching through millions of records are tasks computers can perform rapidly, unlike humans. Conversely, tasks such as driving cars or engaging in natural language conversations are areas where humans outperform machines. Machine learning aims to enhance computer capabilities in tasks traditionally dominated by humans. This is achieved by mimicking human learning processes. Human brains consist of billions of neurons interconnected by synapses. When we learn something new, specific neurons are activated, forming pathways that strengthen with repetition. Similarly, computers can be trained using neural network models, adjusting connections between neurons based on vast amounts of training data. This process, known as deep learning, is a subset of machine learning, which encompasses various techniques for utilizing available data to make informed decisions. Machine learning has diverse real-life applications, such as spam filters in email accounts, personal assistant devices like Amazon Alexa and Google Home, recommendation systems like YouTube's suggested videos, and the development of driverless cars by companies like Tesla, Google, and Uber.",
            image: course8,
            pathname: "/learnboard"
        },
        {
            id: 9,
            url: "https://youtu.be/X3paOmcrTjQ?si=kX-iKUNnifPfQOHc",
            branch: "Data Science",
            name: "Data Science For Beginners , What Is Data Science?",
            description: "This What is Data Science Video will give you an idea of a life of Data Scientist. This Data Science for Beginners video will also explain the steps involved in the Data Science project, roles & salary offered to a Data Scientist. Data Science is basically dealing with unstructured and structured data. Data Science is a field that comprises of everything that is related to data cleansing, preparation, and data analysis",
            content: "Hello everyone, welcome to Suvreen Sufyan's science show. Thank you for watching this video. In this video, we'll explore some intriguing questions that even the best science fiction can't answer. We'll discuss topics ranging from the symbolism of national flags to complex scientific theories. Don't forget to subscribe to the channel for more interesting content. Subscribe now to stay updated with new updates, reviews, and news. Also, check out our playlist on Bluetooth settings and modifications to enhance your understanding.",
            info: "Hello everyone, welcome to Suvreen Sufyan's science show. Thank you for watching this video. In this video, we'll explore some intriguing questions that even the best science fiction can't answer. We'll discuss topics ranging from the symbolism of national flags to complex scientific theories. Don't forget to subscribe to the channel for more interesting content. Subscribe now to stay updated with new updates, reviews, and news. Also, check out our playlist on Bluetooth settings and modifications to enhance your understanding.",
            image: course9,
            pathname: "/learnboard"
        },
        {
            id: 10,
            url: "https://youtu.be/inWWhr5tnEA?si=o1Pu4hzQrKek0sr5",
            branch: "Cyber Security",
            name: "What Is Cyber Security: How It Works?",
            description: "This Simplilearn video on Cyber Security In 7 Minutes will explain what is cyber security, how it works, why cyber security, who is a cyber security expert, and what are the different types of cyberattacks with examples",
            content: "Meet Anne. She frequently shops from www.shoppingcart.com, where she has her email, address, and credit card details saved for a seamless shopping experience. This information is stored on a server. One day, Anne received an email claiming eligibility for a special discount voucher from shoppingcart.com. To receive the coupon code, she was prompted to provide her account credentials. Assuming it was a standard verification step, she complied. Little did she know the danger she was about to face. Anne was shocked when a substantial amount of money disappeared from her account. How did this happen? The email she received was fake, and her shoppingcart.com account experienced unauthorized access from a third party. This type of attack is known as a cyber attack, with the perpetrator called a hacker. Could Anne have prevented this? Indeed, with the help of cybersecurity. Cybersecurity involves techniques to secure digital components, networks, data, and computer systems from unauthorized access. Various cybersecurity practices can be implemented to safeguard against different types of cyber attacks. Some common cyber attacks include malware attacks (e.g., trojans, adware, spyware), phishing attacks (fraudulent emails), and man-in-the-middle attacks (interception of communication). Password attacks and SQL injection attacks are also prevalent. To enhance cybersecurity, Anne could install a firewall, use honeypots, employ unique passwords, utilize antivirus software, and avoid emails from unknown senders. Cyber attacks aren't limited to individuals; public and private organizations also face threats. These attacks can lead to significant losses, ranging from tampering with data to monetary gains. Various cyber attacks target organizations, such",
            info: "Meet Anne. She frequently shops from www.shoppingcart.com, where she has her email, address, and credit card details saved for a seamless shopping experience. This information is stored on a server. One day, Anne received an email claiming eligibility for a special discount voucher from shoppingcart.com. To receive the coupon code, she was prompted to provide her account credentials. Assuming it was a standard verification step, she complied. Little did she know the danger she was about to face. Anne was shocked when a substantial amount of money disappeared from her account. How did this happen? The email she received was fake, and her shoppingcart.com account experienced unauthorized access from a third party. This type of attack is known as a cyber attack, with the perpetrator called a hacker. Could Anne have prevented this? Indeed, with the help of cybersecurity. Cybersecurity involves techniques to secure digital components, networks, data, and computer systems from unauthorized access. Various cybersecurity practices can be implemented to safeguard against different types of cyber attacks. Some common cyber attacks include malware attacks (e.g., trojans, adware, spyware), phishing attacks (fraudulent emails), and man-in-the-middle attacks (interception of communication). Password attacks and SQL injection attacks are also prevalent. To enhance cybersecurity, Anne could install a firewall, use honeypots, employ unique passwords, utilize antivirus software, and avoid emails from unknown senders. Cyber attacks aren't limited to individuals; public and private organizations also face threats. These attacks can lead to significant losses, ranging from tampering with data to monetary gains. Various cyber attacks target organizations, such",
            image: course10,
            pathname: "/learnboard"
        }
    ];
    const games = [
        {
            id: 1,
            name: 'MCQ Quiz',
            description: 'Test your knowledge in various programming concepts, from arrays and linked lists to dynamic programming. Perfect for assessing your problem-solving skills.',
            image: game1,
            branch: 'Computer Science',
            path: '/quizgame'
        },
        {
            id: 2,
            name: 'Coding Challenges',
            description: 'Take on coding challenges to sharpen your skills and delve into Object-Oriented Programming (OOP) principles. Explore encapsulation, inheritance, and polymorphism for efficient software design and development.',
            image: game2,
            branch: 'Information Technology',
            path: '/codinggame'
        },
        {
            id: 3,
            name: 'Electrical Simulations',
            description: 'Immerse yourself in electrical simulations to experience the intricacies of fluid dynamics and engineering. Understand thermodynamics and fluid behavior, gaining insights crucial for mechanical design and analysis.',
            image: game3,
            branch: 'Electrical Engineering',
            path: '/simulationgame'
        },


    ];



    const filteredCourses = courses.filter((course) => {
        let count = localStorage.getItem(searchQuery);

        if (count !== null) {
            count = parseInt(count) + 1;
        } else {
            count = 1;
        }

        localStorage.setItem(searchQuery, count);
        
        const isMatchSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());
        const isMatchPreference = preference.length === 0 || preference.includes('default') || preference.includes(course.branch);
        return isMatchSearch && isMatchPreference;
    });

    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const handleStartCourse = (id) => {
        const coursePath = courses[id - 1].path;

        return <Link to={coursePath} />;
    };

    const handleStartGame = (id) => {
        const gamePath = games[id - 1].path;

        return <Link to={gamePath} />;
    };

    return (
        <div id='mainHome'>



            <div id="topBar">

                <div id="selBox">
                    <div onClick={changeToCourses} id='selCourse'>Courses</div>
                    <div onClick={changeToGames} id='selGames'>Games</div>
                </div>

                <input
                    placeholder='Search'
                    id='searchField'
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {/* <select
                    className='selPreference'
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                >
                    <option value="default" disabled hidden>Select Preference:</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                </select> */}

                <MultiSelect
                    display='chip'
                    className='selPreference'
                    value={preference}
                    options={[
                        { label: 'Artificial Intelligence', value: 'Artificial Intelligence' },
                        { label: 'Electrical', value: 'Electrical Engineering' },
                        { label: 'Computer Science', value: 'Computer Science' },
                        { label: 'Mechanical', value: 'Mechanical' },
                        { label: "Business", value: "Business" },
                        { label: "Machine Learning", value: "Machine Learning" },
                        { label: "Data Science", value: "Data Science" },
                        { label: "Cyber Security", value: "Cyber Security" }

                    ]}

                    onChange={handleInterestChange}
                    placeholder="Select Interests"
                />

                <div id="selIcon">
                    <i class="fa-solid fa-trophy"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
            {type === 'courses' ? (
                <div className="courseCards">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="courseCard">
                            <img src={course.image} alt={`Course ${course.id}`} />
                            <div className="courseInfo">
                                <h3>{course.name}</h3>
                                <p className='courseDesc'>{course.description}</p>
                                {/* Use Link instead of window.location.href */}
                                <Link to="/learnboard/type" state={{ url: course.url, content: course.content, name: course.name, info: course.info }}>
                                    <button className='courseBtn' >Start</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="gameCards">
                    {filteredGames.map((game) => (
                        <div key={game.id} className="gameCard">
                            <img src={game.image} alt={`Game ${game.id}`} />
                            <div className="gameInfo">
                                <h3>{game.name}</h3>
                                <p className='gameDesc'>{game.description}</p>
                                {/* Use Link instead of window.location.href */}
                                <Link to={game.path}>
                                    <button className='gameBtn'>Play</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Main;