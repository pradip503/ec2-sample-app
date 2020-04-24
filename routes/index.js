var express = require('express');
var router = express.Router();

var controllers = require('../controllers/index');

/* GET home page. */
router.get('/', controllers.getData);

// route for inserting data
router.post('/insertData', controllers.insertData);

// route for deleting data
router.get('/delete/:id', controllers.deleteData);

module.exports = router;
