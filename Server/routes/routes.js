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
        req.logout();
        res.send("logout");
    })

    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    })

    app.get("/api/all_users", (req, res) => {
        res.send(user.getAllUsers());
    })
}