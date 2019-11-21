const cheerio = require("cheerio");
const axios = require("axios");

const url = 'https://dotaunderlords.gamepedia.com/Heroes'

const get_heroes = async () => {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    var tiers = []

    $('table tbody tr').each((index, tr) => {
        var heroes = []
        $(tr).find(' td div').each((index, td) => {
            var hero = {}
            $(td).find('div').eq(0).each((index, div) => {
                $(div).find('a').each((i, a) => {
                    var name = $(a).attr('title')
                    hero.name = name
                    // console.log(name)
                })
            })
            var alliances = []
            $(td).find('div').eq(1).each((index, div) => {
                $(div).find('a').each((i, a) => {
                    var alliance = $(a).attr('title')
                    alliances.push(alliance)
                    // console.log(alliance)
                })
            })
            if (alliances.length == 0)
                return
            hero.alliances = alliances
            heroes.push(hero)
        })
        if (heroes.length == 0)
            return
        tiers.push(heroes)
    })
    console.log(tiers)
}
get_heroes()
// module.exports = get_heroes
