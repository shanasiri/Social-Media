const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

//const GithubStrategy = require('passport-github2').Strategy;

//const FacebookStrategy = require('passport-github2').Strategy;

const GOOGLE_CLIENT_ID = "928083351658-j43dqg3960uhqtsvrvoplvedakt6ibfl.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";

//GITHUB_CLIENT_ID = "ee7d5f352a55b9fe3ba5";

//GITHUB_CLIENT_SECRET = "b13cfcfb6f882fdf6fb4c39a6dd406238ec859cf";

/*passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null, profile)
}
));*/
 
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
})

passport.deserializeUser((user, done) => {
    done(null, user)
}) 