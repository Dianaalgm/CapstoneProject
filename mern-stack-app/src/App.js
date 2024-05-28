import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "./components/Navbar";
import ToDoList from "./components/Todolist";
import EditToDo from "./components/EditToDo";
import CreateToDo from "./components/CreateTodo";
import CreateUser from "./components/CreateUser";

const App = () => {
  return (
    <Router>
      <div className='navContainer'>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/edit/:id" element={<EditToDo />} />
          <Route path="/create" element={<CreateToDo />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;