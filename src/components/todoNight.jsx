import List from "./list"
import {useState} from "react"

const TodoNight=({isChangen,setIschangen,list, setNewlist})=>{
    return(
        <section className="mx-auto h-250">
        <img
          className=" absolute w-full h-300"
          src={require("./assets/pic/dark.jpg")}
          alt=""
        />
        <section className="relative h-400 mx-auto right-0 left-0">
            <List isChangen={isChangen} setIschangen={setIschangen} list={list} setNewlist={setNewlist}/>
        </section>
      </section>
    )
}
export default TodoNight