const cheerio = require("cheerio");
const axios = require("axios");

const url = 'https://dotaunderlords.gamepedia.com/Alliances'

const get_alliances = async () => {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    var alliances = []
    $('h3 .mw-headline').each((i, span) => {
        var alliance = $(span).attr('id')
        if (alliance.includes('Mega'))
            return
        alliances.push(alliance)
    })
    console.log(alliances)
}
get_alliances()
// module.exports = get_heroes
