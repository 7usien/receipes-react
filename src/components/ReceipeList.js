import React from 'react';
import { Link } from 'react-router-dom';
import './ReceipeList.css';

export default function ReceipeList({ recipes }) {
 if (recipes.length === 0) {
  return <div className='error'>no receipes to load ..</div>;
 } else {
  return (
   <div className='recipe-list'>
    {recipes.map((recipe) => (
     <div key={recipe.id} className='card'>
      {recipe.src && (
       <span className='img'>
        <img src={recipe.src} alt='' />
       </span>
      )}
      <h3>{recipe.title}</h3>
      <p>{recipe.cookingTime} to make</p>
      <div>{recipe.method.substring(0, 100)}...</div>
      <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
     </div>
    ))}
   </div>
  );
 }
}
