var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

router.get('/',function(req,res,next){
    fetch('http://www.omdbapi.com/?apikey=2909f58f&i=tt0097493')
    .then(value => { return value.json(); })
    .then(value => {
        res.render('ps4',{title: value["Title"], plot: value["Plot"]});
    })
    .catch(err => {
        res.render('ps4',{movie: "Error"});
    })
});

module.exports = router;