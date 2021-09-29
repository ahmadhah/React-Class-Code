//!27 sept 2021


//  App.js

// import { useState } from 'react';
// import './App.css';
// import CMP from './CMP'
// function App() {

//   const [ab, setab] = useState(1)
//   const [jk, setjk] = useState(4)
//   const [flag, setflag] = useState(true);


//   return (
//     <div className="App">
//       <User ab={ab} jk={jk} />
//       {flag ? <CMP /> : ''}
//       <button onClick={() => setab(ab + 1)}>btn</button>
//       <button onClick={() => setjk(jk + 1)}>btn2</button>
//       <button onClick={() => setflag(!flag)}>Flag</button>
//     </div>
//   );
// }

// export default App;

// User.js

// import { useEffect } from 'react';

// function User(props) {

//   useEffect(() => {
//     console.log("component did mount")
//   }, []);
//   useEffect(() => {
//     console.log('componentDidUpdate')
//   });

//   useEffect(() => {
//     console.log("work 1")
//   }, [props.ab, props.jk])  //Note: 2no states k sth same useEffect chlany k liye hm likh skty [props.ab, props.jk]


//   return (
//     <div className="App">
//       <h1>{props.ab}</h1><p>{props.jk}</p>
//     </div>
//   );
// }




//! 29 sept


// import './App.css';
// import react, { useState, useRef } from 'react';

// function App() {
//   const [num, setnum] = useState(0)
//   const useref = useRef()

//   function number() {
//     console.log(useref.current)
//     console.log(useref.current.innerHTML)
//     useref.current.innerHTML = 'Ahmad'
//     // useref.current.style.width = '100%'
//   }

//   return (

//     <div className="App">
//       {console.log('reRender')}
//       <input style={{ width: '30%' }} type="number" value={num} onChange={(e) => setnum(e.target.value)} ></input>
//       <h3 ref={useref}>Value is : {num}</h3>
//       <button onClick={() => number()}>btn</button>

//     </div>
//   );
// }

// export default App;


//! 2nd topica


/////////////////App.js


import React, { useEffect, useState, useRef } from 'react'

function App() {
  const [count, setcount] = useState(0)
  return (
    <div>
      <Usr count={count} />
      <button onClick={() => setcount(Math.floor(Math.random() * 10))} >Update</button>
    </div>
  )
}

export default App


//!-------------------------------------------------


////////////////Usr.js



function Usr(props) {


  const lastval = useRef();

  useEffect(() => {
    lastval.current = props.count
    console.log('useeffcet')
    console.log(lastval.current)
  })


  return (
    <div>
      <br /><h1>Current value : {props.count}</h1><br />
      <h2>Previous value : {lastval.current}</h2><br />
    </div>
  )
}



////////////////! 








