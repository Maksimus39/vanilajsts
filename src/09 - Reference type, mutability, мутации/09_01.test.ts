type UserType = {
    name: string
    age: number
    address?: string
}
test('big reference type test', () => {
    let user: UserType = {
        name: "Max",
        age: 40
    }

    function increaseAge(u: UserType) {
        u.age++
    }

    increaseAge(user)

    expect(user.age).toBe(41)

    const superMan = user
    superMan.age = 1000

    expect(user.age).toBe(1000)

})


test('array test', () => {
    let users = [
        {
            name: "Max",
            age: 40
        },
        {
            name: "Max",
            age: 40
        }

    ]

    let admins = users
    admins.push({name: 'Bogdan', age: 10})
    expect(users[2]).toEqual({name: 'Bogdan', age: 10})
})

test('value type test', () => {
    let usersCount = 100

    let adminsCount = usersCount

    adminsCount = adminsCount + 1

    expect(adminsCount).toBe(101)
})

test('big reference type test-2', () => {
    let user: UserType = {
        name: "Max",
        age: 40,
        address: {
            title: 'Gryzi'
        }
    }

    type UserType = {
        name: string
        age: number
        address: { title: string }
    }

    let user2: UserType = {
        name: 'Larisa',
        age: 37,
        address: user.address
    }
    user2.address.title = 'Moscow'
    expect(user.address.title).toBe('Moscow')

})


test('big reference type array test', () => {
    const address = {
        title: 'Moscow'
    }
    let user = {
        name: 'Max',
        age: 40,
        address: address
    }
    let user2 = {
        name: 'Larisa',
        age: 37,
        address: address
    }

    const users = [user, user2, {name: 'Andrey', age: 7, address: address}]
    const admins = [user, user2]

    admins[0].name = "Maksim"

    expect(users[0].name).toBe("Maksim")
})

test('sort array test', () => {
    const letters = ['d', 'b', 'c', 'a']

    letters.sort()

    expect(letters).toEqual(['a', 'b', 'c', 'd'])
})

// function passportist(letters: any) {
//     const copy = letters.sort()
//     letters.sort(copy)
// }