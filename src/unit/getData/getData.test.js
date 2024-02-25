const getData = require('./getData')
const axios = require('axios')
const responseMock = require('./const')

jest.mock('axios')

describe('getData', () => {
    let response;
    beforeEach(() => {
        response = {
            data: responseMock
        }
    })

    it('correct value', async () => {
        axios.get.mockReturnValue(response)

        const data = await getData()

        expect(axios.get).toBeCalledTimes(1)
        expect(data).toEqual(['1', '2', '3'])
        expect(data).toMatchSnapshot()
    })
})