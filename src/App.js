import{useState} from "react"
import './App.css';
import Todo from './components/Todo';
import TodoNight from './components/todoNight';

function App() {
  const[isChangen,setIschangen]=useState(false);
  const [list, setNewlist] = useState([]);

 
  return (
    <div className="App">
      {/* <Todo isChangen={isChangen} setIschangen={setIschangen}/> */}
      {isChangen?(
         <Todo list={list} setNewlist={setNewlist} isChangen={isChangen} setIschangen={setIschangen} />
      ):(
         <TodoNight  list={list} setNewlist={setNewlist} isChangen={isChangen} setIschangen={setIschangen}/> 
      )}
     

    </div>
  );
}

export default App;
