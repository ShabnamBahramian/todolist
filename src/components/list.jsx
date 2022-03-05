import { useState } from "react";
import EnterTask from "./enterTask";
import Footer from "./footer";
import YourTask from "./yourTask";

const List = ({ isChangen, setIschangen, list, setNewlist }) => {
  //const [showCompleted, setShowCompleted] = useState([]);
  console.log(list,"jjj")
  const [type, setType] = useState("All");
  const [newTask, setNewtask] = useState("");

  const changeHandle = (e) => {
    setNewtask(e.target.value);
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
    // let arr = [];
    // arr = list.filter((s) => s.isComplte === true);
    // console.log("filter", arr);
    const arr = list.filter((s)=>s.isComplte === false)
    setNewlist(arr);
  };
  const btnHanlde = (e) => {
    setType(e.target.value);
    console.log(type);
  };
  const change = () => {
    // setIschangen(true)
    // if (isChangen){
    //   setIschangen(false);
    // }

    setIschangen((prevState) => !prevState);

    console.log(isChangen);
  };

  return (
    <div className="w-fit	pt-24 md:w-600 sm:w-400 mx-auto">
      <div className="flex mx-auto  h-20 justify-between">
        <span className="font-semibold text-4xl text-white">T O D O</span>
        <span onClick={change} className="block  px-4 pt-3">
          {isChangen ? (
            <img
              className=""
              src={require("../components/assets/pic/icon-sun.svg").default}
              alt=""
            />
          ) : (
            <img
              className=""
              src={require("../components/assets/pic/icon-moon.svg").default}
              alt=""
            />
          )}
          {/*          
           <img
            className=""
            src={require("../components/assets/pic/icon-sun.svg").default}
            alt=""
          /> */}
        </span>
      </div>
      <div className="bg-white mx-auto mt-4 h-16 pt-2 rounded-sm">
        <EnterTask
          handleChange={changeHandle}
          handleKeyDown={handleKeyDown}
          newTask={newTask}
        />
      </div>
      <div className=" mt-6">
        {list
          .filter((item) => {
            if (type === "All") {
              return item;
            } else if (item.isComplte.toString() == type) {
              return item;
            }
          })
          .map((task, index) => {
            return (
              <YourTask
                key={index}
                id={task.id}
                text={task.text}
                isComplte={task.isComplte}
                completeTask={completeTask}
              />
            );
          })
          }
          {/* {showCompleted.map((comp,index)=>{
              <YourTask
                key={index}
                text={comp.text}
              />
          })} */}
      </div>
      <div className="Footer mb-8">
        <Footer
          deleteComplete={deleteComplete}
          list={list}
          btnHanlde={btnHanlde}
          isComplte={list.isComplte}
        />
      </div>
    </div>
  );
};
export default List;
