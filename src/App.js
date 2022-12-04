
import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () =>{

 // const APP_ID ='d993f9b9';
 // const APP_KEY = '52aebc5f075b6e6775aaebfdaac4337a';

  const [recipes, setRecipes]=useState([]);
  const [search,setSearch ] =useState('');
  const [query, setQuery  ] =useState('chicken');
  //const api='https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=52aebc5f075b6e6775aaebfdaac4337a';
 // const cal='https://api.edamam.com/api/food-database/v2/parser?=coffee&app_id=d993f9b9&app_key=52aebc5f075b6e6775aaebfdaac4337a';

  useEffect(()=>{
   getRecipes();
   
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=d993f9b9&app_key=52aebc5f075b6e6775aaebfdaac4337a`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }
const getSearch = e =>{
 e.preventDefault();
 setQuery(search);
  console.log(query);
}

  return(
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input 
        className='search-bar' 
        type="text" value={search} 
        onChange={updateSearch}
         />
        <button className='search-button' type='submit'>
          search
        </button>
      </form>

      {recipes.map(recipe=>(
          <Recipe key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
          />
        ))}
    </div>
  );
}

export default App;
