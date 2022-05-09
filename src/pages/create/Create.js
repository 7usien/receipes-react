import { useState, useRef, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';

import './Create.css';

export default function Create() {
 const [title, setTitle] = useState('');
 const [method, setMethod] = useState('');
 const [cookingTime, setCookingTime] = useState('');
 const [newIngrdient, setNewIngrident] = useState('');
 const [ingridentList, setIngridentList] = useState([]);

 const [myId, setMyId] = useState(null);

 const ingrdientHandler = useRef();
 const History = useHistory();

 const resetForm = () => {
  setTitle('');
  setCookingTime('');
  setIngridentList([]);
  setMethod('');
 };

 useEffect(() => {
  return setIngridentList((prev) =>
   prev.filter((ing) => ing !== ingridentList[myId])
  );
 }, [myId]);

 const { postData, data, error } = useFetch(
  'http://localhost:3000/recipes',
  'POST'
 );

 const handleSubmit = (e) => {
  e.preventDefault();
  const receipe = {
   id: Date.now(),
   title: title,
   method: method,
   cookingTime: `${cookingTime} minutes`,
   ingredients: [...ingridentList],
  };
  postData(receipe);
  resetForm();
  // setTimeout(() => History.push('/'), 1000);
 };

 const handleAdd = (e) => {
  e.preventDefault();
  const ing = newIngrdient.trim();
  if (ing && !ingridentList.includes(ing)) {
   setIngridentList((prev) => {
    return [...prev, ing];
   });
  }
  setNewIngrident('');
  ingrdientHandler.current.focus();
 };

 useEffect(() => {
  if (data) {
   History.push('/');
  }
 }, [data]);

 return (
  <div className='create'>
   <h2 className='page-title'>Add a new recipe :</h2>

   <form onSubmit={handleSubmit}>
    <label>
     <span>receipe title</span>
     <input
      required
      type='text'
      value={title}
      onChange={(e) => {
       setTitle(e.target.value);
      }}
     />
    </label>
    <label>
     <span>receipe ingridents:</span>
     <div className='ingridents'>
      <input
       ref={ingrdientHandler}
       value={newIngrdient}
       onChange={(e) => {
        setNewIngrident(e.target.value);
       }}
       type='text'
       id='ingrident'
      />
      <button onClick={handleAdd} className='btn'>
       add
      </button>
     </div>
    </label>
    {/* Ingridents go here */}

    {ingridentList && (
     <div className='ingridentList'>
      <h3>added ingrdients :</h3>

      <ul>
       {ingridentList.map((ing, index) => (
        <li
         id={index}
         onClick={(e) => {
          setMyId(e.target.id);
         }}
         key={index}>
         {ing}
        </li>
       ))}
      </ul>
     </div>
    )}

    <label>
     <span>cooking method</span>
     <textarea
      required
      value={method}
      type='text'
      onChange={(e) => {
       setMethod(e.target.value);
      }}
     />
    </label>
    <label>
     <span>receipe cooking time</span>
     <input
      required
      value={cookingTime}
      type='number'
      onChange={(e) => {
       setCookingTime(e.target.value);
      }}
     />
    </label>
    <button className='btn'>submit</button>
   </form>
  </div>
 );
}
