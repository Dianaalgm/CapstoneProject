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
  
    const deleteTodo = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/todo/${id}`);
        setTodos((prevTodos) => prevTodos.filter(todo => todo._id !== id));
        console.log(`Todo with id ${id} deleted`);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
        <div className="todoContainer">
          <h2>To Do List</h2>
          <table className="table">
            <thead className="thead-light">
              <tr>
                {/* <th>User</th> */}
                <th>Task</th>
                <th>Completed</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbodyContainer">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <tr key={todo._id}>
                    {/* <td>{todo.user}</td> */}
                    <td>{todo.title}</td>
                    <td>{todo.completed ? 'Yes' : 'No'}</td>
                    <td>{todo.createdAt}</td>
                    <td>
                      <button onClick={() => deleteTodo(todo._id)}>Done</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No to-dos available</td>
                </tr>
              )}
            </tbody>
          </table>
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