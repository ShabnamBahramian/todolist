import List from "./list";

const Todo = ({isChangen,setIschangen,list, setNewlist}) => {

  return (
      <section className="mx-auto h-250">
        <img
          className="absolute w-full h-300"
          src={require("../components/assets/pic/pic.jpg")}
          alt=""
        />
        <section className="relative mx-auto right-0 left-0">
           <List isChangen={isChangen} setIschangen={setIschangen} list={list} setNewlist={setNewlist}/> 
        </section>
      </section>
  
  );
};
export default Todo;
