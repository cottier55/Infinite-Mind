import React from 'react';

const Category = ({ name, image, onStartCategory }) => {
  return (
    <div className="category">
      <img src={`images/${image}`} alt={name} />
      <h2>{name}</h2>
      <button onClick={onStartCategory}>Comenzar</button>
    </div>
  );
};

export default Category;
