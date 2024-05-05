import React from 'react';

const Story = ({ noun, color, adjective, noun2 }) => {
  return (
    <div>
      <p>Once upon a time, there was a {adjective} {noun} who loved a {color} {noun2}.</p>
    </div>
  );
};

export default Story;