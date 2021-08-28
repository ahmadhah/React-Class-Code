
import './App.css';

function App() {
    let a = 4444;
    function Ca(){
        a = 999;
      alert(a);
    }
  console.log(a);
    return (
      <div className="App">
          <h1>{a}</h1>
        <button onClick={Ca}>BTN</button>
      </div>
    );
  }
  

export default App;
