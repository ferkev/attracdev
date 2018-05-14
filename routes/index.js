var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

mongoose.connect("mongodb://ferkev:ferkev@ds119150.mlab.com:19150/attractdev",
    function(err) {
     //console.log(err);
    }
);






module.exports = router;
