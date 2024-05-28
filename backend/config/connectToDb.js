//Connecting to Mongoose
require('dotenv').config()
const mongoose = require('mongoose');

const connectToDb = async() => {
    await mongoose.connect(process.env.DB_URL)
    console.log("Currently connected to MongoDB Cluster.")
};

module.exports = connectToDb