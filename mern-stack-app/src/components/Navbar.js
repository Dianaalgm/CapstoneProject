import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">To Do App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
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

