import { useState, useEffect } from "react";

const Footer = ({deleteComplete, list, btnHanlde, isComplte }) => {
  // const[n,setN]=useState([]);
  const [state, setState] = useState([]);
  const [Complete, setComplete] = useState([]);
  useEffect(() => {
    setState([...list]);
  }, [list]);
  useEffect(() => {
    setComplete(state.filter((s) => s.isComplte === false));
  }, [state]);

  // const handleBtn = (e) => {
  //   setType(e.target.value);

  // };
  // const deletComplete = (isComplte) => {
  //   let arr = []
  //     arr = list.filter((s) =>s.isComplte === true);
  //    console.log("filter",arr);
  
  // };

  return (
    <section className=" md:flex rounded-sm text-sm text-gray-400 font-bold bg-white cursor-pointer justify-between">
      <div className=" flex-row h-14 pt-4 px-4 sm:border-b-2 sm:border-gray-200 md:border-none">
        <span className=" block text-center">
          {Complete.length} items left{" "}
        </span>
      </div>

      <div className="flex  md:flex-row h-14 sm:border-b-2 sm:border-gray-200 md:border-none">
        <button
          value="All"
          onClick={btnHanlde}
          className=" flex-1 md:flex-row md:mr-4  font-bold "
        >
          All
        </button>
        <button
          value={false}
          onClick={btnHanlde}
          className=" flex-1 md:flex-row  md:mr-4 font-bold"
        >
          Active
        </button>
        <button
          value={true}
          onClick={btnHanlde}
          className="flex-1 md:flex-row  md:mr-4 font-bold"
        >
          Completed
        </button>
      </div>
      <div className=" md:flex-row pt-4 pb-4 px-2">
        <span className="block text-center" onClick={deleteComplete}>
          Clear Completed
        </span>
      </div>
    </section>
  );
};
export default Footer;
