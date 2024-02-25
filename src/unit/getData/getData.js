const axios = require('axios')
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings')

const getData = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        const userIds = data.map(({id}) => id)

        return mapArrToStrings(userIds)
    } catch (e) {
        console.error(e)
    }

}

module.exports = getData