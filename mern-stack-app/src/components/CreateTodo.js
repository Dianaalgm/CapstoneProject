import React, { useState, useEffect } from "react";

const CreateToDo = () => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [createdAt, setCreatedAt] = useState(new Date().toISOString().split('T')[0]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(['Username']);
    setUsername('test user');
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const todo = {
      username,
      title,
      completed,
      createdAt
    };

    console.log(todo);

    window.location = '/';
  };

  return (
    <div>
      <h3>Create a New To Do Item</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Enter Username:</label>
          <select
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map((user) => (
              <option key={user} value={user}>{user}</option>
            ))}
          </select>
        </div>
        
        <br />
        <div className="form-group">
          <label>To Do Task:</label>
          <input
            type="text"
            required
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Completed</label>
          <input
            type="checkbox"
            className="form-check-input"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            required
            className="form-control"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </div>           
        <br />
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default CreateToDo;


// import React from 'react';

// const CreateToDo = () => (
//   <div>
//     <h2>Create ToDo</h2>
//   </div>
// );

// export default CreateToDo;