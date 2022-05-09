import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
// styles
import './Recipe.css';

export default function Recipe() {
 const { id } = useParams();
 const url = `http://localhost:3000/recipes/${id}`;

 const { data: receipe, isPending, error } = useFetch(url);

 return (
  <>
   {receipe && (
    <div className='receipe-wrap'>
     {isPending && <div className='loading'>loading wait ..</div>}
     {error && <div className='error'>{error}</div>}

     <h2>{receipe.title}</h2>

     <div>
      <h2>method</h2>
      {receipe.method}
     </div>
     <span>it take : {receipe.cookingTime}</span>

     <div>
      <h2>ingridents:</h2>
      <ul>
       {receipe.ingredients.map((ing) => (
        <li key={ing}>{ing}</li>
       ))}
      </ul>
     </div>
    </div>
   )}
  </>
 );
}
