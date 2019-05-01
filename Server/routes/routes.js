const passport = require("passport");
const user = require("../models/User").User;

module.exports = app => {
    app.get("/", (req, res) => {
        res.redirect("/api/auth/google");
    });

    app.get("/api/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );

    app.get("/api/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/dashboard");
        }
    );

    app.get("/api/auth/logout", (req, res) => {
        if (req.user) {
            console.log("%s Signed out", req.user.userID);
            req.logout();

        }
        res.redirect("/home");
    })

    app.get("/api/current_user", (req, res) => {
        let user = req.user || { userID: false };
        res.send(user);
        console.log("[GET][current_user]:");
        console.log(user);
    })
}