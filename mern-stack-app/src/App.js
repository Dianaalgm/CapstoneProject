import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ToDoList from "./components/Todolist";
import EditToDo from "./components/EditToDo";
import CreateToDo from "./components/CreateTodo";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
        <Route path="/" exact component={ToDoList} />
        <Route path="/edit/:id" component={EditToDo} />
        <Route path="/create" component={CreateToDo} />
        <Route path="/user" component={CreateUser} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;