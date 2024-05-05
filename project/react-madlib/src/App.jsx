import { useState } from 'react'
import Form from './form';
import Story from './story'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

const Madlib = () => {
  const [completed, setCompleted] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleSubmit = (inputValues) => {
    setInputs(inputValues);
    setCompleted(true);
  };

  return (
    <div>
      <h1>Madlibs Game</h1>
      {completed ? (
        <Story {...inputs} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Madlib
