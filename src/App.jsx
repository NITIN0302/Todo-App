import { useState } from "react";
import { Todoprovider } from "./context/TodoContext.js";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => {
      [...prev, todo];
    });
  };

  const updatedTodo = (todo, id) => {
    setTodo((prev) => {
      prev.map((prevtodo) => {
        prevtodo.id === id ? todo : prevtodo;
      });
    });
  };

  const deleteTodo = (id) =>{
    setTodo((prev)=>{prev.filter((ele)=>{ele.id != id})})
  }

  const toggleComplete = (id) => {
    setTodo((prev) => {prev.map((ele)=>{ele.id === id ? {...ele, complete : !complete} : ele})})
  }

  return (
    <Todoprovider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
