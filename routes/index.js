var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Content = mongoose.model('Content');

router.get('/content', function(req, res, next) {
  Content.find(function(err, data){
    if(err){ return next(err); }
    res.json(data);
  });
});

router.post('/content', function(req, res, next){
  var content = new Content(req.body);
  content.save(function(err, content){
    if(err){ return next(err); }
    res.json(content);
  });
});

module.exports = router;
