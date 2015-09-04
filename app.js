var restify = require('restify');
var passport = require('passport');
var auth = require('./lib/auth.js');
var server = restify.createServer({
	name: 'FriendZoneBackend',
});

server.use(passport.initialize());
server.use(restify.bodyParser());
server.use(restify.authorizationParser());

function respond(req, res, next) {
		  res.send('hello ' + req.params.name);
		    next();
}

server.post('/login/facebook', auth.isAuthenticated, respond);

exports.start = function () {
	server.listen(process.env.PORT || 8080, function() {
		console.log('%s listening at %s', server.name, server.url);
	});
}

exports.close = function () {
	server.close();
}

this.start();
