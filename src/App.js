import './App.css';
import List from './List.js';
import ClassComponent from './classComponent'

function App() {
  console.log(List);

  return (
    <div className="App">
      {List.map(item =>
        <div >
          <span>item : {+1} </span>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
      )
      
      }
<ClassComponent/>
    </div>
  );
}

export default App;





