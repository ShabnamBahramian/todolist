import { useState } from "react";

const Footer = ({ deletComplete, list,isComplte }) => {
  
  return (
    <section className="flex w-500 h-14 rounded-xl text-sm text-gray-400 font-bold bg-white cursor-pointer">
      <div className=" flex-row w-32 h-14 pt-4 px-4">
        <span className="">
          {
            list.filter((item)=>{
              if(!item.isComplte){
                  return item.length
              }
            })
          }
          items left
        </span>
      </div>
      <div className="flex px-4 pt-4 flex-row w-60 h-14">
        <span className="flex-row mr-6">All</span>
        <span className="flex-row mr-6">Active</span>
        <span className="flex-row mr-6">Completed</span>
      </div>
      <div className=" flex-row w-32 pt-4 px-2">
        <span onClick={deletComplete}>Clear Completed</span>
      </div>
    </section>
  );
};
export default Footer;
