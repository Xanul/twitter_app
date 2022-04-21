const UserView = require("../../app/views/UserView");

describe("Test for UserView", () => {
    test("Return an error object when try to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)        
    })
    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/nececita un valor valido/)
    })

    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Xanul"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/No ingresaste/)
    })
    
    test("Create a user with valid payload", () => {
        const payload = {username: "Xanul", name: "Rodrigo", id: 1}
        const result = UserView.createUser(payload)
        expect(result.username).toBe("Xanul")
        expect(result.name).toBe("Rodrigo")
        expect(result.id).toBe(1)
    })
    
})