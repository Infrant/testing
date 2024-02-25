const validateValueTest = require('./validateValue')

describe('validateTestValue', () => {
    test('Корректное значение среднее', () => {
        expect(validateValueTest(50)).toBe(true)
    })
    test('Пограничное минимальное', () => {
        expect(validateValueTest(0)).toBe(true)
    })
    test('Пограничное максимальное', () => {
        expect(validateValueTest(100)).toBe(true)
    })
    test('Меньше корректного', () => {
        expect(validateValueTest(-1)).toBe(false)
    })
    test('Больше корректного', () => {
        expect(validateValueTest(101)).toBe(false)
    })
})