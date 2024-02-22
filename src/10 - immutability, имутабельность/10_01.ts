export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: string[]
}
export type UpdateSkillType = UserType & {
    updateSkill: number[]
}
type CompanyType = { id: number, title: string }
export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function makeHairStyle(u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }
    return userCopy
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u, address: {
            ...u.address, city: city
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u, laptop: {
            ...u.laptop, title: title
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {
    return {
        ...u, books: [...u.books, newBooks]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBooks: string) {
    return {
        ...u, books: u.books.map(b => b === oldBook ? newBooks : b)
    }
}

export function updateSkill(u: UserWithLaptopType & UserWithBooksType & UpdateSkillType, updateSkill: number, oldStyle: number) {
    return {
        ...u, updateSkill: u.updateSkill.map(n => n === oldStyle ? updateSkill : n)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType & UpdateSkillType, bookForDelete: string) {
    return {
        ...u, books: u.books.filter(b => b !== bookForDelete)
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, ID: number, Title: string) {
    return {
        ...u, companies: u.companies.map(co => co.id === ID ? {...u, title: Title} : co)

    }
}


export const companiesTitle = (companies: {
    [key: string]: Array<CompanyType>
}, userName: string, companyID: number, newTitle: string) => {
    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)
    return companyCopy
}