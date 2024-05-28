import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">ToDoApp</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Todos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Todo</Link>
        </li>
        <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;