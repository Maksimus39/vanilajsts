import {CityType} from "../02/02_02";
import {getStreetsTitlesOfGovernmentBuildings} from "./05_02";


let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012, repaired: false, address: {
                number: 100, street: {
                    title: "White street"
                }
            }
        }, {
            buildedAt: 2008, repaired: false, address: {
                number: 100, street: {
                    title: "Happy street"
                }
            }
        }, {
            buildedAt: 2020, repaired: false, address: {
                number: 200, street: {
                    title: "Hogwarts street"
                }
            }
        }],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {title: "Central Str"}
                }
            }, {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "Souths Park Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})


test("list of streets titles of goverments buidings", () => {
    let streets = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)


    expect(streets.length).toBe(2)
    expect(streets[0]).toBe("Central Str")
    expect(streets[1]).toBe("Souths Park Str")
})


