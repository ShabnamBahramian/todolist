import Active from "./active";

const YourTask = ({ text, id, isComplte }) => {
  return (
    <div className="w-500 h-14  pt-4 px-2 border-solid border-b-2 rounded-xl bg-white border-gray-200">
      <Active />
      <p className={`block w-300 mx-8 -mt-6 ${isComplte && `line-through`}`}>
        {text}
      </p>
    </div>
  );
};
export default YourTask;
