import {getCounterValue} from "./getCounterValue";

describe('getCounterValue', () => {
    it('empty store', () => {
        expect(getCounterValue({})).toBe(0)
    })

    it('with filled store', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
    })
})