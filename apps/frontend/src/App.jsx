import "./App.css";

function App() {
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
