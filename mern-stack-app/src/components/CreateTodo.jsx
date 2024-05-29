import React, { useState, useEffect } from "react";
import axios from 'axios';

const CreateToDo = () => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [createdAt, setCreatedAt] = useState(new Date().toISOString().split('T')[0]);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   setUsers(['Username']);
  //   setUsername('test user');
  // }, []);

  //This is to give us options for selecting a username that is already
  //in the database-----
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;
        
        if (users.length > 0) {
          setUsers(users.map(user => user.username));
          setUsername(users[0].username);
        }
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      }
    };

    fetchUsers();
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

    axios.post('http://localhost:3000/todo/add', todo)
            .then(res => {
                console.log(res.data);
                
            })
            .catch(error => console.error('Error:', error));

    window.location = '/';
  };
  // componentDidMount() {
  //   axios.get('http://localhost:3000/users')
  //   .then(response => {
  //     if (response.data.length>0) {
  //       this.setState({
  //         users: response.data.map(user => user.username),
  //         username: response.data[0].username
  //       })
  //     }

  //   })
  // }

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