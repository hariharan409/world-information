const continentList = require("./json/continents.json");
const countryList   = require("./json/countries.json");

/**
 * Get countries by continent name
 * @param {('Africa' | 'Antarctica' | 'Asia' | 'Europe' | 'North America' | 'Oceania' | 'South America')} continent - The name of the continent
 * @returns {Object[]} Array of countries in the given continent
 * @typedef {Object} Country
 * @property {string} name - The name of the country
 * @property {string} code - The ISO code of the country
 * @property {string} continent - The continent where the country is located
 */
const getCountryByContinentName = (continent) => {
    return countryList.filter((country) => country.continent === continent);
}


module.exports = {
    /* GET A LIST OF CONTINENTS */
    continentList,
    /* GET A LIST OF COUNTRIES */
    countryList,
    getCountryByContinentName
}