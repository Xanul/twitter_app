const User = require("../../app/models/User")



describe('Unit testing for User class', () => {
    test('Create an User object', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    
    })
})

describe('Unit testing for User class', () => {
    test('Add getters', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    
    })
})