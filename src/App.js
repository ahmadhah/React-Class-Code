import React, { useState } from 'react';
import User from './Rough.js'
function App() {
  // const [name, setName] = React.useState("Anil")
  const [count, setcount] = useState(0);
  return (
    <div className="App">
      <h1>Render Method in React</h1>
      <button onClick={() => setcount(count + 1)}>BTN</button>
      <User count={count} />
      {/* <button onClick={()=>setName("Sidhu")}>Update Name</button> */}
    </div>
  );
}

export default App;

////////////////calling in child component

