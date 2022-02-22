
import Active from "./active";


const EnterTask = ({newTask,handleKeyDown,handleChange}) => {

  return (
    <div className="w-500 h-12  pt-3 px-2">
      <Active/>
     
      <input
        type="text"
        name="newTask"
        value={newTask}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
       
        className=" border-none focus:outline-none focus:shadow-none absolute w-400 mx-6 -mt-8"
      />
    </div>
  );
};
export default EnterTask;
