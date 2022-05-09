import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Receipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';

function App() {
 return (
  <div className='App'>
   <BrowserRouter>
    <Navbar />
    <Switch>
     <Route exact path='/'>
      <Home />
     </Route>
     <Route path='/create'>
      <Create />
     </Route>

     <Route path='/search'>
      <Search />
     </Route>
     <Route path='/recipes/:id'>
      <Receipe />
     </Route>

     <Route path='*'>
      <Redirect to='/' />
     </Route>
    </Switch>
   </BrowserRouter>
  </div>
 );
}

export default App;
