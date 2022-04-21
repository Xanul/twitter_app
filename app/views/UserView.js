const UserService = require('./../services/UserService')

class UserView {
    
    static createUser(payload){
        if(payload === null || payload === undefined) {
            return {error: "El payload no existe o no contiene informacion"}
        } // Si el payload esta vacio entonces retorna un objeto con el error
        else if (payload.username === null || payload.name === null || payload.id === null) {
            return {error: "Se nececita un valor valido"}
        }
        else {
            return payload
        }
        
    }

}

const testPayloadObject = {
    username: "Xanul",
    name: null,
    id: "22"
}
console.log(UserView.createUser(testPayloadObject))

module.exports = UserView