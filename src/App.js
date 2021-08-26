import './App.css';
import ClassComponent from './ClassComponent'


function App() {
  const name = "ahmad"
  const email = "xyz@gmail.com"
  const showName = () => {
    alert(name)
  }
  // showName(name)
  const object = { name, email, showName }
  const array = ["Lahore", "FSD", "SKP", "Multan", { object }]


  return (
    <div className="App">
      <ClassComponent arr={array} />
    </div>
  );
}

export default App;

