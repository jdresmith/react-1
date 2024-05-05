import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [noun, setNoun] = useState('');
  const [noun2, setNoun2] = useState('');
  const [adjective, setAdjective] = useState('');
  const [color, setColor] = useState('');

  /** Handles submission of the form */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ noun, noun2, adjective, color });
  };
/** Main form on the home screen */
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={noun} onChange={(e) => setNoun(e.target.value)} placeholder="Noun" />
      <input type="text" value={noun2} onChange={(e) => setNoun2(e.target.value)} placeholder="Noun2" />
      <input type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} placeholder="Adjective" />
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;