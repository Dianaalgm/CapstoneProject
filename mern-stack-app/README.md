# Capstone Project README 

# Overview
 This project is a simple To-Do List application with a frontend built using React and a backend powered by Node.js and Express. The application allows users to create, edit, and manage their to-do items. Additionally, it supports user creation and management.

# Frontend File: 
app.js This file sets up the main structure of the front-end application using React. It includes the following components and libraries:

Libraries and Dependencies:

react-router-dom: This is used to handle routing in the application. bootstrap: For styling

Components: Navbar: The navigation bar component. ToDoList: Displays the list of to-do items. EditToDo: Component to edit existing to-do items. CreateToDo: Component to create new to-do items. CreateUser: Component to create new users.

# Backend File: 
server.js This file sets up the backend server using Express. It includes:

Libraries and Dependencies:

express: This is used to create the server and handle HTTP requests. cors: For handling Cross-Origin Resource Sharing (CORS). mongoose: This is used to connect to the MongoDB database. Environment Variables:

.env file is used to manage environment variables like the port number and database connection string. Middleware and Routes:

todoRouter: Handles routes related to to-do items. usersRouter: Handles routes related to users.

# Challenges 
During the development of this project, I encountered several challenges such as : 

*Database Connectivity: I faced issues getting my routes to connect to the database. These problems were often due to misspellings or misplaced parentheses/annotations.

*Repository Management: I had trouble pushing my project. Initially, only the backend files were being pushed to the repository. To resolve this, I had to create a new repository. With some help, I was able to commit and push both the backend and frontend files successfully.

# Solutions
To overcome these challenges and structure my project, I utilized various resources such as: *YouTube tutorials *Past class Zoom recordings

# Future Plans 
Although I wasn't able to add my personal touch of styling in time, I plan to continue working on this project. My goals include: *Adding an edit button. *Enhancing the styling to make the application more visually appealing

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
