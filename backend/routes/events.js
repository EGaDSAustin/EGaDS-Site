const express = require('express');
const Event = require('../models/event');

const EventRouter = express.Router();

// example 
router.post("/", (req, res, next) => {
    // Form.deleteMany({email: "sexycatlady69@jimminycrickets.io"}, (err, res) => console.log(err.message));
    console.log("email: " + req.body.email);
    console.log("created");

    Form.findOne({email: req.body.email}).
    exec((err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }
        else if (!result) {
            //create
            result = new Form({...req.body, created: Date.now()});
            result.save().then(result => {
                console.log(`submission: ${result}\n saved`);
        
                res.status(201).json({
                    email: req.params.email,
                    status: "created"
                });
            }).catch(err => {
                console.log(err.message);
            });
        }
        else {
            res.status(500).json({
                error : {
                    message : "alread a submition under this email"
                }
            });
        }
    });
});



// routes
// get all requests
EventRouter.get('/', (req, res) => {
    const params = req.query;

    // limit find by page number
    Event.find()
    .exec((err, result) => {

    });
});

// get single event
EventRouter.get('/:id', (req, res) => {
    const id = req.params.id;

});



module.exports = EventRouter;
