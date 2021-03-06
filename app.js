
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var rss = require('./routes/rss');
var mongodbtest = require('./routes/mongodbtest');
var http = require('http');
var path = require('path');
var lessMiddleware = require('less-middleware');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
// lessファイルをコンパイルする指定？
app.use(lessMiddleware({
	src: path.join(__dirname, "public"),
	compress: true,
	force: true
}));
//静的ファイルのありかの指定か
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/rss20', rss.rss20);
app.get('/mongodbtest', mongodbtest.mongodbtest);
app.post('/mongodbtest', mongodbtest.mongodbtest);

// hello world page.
app.get("/hello.world", function(req, res) {
  var body = "Hello World";
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", Buffer.byteLength(body));
  res.end(body);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
