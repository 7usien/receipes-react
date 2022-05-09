//styles
import './Search.css';

// Compo
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import ReceipeList from '../../components/ReceipeList';

export default function Search() {
 const searchTerm = useLocation().search;
 const queryParmas = new URLSearchParams(searchTerm);
 const query = queryParmas.get('q');

 const url = `http://localhost:3000/recipes?q=${query}`;

 const { data, isPending, error } = useFetch(url);

 return (
  <div>
   <h2 className='page-title'>Recipes including " {query}"</h2>
   {error && <div className='error'>{error}</div>}
   {isPending && <div className='loading'>loading wait ..</div>}

   {data && <ReceipeList recipes={data} />}
  </div>
 );
}
