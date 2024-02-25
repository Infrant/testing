import counterSlice, {decrement, increment} from "./counterSlice";

describe('test counterSlice', () => {
    test('increment', () => {
        expect(counterSlice({value: 0}, increment())).toEqual({value: 1})
    })

    test('decrement', () => {
        expect(counterSlice({value: 0}, decrement())).toEqual({value: -1})
    })

    test('with empty store', () => {
        expect(counterSlice(undefined, increment())).toEqual({value: 1})
        expect(counterSlice(undefined, decrement())).toEqual({value: -1})
    })
})