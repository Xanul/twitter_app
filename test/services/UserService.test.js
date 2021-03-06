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

    test("3. Update username", ()=> {
        const user = UserService.create(3, "carlogilmar", "Carlo")
        UserService.updateUserUsername(user, "carlog")
        expect(user.username).toBe("carlog")
    })

    test("4. Given a list of users give me the list of usernames", ()=>{
        const user1 = UserService.create(1, "carlogilmar1", "Carlo")
        const user2 = UserService.create(1, "carlogilmar2", "Carlo")
        const user3 = UserService.create(1, "carlogilmar3", "Carlo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("carlogilmar1")
        expect(usernames).toContain("carlogilmar2")
        expect(usernames).toContain("carlogilmar3")
    })
})

