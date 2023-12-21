const dotenv = require('dotenv');
dotenv.config(`dotenv`);

const express = require('express');
const routes = require('./routes/api');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Where i will be using the routes created in the routes / api folder
app.use( routes );

// Sync Sequelize models to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
}).catch(( error ) => {
  console.error('Unable to sync Sequelize models:', error);
});