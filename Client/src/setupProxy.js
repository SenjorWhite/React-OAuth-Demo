const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy([
            "/api/auth/google",
            "/api/auth/logout",
            "/api/current_user"
        ], { target: "http://localhost:3939" })
    );
}