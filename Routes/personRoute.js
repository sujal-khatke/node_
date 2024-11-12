const express = require('express');
const router = express.Router();
const Person = require('./../models/person');
const {jwtAuthMiddleware, genrateToken} = require('./../jwt');
const { Error } = require('mongoose');

// Post method to save data
router.post('/signup', async (req, res) => {
    try {
        const data = req.body; //Asssuming the request body contains the person data

        // Create a new Person documet using the mongoose model
        const newPerson = new Person(data);

        // save the new person to the database
        const response = await newPerson.save();
        console.log("Data saved");

        const payload = {
            id : response.id,
            username : response.username
        }

        console.log(JSON.stringify(payload));

        const token = genrateToken(payload);
        console.log("Token is :", token);
        res.status(200).json({response: response, token: token});

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.post('/login', async(req, res) => {
    try {
        //Extract username and password from request body
        const {username, password} = req.body;

        //Find the user by username
        const user = await Person.findOne({username : username});

        // If the user does not exist and password doesnot match, retun error
        if (!user || !(await user.comparePassword(password))){
            return res.status(401).json({error : "Invalid username or password"});
        }
        // Generate token
        const payload = {
            id : user.id,
            username:user.username
        }
        const token = genrateToken(payload);
        
        //return token as response
        res.json({token});
    } catch (error) {
        console.error(err);
        req.status(500).json({error : "Insternal server"});
    }
})


//Profile Route
router.get('/profile', jwtAuthMiddleware, async(req, res) => {
    try {
        const userData = req.user;
        console.log("user Data",userData);

        const userId = userData.id;
        const  user = await Person.findById(userId);
        req.status(200).json({user});

    } catch (error) {
        
    }
})

// Get method to get data
router.get('/', jwtAuthMiddleware, async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
//Parameterized call API
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; // Extarct the work type from the URL Parameter

        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'Invalid work type' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const personId = req.params.id; //Extrct the id from the URL parameter
        const updatedPersonData = req.body; // Updated data for the person
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData, {
            new: true, // Return the updated document
            runValidators: true, // Run mongoose validation
        });

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('Data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; //Extrct the id from the URL parameter

        const response = await Person.findByIdAndDelete(personId);
        
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('Data Deleted');
        res.status(200).json({message : 'Person deleted succesfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})



module.exports = router;
