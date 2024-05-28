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
            createdAt: new Date(),
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
            completed: e.target.value
        }) 
    }
    onChangeCreatedAt(date) {
        this.setState({
            createdAt: date
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
            <h3>Create a New To Do Item</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                                return <option key={user}
                                value={user}> {user} </option>;
                            })
                        }
                
                    </select>

                </div>

                {/* Same thing but for the rest, title,completion */}
                <div className="form-group">
                    <label> Title of Task:</label>
                    <input type="text" 
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeTitle}
                    />

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