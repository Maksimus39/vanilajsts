import {ManTypee} from "./Destructuring";


let props: ManTypee
beforeEach(() => {
    props = {
        name: "Max",
        age: 40,
        lessons: [{title: "1",name:"css"}, {title: "2",name:"html"},{title: "3",name:"react"}],
        address: {
            street: {
                title: "Narod street"
            }
        }
    }
})

test("", () => {

    // const age = props.age
    // const lessons=props.lessons
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(40)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Narod street")
    expect(props.name).toBe("Max")
})

test("should", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1,...restLessons]=props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls1.title).toBe("1")
    expect(restLessons.length).toBe(2)
    expect(restLessons[1].title).toBe("3")

    expect(restLessons[1]).toStrictEqual({title: "3",name:"react"})
})