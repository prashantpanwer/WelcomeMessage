# WelcomeMessage

React Basics Project 🚀
This is a simple beginner-friendly React project that demonstrates:

Creating and using a custom component
Rendering components inside App.js
Using React state with useState
Building a basic counter app
📌 Project Features
✅ Task 1: Welcome Message Component
A reusable React component called WelcomeMessage

Displays the text:

Welcome to React Basics!
Rendered inside App.js

✅ Task 2: Counter App
Displays a number on the screen
Includes an Increment button
Each click increases the number by 1 using React state
📂 Project Structure
src/
│
├── App.js
├── WelcomeMessage.js
└── index.js
🧠 Concepts Used
React Functional Components
JSX
useState Hook
Event Handling (onClick)
Component Import & Export
💻 Installation & Setup
Follow these steps to run the project locally:

1️⃣ Install Node.js
Download and install from:

https://nodejs.org
2️⃣ Create a React App (if not already created)
Using Vite (recommended):

npm create vite@latest react-basics
cd react-basics
npm install
npm run dev
Or using Create React App:

npx create-react-app react-basics
cd react-basics
npm start
3️⃣ Add the Project Files
Create the following files inside the src folder:

WelcomeMessage.js
function WelcomeMessage() {
  return <h1>Welcome to React Basics!</h1>;
}

export default WelcomeMessage;
App.js
import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <WelcomeMessage />
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
✅ Final Output
When the app runs, you will see:

✅ A welcome message
✅ A counter starting at 0
✅ A button that increases the counter
🎯 Learning Outcome
By completing this project, you learn how to:

Build components in React
Pass components into App.js
Use React state (useState)
Handle button click events
Work with JSX inside JavaScript files
