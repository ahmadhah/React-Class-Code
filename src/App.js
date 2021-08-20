import logo from './Screenshot_2.png';
import './App.css';

// ! 1.scripts
// ! 2.Build
// ! 3. import style file in our component
// ! image use
// ! simple elements ko return
// ! variable
// ! object use
// ! array with .map method

function App() {


  const list = [
    {
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const name = "Ali"

  const obj = {
    a: "ahmad"
  }
  obj.b = "hannan"

  return (
    <div>
      <img className="image" src={logo}></img>
      <h1>this is my image</h1>
      <p>this is my paragraph</p>
      <h2> My name is {name}</h2>
      <h2> My name is {obj.a}{obj.b}</h2>
      {list.map((item)=><h1>Title: {item.title}</h1>)}
    </div>
  );
}

export default App;
