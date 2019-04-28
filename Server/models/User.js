const crypto = require("crypto");
const users = {};

const User = {
    addUser: function (userID, userName) {
        let hash = crypto.createHash("md5").update(userID).digest("hex");
        users[userID] = { id: hash, userID: userID, userName: userName };
        return users[userID];
    },
    findUser: function (userID) {
        let user = users[userID];
        return user || null;
    },
    removeUser: function (userID) {
        let isDeleted = false;
        let user = users[userID];
        if (user) {
            delete users[userID];
            isDeleted = true;
        }
        return isDeleted;
    }
}

module.exports.User = User;