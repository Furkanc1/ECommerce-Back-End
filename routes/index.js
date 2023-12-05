const express = require('express');
const router = express.Router();

// Import route files
const apiRoutes = require('./api');

// Use the route files
router.use('/api', apiRoutes);

module.exports = router;
