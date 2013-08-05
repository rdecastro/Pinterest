// Date:    8/4/13
// Author:  Ray Joseph De Castro
// Company: Advanced Upward Motion

exports.index = function(req, res){
  'use strict';

  console.log('Request: ' + req);
  res.render('index', { title: 'Pinterest' });
};

exports.tests = function(req, res){
  'use strict';

  console.log('Request: ' + req);
  res.render('tests', { title: 'Unit Tests'});
};