import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

export default function Navbar() {
 return (
  <div className='navbar'>
   <nav>
    <Link className='brand' to='/'>
     <h1>Cooking Ninja</h1>
    </Link>
    <Searchbar />
    <Link to='/create'>create a receipe</Link>
   </nav>
  </div>
 );
}
