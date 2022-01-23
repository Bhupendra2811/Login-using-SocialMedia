var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;

const GOOGLE_CLIENT_ID = "744119846143-i73s6h6vcf89ieru7frt6nlfh2abefkf.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null,profile)

  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})

GITHUB_CLIENT_ID = "95b094c9280fdada7965";
GITHUB_CLIENT_SECRET = "efa750f4315aec893e9338dd677d0cb78b7600c7";

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

