//code -1

//useArray

import { useState } from 'react'

export function useArray() {

  const [students, setstudents] = useState([

    {
      name: 'ahmad',
      id: 123
    },
    {
      name: 'arslan',
      id: 34
    },
    {
      name: 'shabir',
      id: 54
    }

  ])



  return ([students, setstudents])

}

//app.js

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
import React from 'react'
import { useArray } from './useArray';

function App() {

  const [students, setstudents] = useArray();
  console.log(setstudents)

  return (
    <div>
      {students.map((student, i) => <h2 key={i}>#{i} Name is : {student.name}</h2>)}
    </div>
  )
}

export default App





//2nd example

//////////////////useArray.js

import { useState, useEffect } from 'react'
import axios from 'axios'
export function useArray() {

  const [products, setproducts] = useState([])
  //    async function fetchProduct(){
  //         let productResponse = await fetch('https://fakestoreapi.com/products/jewelery')
  //         let products =await productResponse.json();
  //         setproducts(products)
  //         console.log(products)
  //    }


  // by using axios   (axios me .json() function call krny ki need nhi hoti)

  async function fetchProduct() {
    try {
      let productss = await axios.get('https://fakestoreapi.com/products')
      // let products =await productResponse.json();
      setproducts(productss.data)
      // console.log(productss.data)
    }
    catch (err) {
      console.log('error ', err)
    }
    // setproducts(products)

  }


  useEffect(() => {
    fetchProduct();
  }, [])


  return ([products])

}

----------------------------------------------------

///////////////////App.js


import React from 'react'
import { useArray } from './useArray';

function App() {

  const [products] = useArray();


  return (
    <div className="container">

      {products.map((produc) => {
        return (
          < div style={{ marginLeft: "25%" }} key={produc.id}>
            <img style={{ width: '150px' }} src={produc.image} alt={"men"} />
            <p className="title">{produc.title}</p>
            <h3 className="prize">{produc.price}</h3>
            <br /><hr /><br />
          </div>
        )
      })}
    </div>
  )
}

export default App
