import { useState, useEffect } from "react";

const Footer = ({ deletComplete, list, btnHanlde,isComplte}) => {
 
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
  //   console.log(type, "type");
  // };

  return (
    <section className="flex w-500 h-14 rounded-sm text-sm text-gray-400 font-bold bg-white cursor-pointer">
      <div className=" flex-row w-32 h-14 pt-4 px-4">
        <span className="">{Complete.length} items left </span>
      </div>

      <div className="flex px-4  flex-row w-60 h-14">
        <button value="All" onClick={btnHanlde} className="flex-row mr-6 font-bold">
          All
        </button>
        <button value={false}  onClick={btnHanlde} className="flex-row mr-6 font-bold">
          Active
        </button>
        <button value={true} onClick={btnHanlde} className="flex-row mr-6 font-bold">
          Completed
        </button>
      </div>
      <div className=" flex-row w-32 pt-4 px-2">
        <span onClick={deletComplete}>Clear Completed</span>
      </div>
    </section>
  );
};
export default Footer;
