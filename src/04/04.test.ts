import {CoursesType, predicate} from "./04";

test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
    // expect(oldAges[1]).toBe(90)

})


test("should take chip courses chipper 160$", () => {
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

    const cours = courses.filter(cheapPredicate)

    expect(cours.length).toBe(2)
    expect(cours[0].title).toBe("css")
    expect(cours[1].title).toBe("react")


})

test("get only completed tasks", () => {
    const products = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Tea", isDone: false},
        {id: 4, title: "Sugar", isDone: true}
    ]

    const completedProducts = products.filter(pr => pr.isDone)
    expect(completedProducts.length).toBe(2)
    expect(completedProducts[0].title).toBe("Milk")
    expect(completedProducts[1].title).toBe("Sugar")
})


test("get only uncompleted tasks", () => {
    const products = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Tea", isDone: false},
        {id: 4, title: "Sugar", isDone: true}
    ]

    const uncompletedProducts = products.filter(pr => !pr.isDone)
    expect(uncompletedProducts.length).toBe(2)
    expect(uncompletedProducts[0].id).toBe(1)
    expect(uncompletedProducts[1].id).toBe(3)
})