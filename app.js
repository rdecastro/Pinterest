// Date:    8/4/13
// Author:  Ray Joseph De Castro
// Company: Advanced Upward Motion

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/tests', routes.tests);

app.get('/api', function (req, res) {

  // TODO: Refactor and move this out of here later.
  var mockJsonData = {
    id: 0,
    image_url: 'http://localhost:3000/images/image_1.jpg',
    repin_image_url: 'http://localhost:3000/images/repin_1.png',
    board_thumbnail_image_url: 'http://localhost:3000/images/board_thumbnail_1.jpg',
    note: 'yes 0!'
  };

  res.json(mockJsonData);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
