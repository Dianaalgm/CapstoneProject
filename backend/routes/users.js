const router = require('express').Router();
const User = require('../models/user');

router.get('/' , (req, res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.post('/add',(req,res)=>{
    console.log(req.body);
    const {username} = req.body;
    // const newUser = new User({username});
    if (!username) {
        return res.status(400).json('Error: username is required.');
    }

    const newUser = new User({ username });
    
    newUser.save()
        .then(()=> res.json(' New User added!'))
        .catch(err => res.status(400).json('Error:' + err));
    
})
module.exports = router;