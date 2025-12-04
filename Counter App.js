
import React, { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Task 1 */}
      <WelcomeMessage />

      {/* Task 2 */}
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
