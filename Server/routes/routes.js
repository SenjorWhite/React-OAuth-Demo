const passport = require("passport");

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
            res.send("Welcome!");
        }
    );

    app.get("/api/auth/logout", (req, res) => {
        req.logout();
    })

    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    })
}