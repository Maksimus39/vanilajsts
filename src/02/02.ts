type AddressType={
    streetTitle:string
    city:LocalCityType
}

type LocalCityType={
    title:string
    countryTitle:string
}

type TechType={
    id:number
    title:string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address:AddressType
    technologies:Array<TechType>
}





export const student: StudentType = {
    id: 1,
    name: "Max",
    age: 40,
    isActive: true,
    address: {
        streetTitle: "People's construction site",
        city: {
            title: "Lipetsk",
            countryTitle: "Russia"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        }, {
            id: 2,
            title: "CSS",
        }, {
            id: 3,
            title: "React",
        }
    ]
}

console.log(student.address.city.countryTitle)
console.log(student.technologies[2].title)
