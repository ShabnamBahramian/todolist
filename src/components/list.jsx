import { useState } from "react";
import EnterTask from "./enterTask";
import Footer from "./footer";
import YourTask from "./yourTask";

const List = () => {
  const [newTask, setNewtask] = useState("");
  const [list, setNewlist] = useState([]);
  const [isActive, setIsactive] = useState(false);

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
    console.log(list);
  };

  return (
    <div className="mx-auto -mt-20 w-400">
      <div className="bg-white w-500 mt-4 h-16 pt-2 rounded-xl">
        <EnterTask
          handleChange={changeHandle}
          handleKeyDown={handleKeyDown}
          newTask={newTask}
        />
      </div>
      <div className=" mt-6 w-400 rounded-xl">
        {list.map((task) => {
          return (
            <YourTask
              id={task.id}
              text={task.text}
              isComplte={task.isComplte}
            />
            
          );
        })}
      </div>
      <div className="Footer mb-8">
        <Footer />
      </div>
    </div>
  );
};
export default List;
