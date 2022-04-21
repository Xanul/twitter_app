const UserService = require('./../services/UserService')

class UserView {
    
    static createUser(payload){
        if(payload === null) // Si el payload esta vacio entonces retorna un objeto con el error
        return {error: "El payload no existe o no contiene informacion"}
    }

}



module.exports = UserView