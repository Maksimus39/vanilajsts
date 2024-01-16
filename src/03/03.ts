import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getDate(), title: skill})
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName
}


export const addMoneyToBudget = (governmentBuildings: GovernmentBuildingsType, budget: number) => {
    governmentBuildings.budget += budget
}


export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (governmentBuilding: GovernmentBuildingsType, staffCountToFire: number) => {
    governmentBuilding.staffCount -= staffCountToFire
}


export const toHireStaff = (governmentBuilding: GovernmentBuildingsType, staffCountToHire: number) => {
    governmentBuilding.staffCount += staffCountToHire
}


export function createMessage(city: CityType) {
    return "Hello " + city.title + " citizens"
}