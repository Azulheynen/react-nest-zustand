import { useFetchRecipes } from "./hooks/useRecipes";
import Card from "./components/Card";
import { useFavoriteRecipeStore } from "./store/favoriteRecipes";


function App() {
  const {data, isLoading} = useFetchRecipes()
  const {favoriteRecipesIds} = useFavoriteRecipeStore()

  if(isLoading) return <div>is Loading...</div>
  console.log(data)

  
  return (
    <div>
    {data.map( recipe => (
    <Card recipe ={recipe} key={recipe.id}
    isFavorite = {favoriteRecipesIds.includes(recipe.id)}
    />
    ))}
    </div>
  );
}

export default App;
