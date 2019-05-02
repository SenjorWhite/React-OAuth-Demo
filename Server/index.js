const express = require("express");
const cookieSession = require("cookie-session");
const path = require("path");
const app = express();
const passport = require("passport");
const PORT = 3939;

require("./services/passport");

app.use(express.static(path.resolve(__dirname, "../Client/build")));

app.use(
    cookieSession({
        maxAge: 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY || "dev_test"]
    })
);

app.use(passport.initialize());
app.use(passport.authenticate("session"));

require("./routes/routes")(app);

app.listen(PORT, () => {
    console.log("Server is listening on port: %s", PORT);
})