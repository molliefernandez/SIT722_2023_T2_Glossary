var express = require('express');
var router = express.Router();


const itemlist = [
  {'id': 1, 'title': 'Heading 1', 'description': 'This is a description fo the work'},
  {'id': 2, 'title': 'Heading 1', 'description': 'This is a description fo the work'},
  {'id': 3, 'title': 'Heading 1', 'description': 'This is a description fo the work'},
  {'id': 4, 'title': 'Heading 1', 'description': 'This is a description fo the work'},
   
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', subheading: 'some mroe informaiton here'});
});

module.exports = router;
