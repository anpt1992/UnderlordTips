const cheerio = require("cheerio");
const axios = require("axios");

const url = 'https://dotaunderlords.gamepedia.com/Heroes'

const get_alliances = async () => {
    const response = await axios.get(url);
    console.log(response)
    const $ = cheerio.load(response.data);
    $('table tr').each
}
get_alliances()
// module.exports = get_heroes
