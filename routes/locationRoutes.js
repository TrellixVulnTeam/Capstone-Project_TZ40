const express = require('express');
const controller = require('../controllers/locationController');
const router = express.Router();

//Handles the choosing preferences page
router.get("/preferences", controller.pref);

//Post request for preferences page
//router.post('/', controller.choose);

//handles the Rate preferences page
router.get('/ratings' , controller.ratings);

//Post request for ratings page
//router.post('/', controller.ratings);

//Handles the details page
router.get('/locations/:id' , controller.details);

//handles the results page
router.get('/locations' , controller.results);


module.exports = router;