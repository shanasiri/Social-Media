const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "928083351658-j43dqg3960uhqtsvrvoplvedakt6ibfl.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
    /*const user = {
        username: profile.displayName
    }
    user.save();*/
})

passport.deserializeUser((user, done) => {
    done(null, user)
}) 