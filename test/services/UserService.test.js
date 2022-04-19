const UserService = require("../../app/services/UserService");

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo")
        expect(user.username).toBe("carlogilmar")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})

describe("Test for UserService", () =>{
    test("2. Test UserService static method", () => {
        const user = UserService.create(2, "Xanul", "Rodrigo")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(2)
        expect(userInfoList[1]).toBe("Xanul")
        expect(userInfoList[2]).toBe("Rodrigo")
        expect(userInfoList[3]).toBe("Sin Bio")
    })
})