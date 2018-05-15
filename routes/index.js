var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});


router.get('/founder', function(req, res, next){
  res.render('founder', {title: 'founder'})
});

router.get('/founder/id', function(req, res, next){
  res.render('myfounder', { title: 'Founder/id'})
});



/*
router.post('/' , function(req, res, next){
  res.render('researchproject', { title: 'researchProjects'})
})



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
      if(!err) {
        console.log('La connexion à la base de données a été un succes');
      }
      else {
        console.log(err);
      }
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


var categorySchema = mongoose.Schema({
  categoryName: String,

})

var projectSchema = mongoose.Schema({
  title: String,
  description: String,
  category_id: String,
  creationDate: { type: Date, default: Date.now },
  effective: Number,
  entrepriseName: String,
  founder_id: String
})

var developerModel = mongoose.model('developers', developerSchema);
var  founderModel = mongoose.model('founders', founderSchema);
var projectSchema = mongoose.model('projects', projectSchema);
/*
var newdeveloper = new developerModel({
  email: "bonjour",
  password: 'avion',
});
*/

module.exports = router;
