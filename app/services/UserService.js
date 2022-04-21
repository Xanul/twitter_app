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

    static getAllUsernames(array){
        const userNames = array.map(element => element.username)
        return userNames
    }
}

const user = UserService.create(2, "Xanul", "Rodrigo")
const user2 = UserService.create(3, "Jorg123", "Jorge")
const userNames = UserService.getAllUsernames([user, user2])
// console.log(userNames)
// console.log(UserService.getAllUsernames(user))
// const userInfoList = UserService.getInfo(user)
// console.log(userInfoList)

module.exports = UserService

// console.log(UserService.create(1, "Xanul", "Rodrigo"))
