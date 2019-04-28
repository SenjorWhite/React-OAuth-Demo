const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User").User;
const keys = require("../configs/keys");

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((userID, done) => {
    let user = User.findUser(userID);
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: "/api/auth/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        let existingUser = User.findUser(profile.id);

        if (!existingUser) {
            existingUser = User.addUser(profile.id, profile.displayName);
        }

        return done(null, existingUser);
    }
));