// import React from "react";
// //Similar code to createtodo.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditToDo = () => {
//   const [username, setUsername] = useState('');
//   const [title, setTitle] = useState('');
//   const [completed, setCompleted] = useState(false);
//   const [createdAt, setCreatedAt] = useState(new Date().toISOString().split('T')[0]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/users');
//         const usersData = response.data;

//         if (usersData.length > 0) {
//           setUsers(usersData.map(user => user.username));
//           setUsername(usersData[0].username);
//         }
//       } catch (error) {
//         console.error("There was an error fetching the users!", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const todo = {
//       username,
//       title,
//       completed,
//       createdAt
//     };

//     try {
//       const response = await axios.post('http://localhost:3000/todo/update/:id', todo);
//       console.log(response.data);
//     //   window.location = '/';
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>Create a New To Do Item</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label>Enter Username:</label>
//           <select
//             required
//             className="form-control"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           >
//             {users.map((user) => (
//               <option key={user} value={user}>{user}</option>
//             ))}
//           </select>
//         </div>
        
//         <br />
//         <div className="form-group">
//           <label>To Do Task:</label>
//           <input
//             type="text"
//             required
//             className="form-control"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <br />
//         <div className="form-group">
//           <label>Completed:</label>
//           <input
//             type="checkbox"
//             className="form-check-input"
//             checked={completed}
//             onChange={(e) => setCompleted(e.target.checked)}
//           />
//         </div>
//         <br />
//         <div className="form-group">
//           <label>Date:</label>
//           <input
//             type="date"
//             required
//             className="form-control"
//             value={createdAt}
//             onChange={(e) => setCreatedAt(e.target.value)}
//           />
//         </div>           
//         <br />
//         <div className="form-group">
//           <input type="submit" value="Submit" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditToDo;

//try to get this to be a button

// import React from 'react';

const EditToDo = () => (
  <div>
    <h2>Edit ToDo</h2>
  </div>
);

export default EditToDo;