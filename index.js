const continentList = require("./json/continents.json");
const countryList   = require("./json/countries.json");
const stateList     = require("./json/states.json");

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
    return countryList.filter((country) => country.continent?.toLowerCase() === continent.toLowerCase());
}

/**
* Get states by country name
* @param {('Afghanistan' | 'Albania' | 'Algeria' | 'Andorra' | 'Angola' | 'Antigua and Barbuda' | 'Argentina' | 'Armenia' | 'Australia' | 'Austria' | 'Azerbaijan' | 'Bahamas' | 'Bahrain' | 'Bangladesh' | 'Barbados' | 'Belarus' | 'Belgium' | 'Belize' | 'Benin' | 'Bhutan' | 'Bolivia' | 'Bosnia and Herzegovina' | 'Botswana' | 'Brazil' | 'Brunei' | 'Bulgaria' | 'Burkina Faso' | 'Burundi' | 'Cabo Verde' | 'Cambodia' | 'Cameroon' | 'Canada' | 'Central African Republic' | 'Chad' | 'Chile' | 'China' | 'Colombia' | 'Comoros' | 'Congo' | 'Costa Rica' | 'Croatia' | 'Cuba' | 'Cyprus' | 'Czech Republic' | 'Denmark' | 'Djibouti' | 'Dominica' | 'Dominican Republic' | 'Ecuador' | 'Egypt' | 'El Salvador' | 'Equatorial Guinea' | 'Eritrea' | 'Estonia' | 'Eswatini' | 'Ethiopia' | 'Fiji' | 'Finland' | 'France' | 'Gabon' | 'Gambia' | 'Georgia' | 'Germany' | 'Ghana' | 'Greece' | 'Grenada' | 'Guatemala' | 'Guinea' | 'Guinea-Bissau' | 'Guyana' | 'Haiti' | 'Honduras' | 'Hungary' | 'Iceland' | 'India' | 'Indonesia' | 'Iran' | 'Iraq' | 'Ireland' | 'Israel' | 'Italy' | 'Jamaica' | 'Japan' | 'Jordan' | 'Kazakhstan' | 'Kenya' | 'Kiribati' | 'Korea, North' | 'Korea, South' | 'Kuwait' | 'Kyrgyzstan' | 'Laos' | 'Latvia' | 'Lebanon' | 'Lesotho' | 'Liberia' | 'Libya' | 'Liechtenstein' | 'Lithuania' | 'Luxembourg' | 'Madagascar' | 'Malawi' | 'Malaysia' | 'Maldives' | 'Mali' | 'Malta' | 'Marshall Islands' | 'Mauritania' | 'Mauritius' | 'Mexico' | 'Micronesia' | 'Moldova' | 'Monaco' | 'Mongolia' | 'Montenegro' | 'Morocco' | 'Mozambique' | 'Myanmar' | 'Namibia' | 'Nauru' | 'Nepal' | 'Netherlands' | 'New Zealand' | 'Nicaragua' | 'Niger' | 'Nigeria' | 'North Macedonia' | 'Norway' | 'Oman' | 'Pakistan' | 'Palau' | 'Panama' | 'Papua New Guinea' | 'Paraguay' | 'Peru' | 'Philippines' | 'Poland' | 'Portugal' | 'Qatar' | 'Romania' | 'Russia' | 'Rwanda' | 'Saint Kitts and Nevis' | 'Saint Lucia' | 'Saint Vincent and the Grenadines' | 'Samoa' | 'San Marino' | 'Sao Tome and Principe' | 'Saudi Arabia' | 'Senegal' | 'Serbia' | 'Seychelles' | 'Sierra Leone' | 'Singapore' | 'Slovakia' | 'Slovenia' | 'Solomon Islands' | 'Somalia' | 'South Africa' | 'South Sudan' | 'Spain' | 'Sri Lanka' | 'Sudan' | 'Suriname' | 'Sweden' | 'Switzerland' | 'Syria' | 'Taiwan' | 'Tajikistan' | 'Tanzania' | 'Thailand' | 'Timor-Leste' | 'Togo' | 'Tonga' | 'Trinidad and Tobago' | 'Tunisia' | 'Turkey' | 'Turkmenistan' | 'Tuvalu' | 'Uganda' | 'Ukraine' | 'United Arab Emirates' | 'United Kingdom' | 'United States' | 'Uruguay' | 'Uzbekistan' | 'Vanuatu' | 'Vatican City' | 'Venezuela' | 'Vietnam' | 'Yemen' | 'Zambia' | 'Zimbabwe')} country - The name of the country
* @returns {Object[]} Array of states in the given country
* @typedef {Object} State
* @property {string} name - The name of the state
* @property {string} code - The ISO code of the state
* @property {string} country - The country where the state is located
*/
const getStateByCountryName = (country) => {
    return stateList.filter((state) => state.country?.toLowerCase() === country.toLowerCase());
}




module.exports = {
    /* GET A LIST OF CONTINENTS */
    continentList,
    /* GET A LIST OF COUNTRIES */
    countryList,
    /* GET A LIST OF STATES */
    stateList,
    getCountryByContinentName,
    getStateByCountryName
}