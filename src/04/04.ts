import {CityType, GovernmentBuildingsType} from "../02/02_02";

const ages = [18, 20, 22, 1, 100, 90, 14]

export const predicate = (age: number) => {
    return age > 90
}


const oldAges = [100]


export type CoursesType = {
    title: string
    price: number
}
const courses = [
    {
        title: "css",
        price: 110
    },
    {
        title: "js",
        price: 200
    },
    {
        title: "react",
        price: 150
    }
]

const cheapPredicate = (course: CoursesType) => {
    return course.price < 160
}


export const demolishHousesOnTheStreet = (city: CityType, happyStreet: string) => {
    city.houses = city.houses.filter(city=>city.address.street.title !== happyStreet )
}


export const getBuildingsWithStaffCountGreatherThen = (governmentBuildings: Array<GovernmentBuildingsType>, number: number) => {
return governmentBuildings.filter(gv=>gv.staffCount>number)
}