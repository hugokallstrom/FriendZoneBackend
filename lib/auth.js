var passport = require('passport')

passport.use(new FacebookStrategy({
		clientID: 469773603205380,
		clientSecret: 7066a2fa349f51fc520d5a4e531cff58,
		callbackURL: "http://localhost:3000/auth/facebook/callback",
		enableProof: false
	},
	function(accessToken, refreshToken, profile, done) {
		User.findOrCreate({ facebookId: profile.id }, function (err, user) {
				return done(err, user);
		});
	}
));

exports.isAuthenticated = passport.authenticate('facebook', { scope : 'email' } );
