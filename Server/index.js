const express = require("express");
const cookieSession = require("cookie-session");
const app = express();
const passport = require("passport");
const PORT = 3939;

require("./services/passport");

app.use(
    cookieSession({
        maxAge: 60 * 60 * 1000,
        keys: ["test"]
    })
);

app.use(passport.initialize());
app.use(passport.authenticate("session"));
//app.use(passport.session());

require("./routes/routes")(app);

app.listen(PORT, () => {
    console.log("Server is listening on port: %s", PORT);
})