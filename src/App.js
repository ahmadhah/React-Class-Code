import React, { useState } from 'react'
import Form from './Form'
function App() {

  const [item, setitem] = useState('');
  const [list, setlist] = useState([]);

  const onClickHandler = () => {

    setlist([{ id: list.length, task: item }, ...list]);
    setitem('')
  }

  const deleteItem = (id) => {
    console.log(list.length)

    setlist(list.filter(item => item.id !== id))
  }
  const show = () => { console.log(list) }
  return (
    <div style={{ textAlign: 'center', backgroundColor: "green", padding: "100px" }}>
      <h1>Todo App</h1>
      <input value={item} onChange={(e) => setitem(e.target.value)} placeholder="Enter any Text" />
      <button onClick={onClickHandler}>+</button><button onClick={show}>show</button>
      {list.map((listItem, i) => <h4 key={i}>{listItem.task} <button onClick={() => deleteItem(i)}>del</button><button onClick={show}>show</button></h4>)}


      {/* <Form /> */}
    </div>
  );
}

export default App;
