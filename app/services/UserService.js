const User = require("../models/User")

class UserService {

    static create(id, username, name) {
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(obj){
        return Object.values(obj) //Este metodo devuelve un arreglo con los valores correspondites del objeto
    }

    static updateUserUsername(obj, newData){
        obj.username = newData
    }
}

const user = UserService.create(2, "Xanul", "Rodrigo")
// const userInfoList = UserService.getInfo(user)
// console.log(userInfoList)

module.exports = UserService

// console.log(UserService.create(1, "Xanul", "Rodrigo"))
