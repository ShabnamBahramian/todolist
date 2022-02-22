import { useState } from "react";
const Active = () => {
  const [isActive, setIsactive] = useState(false);
  
 
  return (
    <div>
     {isActive ? (
        <span className={`block w-6 h-6  border-solid border-2 border-gray-200 bg-red-600  rounded-full`}>
          {/* <img src={require("../components/assets/pic/check.svg")}/> */}
        </span>
      ) : (
        <span className=" block w-6 h-6  border-solid border-2 border-gray-200  rounded-full">
          {/* <img src={require("../components/assets/pic/check.svg")}/> */}
        </span>
      )}
    </div>
  );
};
export default Active;
