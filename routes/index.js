var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ken', (req,res,next)=>{
  res.json({hello: "Kenneth"})
})

module.exports = router;
 //