import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateSkill, UpdateSkillType,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Max',
        hair: 40,
        address: {
            city: 'Dirt'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(20)
    expect(user.hair).toBe(40)
    expect(awesomeUser.address).toBe(user.address)
})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Max',
        hair: 40,
        address: {
            city: 'Dirt',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Moscow')
})
test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Max',
        hair: 40,
        address: {
            city: 'Dirt',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const userLaptop = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userLaptop)
    expect(user.laptop).not.toBe(userLaptop.laptop)
    expect(user.address).toBe(userLaptop.address)
    expect(userLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')

})
test('Upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Max',
        hair: 40,
        address: {
            city: 'Dirt',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js', 'React']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})
test('Add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Max',
        hair: 40,
        address: {
            city: 'Dirt',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js', 'React']
    }

    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)

    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')


})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Max',
        hair: 40,
        address: {
            city: 'Dirt',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js', 'React'],

    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)


    expect(userCopy.books[2]).toBe('ts')  // 1
})

test('update skill', () => {

    let user: UserWithLaptopType & UserWithBooksType & UpdateSkillType = {
        name: 'Max',
        hair: 40,
        address: {
            city: 'Dirt',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js', 'React'],
        updateSkill: [80, 55, 22, 46]
    }

    const userCopy = updateSkill(user, 1, 80)
    expect(userCopy.updateSkill[0]).toBe(1)

})

test('remove  js book', () => {

    let user: UserWithLaptopType & UserWithBooksType & UpdateSkillType = {
        name: 'Max',
        hair: 40,
        address: {
            city: 'Dirt',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js', 'React'],
        updateSkill: [80, 55, 22, 46]
    }

    const userCopy = removeBook(user, 'js')
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('React')

})