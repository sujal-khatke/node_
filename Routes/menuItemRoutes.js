const express = require('express');
const router = express.Router();

const MenuItem = require('../models/MenuItem');

// Task -  menu api get and post

// Post method to save data
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);

    const response = await newMenu.save();
    console.log("Data Saved");
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Intrnal Server Error' });
  }
})

// Get method to get Menu Items 

router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Data Fetched");
    res.status(200).json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

})

//Parameterized call API
router.get('/:tasteType', async (req, res) => {
  try {

    const tasteType = req.params.tasteType; // Extarct the work type from the URL Parameter

    if (tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spice') {
      const response = await MenuItem.find({ taste: tasteType });
      console.log('response fetched');
      res.status(200).json(response);

    }
    else {
res.status(404).json({error : 'Invalid taste Type'})
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

//API all for Data updated by id
router.patch('/:id', async (req, res) => {
  try {
    const personId = req.params.id;  // Extract the id from the URL parameter
    const updatedPersonData = req.body; // Updated data for the person
    
    const response = await MenuItem.findByIdAndUpdate(personId, updatedPersonData, {
      new: true, // Return the updated document
      runValidators: true, // Run mongoose validation
    });

    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }

    console.log('Data updated');
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API call for Data Deleted by id 
router.delete('/:id', async (req, res) => {
  try {
      const personId = req.params.id; // Extract the id from the URL parameter
      const response = await MenuItem.findByIdAndDelete(personId);

      if (!response) {
          return res.status(404).json({ error: 'Person not found' });
      }

      console.log('Data Deleted');
      res.status(200).json({ message: 'Person deleted successfully' });

  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
// comment for testing in git 
module.exports = router;