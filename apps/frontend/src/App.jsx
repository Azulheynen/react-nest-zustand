import { useFetchRecipes } from "./hooks/useRecipes";


function App() {
  const {data, isLoading} = useFetchRecipes()

  if(isLoading) return <div>is Loading...</div>
  console.log(data)

  
  return (
    <button
      onClick={async () => {
        const response = await fetch("/api");
        const data = await response.text();
        console.log(data);
      }}
    >
    
      click me
    </button>
  );
}

export default App;
