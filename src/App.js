import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Define a custom dictionary of words and their corrections
  const customDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [input, setInput] = useState("");
  const [state, setState] = useState("");
  const [initialrender, setInitialrender] = useState(true);

  useEffect ( ()=> {
    setInitialrender(false)  } ,[])

  const handleSubmit = (event) => {
    event.preventDefault();

    // Search for the input word in the dictionary
    const correctedWordObj = customDictionary.find(item => item.word.toLowerCase() === input.toLowerCase());
    setState(correctedWordObj ? correctedWordObj.meaning : "Word not found in the dictionary.");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Search a word"
        />
        <button type="submit">Search</button>
      </form>
      {!initialrender &&       <p>
          <strong>Definition:</strong> 
        </p>}
        {initialrender && (
        <p>Enter a word to search for its definition.</p>
      )}
      {state && ( 
        <p>
           <br/> {state}
        </p>
      )}
    </div>
  );
}

export default App;
