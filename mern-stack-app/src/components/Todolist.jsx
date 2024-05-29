import React, { useEffect, useState } from "react";

import axios from "axios";

const Todolist = () => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      const fetchTodos = async () => {
        try {
          const res = await axios.get('http://localhost:3000/todo/');
          setTodos(res.data);
          console.log(res.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchTodos();
    }, []);
  
    return (
      <div className="todoContainer">
        <h3>This is the To Do List Component</h3>
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo.title}</li>
            ))}
          </ul>
        ) : (
          <p>No to-dos available</p>
        )}
      </div>
    );
  };
  
  export default Todolist;
// import React from 'react';

// const ToDoList = () => (
//   <div>
//     <h2>ToDo List</h2>
//   </div>
// );

// export default ToDoList;