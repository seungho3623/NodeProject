var express = require('express');
var router = express.Router();

/* 도서 관리 page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: '도서 관리', name:'송승호' });
});

module.exports = router;
