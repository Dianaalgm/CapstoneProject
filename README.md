Capstone Project README
Overview
This project is a simple To-Do List application with a frontend built using React and a backend powered by Node.js and Express. The application allows users to create, edit, and manage their to-do items. Additionally, it supports user creation and management.

Frontend
File: app.js
This file sets up the main structure of the front-end application using React. It includes the following components and libraries:

Libraries and Dependencies:

react-router-dom: This is used to handle routing in the application.
bootstrap: For styling 

Components:
Navbar: The navigation bar component.
ToDoList: Displays the list of to-do items.
EditToDo: Component to edit existing to-do items.
CreateToDo: Component to create new to-do items.
CreateUser: Component to create new users.

Backend
File: server.js
This file sets up the backend server using Express. It includes:

Libraries and Dependencies:

express: This is used to create the server and handle HTTP requests.
cors: For handling Cross-Origin Resource Sharing (CORS).
mongoose: This is used to connect to the MongoDB database.
Environment Variables:

.env file is used to manage environment variables like the port number and database connection string.
Middleware and Routes:

todoRouter: Handles routes related to to-do items.
usersRouter: Handles routes related to users.

Challenges
During the development of this project, I encountered several challenges such as :
*Database Connectivity:
I faced issues getting my routes to connect to the database. These problems were often due to misspellings or misplaced parentheses/annotations.

*Repository Management:
I had trouble pushing my project. Initially, only the backend files were being pushed to the repository. To resolve this, I had to create a new repository. With some help, I was able to commit and push both the backend and frontend files successfully.

Resources
To overcome these challenges and structure my project, I utilized various resources such as:
*YouTube tutorials
*Past class Zoom recordings

Future Plans
Although I wasn't able to add my personal touch of styling in time, I plan to continue working on this project. My goals include:
*Adding an edit button.
*Enhancing the styling to make the application more visually appealing
