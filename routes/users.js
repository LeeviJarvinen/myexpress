var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//GET METODI
router.get('/eka', function(request,response) {
  response.send("Hei olen eka get")
});

//GET METODI PARAMETRILLÄ
router.get('/eka/:name', function(request,response) {
  response.send("Hei olen parametri "+request.params.name);
});

//GET METODI 2 PARAMETRILLÄ
router.get('/eka/:ename/:sname', function(request,response) {
  response.send("Hei olen parametri "+request.params.ename+" "+request.params.sname);
});

//POST METODI
router.post('/',function(request,response)  {
    response.send(request.body);
});

module.exports = router;