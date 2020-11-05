const enhancer = require('./enhancer.js');

// Items:
// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.

describe("enhancer unit tests", () => {

    it("repairs", () => {
        expect(enhancer.repair({
            "name": "item",
            "enhancement": 10,
            // The repair method accepts an item object and returns a new item object with the durability restored to 100. (see line 14)
            "durability": 50
        })).toEqual({
            "name": "item",
            "enhancement": 10,
            "durability": 100
        })
    })

    it("enhances an item", () => {
        expect(enhancer.success({
            "name": "item",
            // The success method increases the item's enhancement by 1. (see line 26)
            "enhancement": 19,
            "durability": 100
        })).toEqual({
            "name": "item",
            "enhancement": 20,
            "durability": 100
        })
    })

    it("enhances an item", () => {
        expect(enhancer.success({
            "name": "item",
            // If the item's enhancement level is 20, the enhancement level is not changed. (see line 39)
            "enhancement": 20,
            "durability": 100
        })).toEqual({
            "name": "item",
            "enhancement": 20,
            "durability": 100
        })
    })

    it("fails to enhance an item", () => {
        expect(enhancer.fail({
            "name": "item",
            // If the item's enhancement level is > 16, the enhancement level decreases by 1. (see line 50)
            // If the item's enhancement level is 15 or more, the durability of the item is decreased by 10. (see line 51)
            "enhancement": 17,
            "durability": 100
        })).toEqual({
            "name": "item",
            "enhancement": 16,
            "durability": 90
        })
    })

    it("fails to enhance an item", () => {
        expect(enhancer.fail({
            "name": "item",
            // If the item's enhancement level is less than 15, the durability of the item is decreased by 5. (see line 64)
            "enhancement": 14,
            "durability": 100
        })).toEqual({
            "name": "item",
            "enhancement": 14,
            "durability": 95
        })
    })
})