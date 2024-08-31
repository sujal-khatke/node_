const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000; // jaha par humne isse host kara vo machine hai mongodb atlas vo khud ka port no  deta hai agr vo nhi hoga tou local pe chal raha hoga


app.get('/', function (req, res) {
  res.send('Welcome to the Hotel ! How I can help you. We have list of menus.')
})

// Import router files
const personRoute = require('./Routes/personRoute');
const MenuItemRoutes = require('./Routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoute);
app.use('/menu', MenuItemRoutes);

app.listen(PORT, () => console.log("Listening on port 3000"));