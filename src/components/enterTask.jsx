const EnterTask = ({ newTask, handleKeyDown, handleChange }) => {
  return (
    <div className="flex h-12 px-2">
      <span
        className={` w-6 h-6 mt-2 border-solid border-2 border-gray-200  rounded-full`}
      ></span>
      <input
        type="text"
        name="newTask"
        value={newTask}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className=" border-none focus:ring-0 outline:none shadow-none flex-1 "
      />
    </div>
  );
};
export default EnterTask;
