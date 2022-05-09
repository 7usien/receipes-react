import './Searchbar.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Searchbar() {
 const [term, setTerm] = useState();
 const History = useHistory();

 const handleSubmit = (e) => {
  e.preventDefault();
  History.push(`/search?q=${term}`);
  setTerm('');
 };

 return (
  <div className='searchbar'>
   <form onSubmit={handleSubmit}>
    <label htmlFor='search'>search</label>
    <input
     value={term}
     onChange={(e) => {
      setTerm(e.target.value);
     }}
     type='text'
     name=''
     id='search'
     required
    />
   </form>
  </div>
 );
}
