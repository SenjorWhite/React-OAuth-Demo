const crypto = require("crypto");
const users = {};

const User = {
    addUser: function (userID, userName) {
        let hashID = crypto.createHash("md5").update(userID).digest("hex");
        users[hashID] = { id: hashID, userID: userID, userName: userName };
        return users[hashID];
    },
    findUser: function (hashID) {
        let user = users[hashID];
        return user || null;
    },
    removeUser: function (hashID) {
        let isDeleted = false;
        let user = users[hashID];
        if (user) {
            delete users[hashID];
            isDeleted = true;
        }
        return isDeleted;
    },
    getAllUsers: function () {
        return users;
    }
}

module.exports.User = User;