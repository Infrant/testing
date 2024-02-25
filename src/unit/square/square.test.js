const square = require('./square')

describe('square', () => {
    let mockValue;
    beforeEach(() => {
        mockValue = Math.random()
    })
    beforeAll(() => {
        console.log('beforeAll')
    })

    it('Correct value', () => {
        expect(square(4)).toBe(16)
        expect(square(4)).toBeLessThan(20)
        expect(square(4)).toBeGreaterThan(10)
        expect(square(4)).not.toBeUndefined()
    })

    it('Math called', () => {
        const MathPowSpy = jest.spyOn(Math, 'pow')
        square(2)
        expect(MathPowSpy).toBeCalledTimes(1)
    })

    it('Math not called', () => {
        const MathPowSpy = jest.spyOn(Math, 'pow')
        square(1)
        expect(MathPowSpy).toBeCalledTimes(0)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
    afterAll(() => {
        console.log('afterAll')
    })
})