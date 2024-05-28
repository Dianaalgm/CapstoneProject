const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const connectToDb = require('./config/connectToDb');

connectToDb()

app.use(cors());
app.use(express.json());
//Middleware ------------
const todoRouter = require('./routes/todoList');
const usersRouter = require('./routes/users');

app.use('/todo', todoRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
});
// const uri = process.env.DB_URL;
// mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex:true});

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection is established successfully");
// });


//Requiring the routes for CRUD------



