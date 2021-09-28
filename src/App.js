//* Code 1

//  App.js

import { useState } from 'react';
import './App.css';
import CMP from './CMP'
function App() {

  const [ab, setab] = useState(1)
  const [jk, setjk] = useState(4)
  const [flag, setflag] = useState(true);


  return (
    <div className="App">
      <User ab={ab} jk={jk} />
      {flag ? <CMP /> : ''}
      <button onClick={() => setab(ab + 1)}>btn</button>
      <button onClick={() => setjk(jk + 1)}>btn2</button>
      <button onClick={() => setflag(!flag)}>Flag</button>
    </div>
  );
}

export default App;

// User.js

import { useEffect } from 'react';

function User(props) {

  useEffect(() => {
    console.log("component did mount")
  }, []);
  useEffect(() => {
    console.log('componentDidUpdate')
  });

  useEffect(() => {
    console.log("work 1")
  }, [props.ab, props.jk])  //Note: 2no states k sth same useEffect chlany k liye hm likh skty [props.ab, props.jk]


  return (
    <div className="App">
      <h1>{props.ab}</h1><p>{props.jk}</p>
    </div>
  );
}



//* CMP component 

import React, { useState, useEffect } from 'react'


function CMP() {
  // useEffect(() => {
  //     console.log('me a chuka')
  // }, []);

  useEffect(() => {
    return () => { console.log('component will unmount') }
  }, []);

  return (
    <div>
      cmp
    </div>
  )
}

export default CMP
