const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    username: {type: String, required: true},
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const toDo = mongoose.model('toDo', toDoSchema);
module.exports = toDo;