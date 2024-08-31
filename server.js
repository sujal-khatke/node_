const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body


app.get('/', function (req, res) {
  res.send('Welcome to the Hotel ! How I can help you. We have list of menus.')
})

// Import router files
const personRoute = require('./Routes/personRoute');
const MenuItemRoutes = require('./Routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoute);
app.use('/menu', MenuItemRoutes);

app.listen(3000, () => console.log("Listening on port 3000"));