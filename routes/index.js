var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
router.post('/' , function(req, res, next){
  res.render('researchproject', { title: 'researchProjects'})
})

router.get('/founder/id')

router.get('/developer/id')

router.get('/projects')
router.get('/projects/id')

router.get('/register/founder')
router.post('/register/founder')


router.get('/register/developer')
router.post('/register/developer')

router.get('/login')
router.post('/login')

router.get('/admin')
*/

mongoose.connect("mongodb://ferkev:ferkev@ds119150.mlab.com:19150/attractdev",
    function(err) {
     console.log(err);
    }
);

var founderSchema = mongoose.Schema({
  entrepriseName: String,
  email: String,
  password: String
});

var developerSchema = mongoose.Schema({
  email: String,
  password: String,
  project_id: String
})


var projectSchema = mongoose.Schema({
  title: String,
  description: String,
  creationDate: { type: Date, default: Date.now },
  effective: Number,
  entrepriseName: String,
  founder_id: String
})

var developerModel = mongoose.model('developers', developerSchema);
var  founderModel = mongoose.model('founders', founderSchema);
var projectSchema = mongoose.model('projects', projectSchema);


module.exports = router;
