import React, { Component } from "react";

export default class CreateToDo extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onChangeCreatedAt = this.onChangeCreatedAt.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            username: '',
            title: '',
            completed: true,
            createdAt: new Date().toISOString().split('T')[0],
            users: []
        }
    }

    //will be called right before anything is displayed on page
    componentDidMount(){
        this.setState({
            users: ['Username'],
            username: 'test user'
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        }) 
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        }) 
    }
    onChangeCompleted(e) {
        this.setState({
            completed: e.target.checked
        }) 
    }
    onChangeCreatedAt(e) {
        this.setState({
            createdAt: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const todo = {
            username: this.state.username,
            title: this.state.title,
            completed: this.state.completed,
            createdAt: this.state.createdAt
        }
        console.log(todo)

        window.location= '/';
    }



    render() {
        return(
        <div>
            {/* This is to create input so the user can create a new to do task */}
            <h3>Create a New To Do Item</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Enter Username:</label>
                    {/* This is to select specific user  */}
                    <select 
                    // ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}  
                    onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                                return <option key={user} value={user}> {user} </option>;
                            })
                        }
                
                    </select>

                </div>
                
                <br/>
                {/* Same thing but for the rest, title,completion, etc */}
                <div className="form-group">
                    <label> To Do Task:</label>
                    <input 
                    type="text" 
                    required
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <label>Completed</label>
                    <input 
                    type="checkbox"
                    className="form-check-input"
                    checked={this.state.completed}
                    onChange={this.onChangeCompleted} 
                    />
                </div>
                <br/>
                <div className="form-group">
                    <label> Date:</label>
                    <input 
                    type="date" 
                    required
                    className="form-control"
                    value={this.state.createdAt}
                    onChange={this.onChangeCreatedAt}
                    />
                </div>           
                < br/>
                {/* Submit button */}
                <div className="form-group">
                 <input type="submit" value="Submit" className="btn btn-primary" />
                </div>

            </form>


        </div>  
        )
    }
}

// import React from 'react';

// const CreateToDo = () => (
//   <div>
//     <h2>Create ToDo</h2>
//   </div>
// );

// export default CreateToDo;