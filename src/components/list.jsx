import { useState } from "react";
import EnterTask from "./enterTask";
import Footer from "./footer";
import YourTask from "./yourTask";

const List = ({isChangen,setIschangen,list,setNewlist }) => {
  //let isChange = false;
  //const[isChangen,setIschangen]=useState(false);
  const [type, setType] = useState("All");
  const [newTask, setNewtask] = useState("");
  //const [list, setNewlist] = useState([]);
  //console.log(isChangen)
  //console.log(counter)

  const changeHandle = (e) => {
    setNewtask(e.target.value);
    // console.log(newTask);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  const addTask = () => {
    setNewlist([
      ...list,
      { id: Math.floor(Math.random() * 200), text: newTask, isComplte: false },
    ]);
    setNewtask("");
    //console.log(list);
  };
  const completeTask = (id) => {
    //console.log(id + "nist");
    const todos = [...list];

    const singleTodo = todos.find((l) => l.id === id);
    singleTodo.isComplte = !singleTodo.isComplte;
    //console.log(singleTodo , 'ddd')
    setNewlist(todos);
  };
  const deleteComplete = () => {
    setNewlist([]);
  };
  const btnHanlde = (e) => {
    setType(e.target.value)
    console.log(type)
    // let arr = [];
    // if (e.target.value === "All") {
    //   arr = list;
    // } else {
    //   //list.map((i) => console.log(i))
    //   // console.log();
    //   arr = list.filter((item) => item.isComplte.toString() == e.target.value);
    // }
    // //setType(arr);
    // console.log(arr);
    // else{
    //   arr=list.filter((item)=>item.isComplte === e.target.value)
    // }
    // setType(arr)
    //console.log(type);
  };
  const change = ()=>{
      // setIschangen(true)
      // if (isChangen){
      //   setIschangen(false);
      // }

    setIschangen(prevState=>!prevState)
  
    console.log(isChangen) 

   
  };
  
  return (
    <div className="mx-auto -mt-56 w-400">
      <div className="flex w-650 h-20">
        <span className="font-semibold text-4xl text-white">T O D O</span>
        <span onClick={change} className="block w-40 px-4 pt-3 ml-80">
          {isChangen?(
             <img
            className=""
            src={require("../components/assets/pic/icon-sun.svg").default}
            alt=""
          />
          ):(
              <img
            className=""
            src={require("../components/assets/pic/icon-moon.svg").default}
            alt=""/>
          )}
{/*          
           <img
            className=""
            src={require("../components/assets/pic/icon-sun.svg").default}
            alt=""
          /> */}
        </span>
      </div>
      <div className="bg-white w-500 mt-4 h-16 pt-2 rounded-sm">
        <EnterTask
          handleChange={changeHandle}
          handleKeyDown={handleKeyDown}
          newTask={newTask}
        />
      </div>
      <div className=" mt-6 w-400">
        {list.filter((item)=>{
           if (type === "All") {
             return item;
          }else if(item.isComplte.toString() == type){
            return item
          } 
        }).map((task, index) => {
          return (
            <YourTask
              key={index}
              id={task.id}
              text={task.text}
              isComplte={task.isComplte}
              completeTask={completeTask}
            />
          );
        })}
      </div>
      <div className="Footer mb-8">
        <Footer
          deletComplete={deleteComplete}
          list={list}
          btnHanlde={btnHanlde}
          isComplte={newTask.isComplte}
        />
      </div>
      
    </div>
  );
};
export default List;
