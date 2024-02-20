const mapArrToStrings = (arr) => {
    return arr
        .filter(Number.isInteger)
        .map(String)
}

module.exports = mapArrToStrings