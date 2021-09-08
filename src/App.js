import './App.css';
import React, { useState } from 'react'

function App() {
  const [name, setname] = useState('Ahmad');

  //* func to update name
  const changeName = (namE) => {
    setname(namE);
  }

  return (
    <div className="App">
      <h1>This is {name}</h1>
      <ChildComponent name={name} changeName={changeName} />
    </div>
  );
}

export default App;


//* Child Component
function ChildComponent({ name, changeName }) {

  return (
    <>
      <h1>This is {name}</h1>
      <button onClick={() => changeName('Hannan')}>Update Name</button>
    </>
  )
}

