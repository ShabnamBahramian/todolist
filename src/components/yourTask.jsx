const YourTask = ({ text, id, isComplte, completeTask }) => {
  return (
    <div className="w-500 h-14  pt-4 px-2 border-solid border-b-2 rounded-xl bg-white border-gray-200">
      <span
        onClick={() => completeTask(id)}
        className={`block w-6 h-6  border-solid border-2 ${isComplte && 'bg-check-pattern bg-cover'} border-gray-200  rounded-full`}
      >
      </span>
      <p className={`block w-300 mx-8 -mt-6 ${isComplte && `line-through`}`}>
        {text}
      </p>
    </div>
  );
};
export default YourTask;
