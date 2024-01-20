export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const devs1 = [
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    }
]

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const devs2 = [
    d1, d2, d3
]

const devs3 = people.map(dimychTransformator)


const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welkom to it-inkubator`)

export const createGreetingMessage = (people: ManType[]) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welkom to it-inkubator`)
}