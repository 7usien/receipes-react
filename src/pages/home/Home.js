import './Home.css';
import { useFetch } from '../../hooks/useFetch';
import ReceipeList from '../../components/ReceipeList';

export default function Home() {
 const {
  data: recipes,
  isPending,
  error,
 } = useFetch('http://localhost:3000/recipes');

 return (
  <div className='Home'>
   {isPending && <div className='loading'>loading wait ..</div>}
   {error && <div className='error'>{error}</div>}

   {recipes && <ReceipeList recipes={recipes} />}
  </div>
 );
}
