const router = require('express').Router();
const ToDo = require('../models/to-doList');

// Get all to-do items
router.get('/', (req, res) => {
    ToDo.find()
        .then(todoList => res.json(todoList))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new to-do item
router.post('/add', (req, res) => {
    console.log(req.body); // Log the request body to debug
    const { username, title, completed, createdAt } = req.body;

    if (!username || !title) {
        return res.status(400).json('Error: username and title are required.');
    }

    let createdDate;
    try {
        createdDate = new Date(createdAt);
        if (isNaN(createdDate.getTime())) {
            throw new Error('Invalid Date');
        }
    } catch (error) {
        console.error('Date Parsing Error:', error);
        return res.status(400).json('Error: Invalid Date format for createdAt.');
    }

    const newToDo = new ToDo({
        username,
        title,
        completed: Boolean(completed),
        createdAt: createdDate
    });

    newToDo.save()
        .then(() => res.json('Todo added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get a to-do item by ID
router.get('/:id', (req, res) => {
    ToDo.findById(req.params.id)
        .then(todoList => res.json(todoList))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    ToDo.findByIdAndDelete(req.params.id)
        .then(() => res.json('To do item has been deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update a to-do item by ID
router.post('/update/:id', (req, res) => {
    const { username, title, completed, createdAt } = req.body;

    let createdDate;
    try {
        createdDate = new Date(createdAt);
        if (isNaN(createdDate.getTime())) {
            throw new Error('Invalid Date');
        }
    } catch (error) {
        console.error('Date Parsing Error:', error);
        return res.status(400).json('Error: Invalid Date format for createdAt.');
    }

    ToDo.findByIdAndUpdate(req.params.id, {
        username,
        title,
        completed: Boolean(completed),
        createdAt: createdDate
    }, { new: true })
        .then(todoList => res.json('To do item is updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

    // const username = req.body.username;
    // const title = req.body.title;
    // const completed = Boolean(req.body.completed);
    // const createdAt = Date.default(req.body.date);

