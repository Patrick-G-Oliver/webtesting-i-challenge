const enhancer = require('./enhancer.js');

describe("enhancer unit tests", () => {

    it("repairs", () => {
        expect(enhancer.repair({
            "name": "item",
            "enhancement": 10,
            "durability": 50
        })).toEqual({
            "name": "item",
            "enhancement": 10,
            "durability": 100
        })
    })

    // it("enhances an item", () => {

    // })

    // it("fails to enhance an item", () => {

    // })
})



// it("repairs", () => {
    //     expect(enhancer.repair(item)).toEqual({
    //         ...item, 
    //         item.durability = 100
    //     })
    // })