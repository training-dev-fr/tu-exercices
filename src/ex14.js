async function fetchMultipleResources(fetchFunctions) {
    return Promise.all(fetchFunctions.map((fn) => fn()));
}

module.exports = {fetchMultipleResources};