import React, { useState, useEffect } from "react";
import axios from 'axios';

const CreateUser = () =>{
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);


    useEffect(() => {
        setUsers(['Username']);
        setUsername('test user');
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            username:username
        }
        console.log(user)
        // window.location = '/user';

        axios.post('http://localhost:3000/users/add', user)
            .then(res => {
                console.log(res.data);
                // window.location = '/users';
            })
            .catch(error => console.error('Error:', error));

        // this is to merge with backend, a post request
        // const addUser = async (user) => {
        //     try {
        //         const response = await axios.post('http://localhost:3000/user/add', user);
        //         console.log(response.data);
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // };
        // addUser(user);
    }


    return(
        <div>
            <h3>Create a New User</h3>
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
                        <option key={user} value={user}>{user}</option>))}
                    </select>
                </div>
                
                <br />
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
    
            </form>

        </div>
    )
};

export default CreateUser;

// import React from 'react';

// const CreateUser = () => (
//   <div>
//     <h2>Create User</h2>
//   </div>
// );

// export default CreateUser;