const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
    it('Correct value', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    it('Different values', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'string'])).toEqual(['1', '2', '3'])
    })
    it('Empty arr', () => {
        expect(mapArrToStrings([])).toEqual([])
    })
    it('Not same', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4, 5])
    })
})