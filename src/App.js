//! shouldCoponentUpdate


// import { Component } from 'react'

// export default class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       data: 1
//     }
//   }
//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate", this.state.data)
//     if (this.state.data > 5) {
//       return true;
//     }
//     else return false;

//   }

//   render() {
//     console.log("render");

//     return (
//       <div>
//         <h1>Hello {this.state.data}</h1>
//         <button onClick={() => this.setState({ data: this.state.data + 1 })}>brn2</button>
//       </div>
//     )
//   }
// }


//----------------------------------------------------------------


//* ComponentWillUnmount


// //////Child 

// import React from 'react'
// class Student extends React.Component {

//   componentWillUnmount() {
//     console.log("componentWillUnmount is called")
//   }
//   render() {
//     return <h1>Student Component</h1>
//   }
// }



// //Parent
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true
//     }
//   }


//   render() {
//     return (
//       <div className="App">
//         {
//           this.state.show ? <Student />
//             : <h4>Component is removed</h4>
//         }
//         <button onClick={() => this.setState({ show: false })}> Toogle Student Component</button>
//       </div>
//     )
//   }
// }

// export default App;



//! useEffect


// import { useEffect } from 'react';

// function App() {

//   useEffect(() => {
//     console.log("useEffect here.................")
//   })

//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;




//! useEffect with some update in our state


// import { useEffect, useState } from 'react';

// function App() {

//   useEffect(() => {
//     console.log("useEffect updata1111")
//   })
//   useEffect(() => {
//     console.log("useEffect updata222")
//   })
//   const [count, setcount] = useState(1)

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count + 1)}>btn</button>
//     </div>
//   );
// }

// export default App;



// import { useEffect, useState } from 'react';

// function App() {

//   useEffect(() => {
//     console.log("useEffect updata1111")
//   })
//   useEffect(() => {
//     console.log("useEffect updata222")
//   },[])
//   const [count, setcount] = useState(1)

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count + 1)}>btn</button>
//     </div>
//   );
// }

// export default App;




//! with some conditions 


import { useEffect } from 'react';
import './App.css';

function App() {

  const [ab, setab] = useState(1)
  const [jk, setjk] = useState(4)

  useEffect(() => {
    console.log('Call on Refresh....')
  }, []);

  useEffect(() => {
    console.log("work 1")
  }, [ab])

  useEffect(() => {
    console.log("work 2")
  }, [jk])


  return (
    <div className="App">
      {console.log('render...................')}
      <h1>{ab}</h1><p>{jk}</p>
      <button onClick={() => setab(ab + 1)}>btn</button>
      <button onClick={() => setjk(jk + 1)}>btn2</button>
    </div>
  );
}

export default App;
