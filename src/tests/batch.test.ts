import { createBatches } from "../batch"


describe("When using the Batch class", () => {

    describe("When creating a Batch", () => {
        it("Should batch strings", () => {
            const items = ["1", "2", "3"]
            const batches = createBatches({ batch: items }, 2)
            expect(batches.length).toBe(2)
        })

        it("Should batch objects", () => {
            const object1 = {
                id: 1,
            }
            const object2 = {
                id: 2,
            }
            const items = [object1, object2]
            const batches = createBatches({ batch: items }, 1)
            expect(batches.length).toBe(2)
        })

        it("Should change the number in the batches", () => {
            const numberInBatch = 4
            const items = ["1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3"]
            const batches = createBatches({ batch: items }, numberInBatch)
            expect(batches.length).toBe(Math.ceil(items.length / numberInBatch))
        })
    })
})
