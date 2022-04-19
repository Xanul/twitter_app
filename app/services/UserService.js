const User = require("../models/User")

class UserService {

    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }
}

module.exports = UserService

// console.log(UserService.create(1, "Xanul", "Rodrigo"))
