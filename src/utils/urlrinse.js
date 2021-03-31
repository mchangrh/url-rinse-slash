/**
 * removes all queries and parameters
 * @param {String} url - URL to clean 
 */
 function removeQuery(url) {
    const noQuery = url.replace(/&.*/, '') // remove all queries
    const noParam = noQuery.split('?') // split by parameter
    return noParam[0] // return first result from parameter split
}

function defer(url) {
    return `https://anonym.to/?${url}`
}

async function unshorten(url) {
    const response = await fetch(url)
    return response.url
}

module.exports = {
    removeQuery,
    defer,
    unshorten
}
