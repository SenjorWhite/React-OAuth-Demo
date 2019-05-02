const passport = require("passport");
const path = require("path");

module.exports = app => {
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
        let user = req.user || false;
        res.send(user);
        console.log("[GET][current_user]:");
        console.log(user);
    })

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../../Client/build", "index.html"));
    })
}