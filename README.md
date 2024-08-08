## WORLD INFORMATION

###### A package for fetching world information

[world-information](https://www.npmjs.com/package/world-information/v/0.0.1 "world-information")

## Installation

> npm install world-information

##### This repository provides a comprehensive dataset based on the [ISO 3166 standard](https://en.wikipedia.org/wiki/ISO_3166-1 "ISO 3166 standard"), which includes internationally recognized codes for continents,countries,states & cities. The ISO 3166 standard is a globally accepted system used for identifying countries and their subdivisions, ensuring consistent and reliable data across various applications.

##### world-information is a comprehensive npm package designed to provide detailed geographical information. It includes data on continents, countries, states, and cities, making it an essential tool for applications that require location-based data.

#### Features:

- Continent Data: Features standard codes and names for continents as per ISO 3166-1.
- Country Data: Includes ISO 3166-1 alpha-2 (2-letter), alpha-3 (3-letter), and numeric codes for countries.

####  AVAILABLE METHODS & ARRAY:

	Continent array
	Country array
	State array
	getCountryByContinentName(continentName);
	getStateByCountryName(countryName);


#### COMING SOON:

	Cities
	getCitiesByStateName(stateName);

###### Note : Above lists and methods are currently being enhanced and will be available in future updates.

-------------------------------------------------------------------------------------------------

##### EXAMPLE TO FETCH CONTINENT LIST :

    const worldInformation = require('world-information');
    
    // Get a list of continents
    const continents = worldInformation.continentList;
    console.log(continents);
    
    // Output:
    // [
    //   { name: 'Africa', code: 'AF' },
    //   { name: 'Antarctica', code: 'AN' },
    //   { name: 'Asia', code: 'AS' },
    //   { name: 'Europe', code: 'EU' },
    //   { name: 'North America', code: 'NA' },
    //   { name: 'Oceania', code: 'OC' },
    //   { name: 'South America', code: 'SA' }
    // ]

##### The current version includes data for all 7 continents.

##### EXAMPLE TO FETCH COUNTRY LIST :

    const worldInformation = require('world-information');
        
    // Get a list of countries
    const countries = worldInformation.countryList;
    console.log(countries);
    
    // Output (sample):
    // [
    //   { "name": "Afghanistan", "alpha-2": "AF", "alpha-3": "AFG", "numeric": "004", "continent": "Asia" },
    //  { "name": "Albania", "alpha-2": "AL", "alpha-3": "ALB", "numeric": "008", "continent": "Europe" },
    //   ...
    //   { "name": "Zimbabwe", "alpha-2": "ZW", "alpha-3": "ZWE", "numeric": "716", "continent": "Africa" }
    // ]

##### The current version includes data for all 196 countries.

##### EXAMPLE TO FILTER COUNTRY LIST BY CONTINENT NAME :

    const {getCountryByContinentName} = require("world-information");
    // Get a list of countries in asia continent
	/*
	Make sure the argument name is one of the below continent. 
	I have also configured the JSDoc Annotations, So you will get the suggestions too.
	The argument value(continent name) is case insensitive.
	'Africa' | 'Antarctica' | 'Asia' | 'Europe' | 'North America' | 'Oceania' | 'South America'
	*/
    const asianCountries = getCountryByContinentName("Asia");
    console.log(asianCountries);
    
     // Output (sample):
    [
      { "name": "Afghanistan", "alpha-2": "AF", "alpha-3": "AFG", "numeric": "004", "continent": "Asia" },
	  { "name": "Armenia", "alpha-2": "AM", "alpha-3": "ARM", "numeric": "051", "continent": "Asia" },
      ...
      { "name": "Yemen", "alpha-2": "YE", "alpha-3": "YEM", "numeric": "887", "continent": "Asia" },
    ]

##### EXAMPLE TO FILTER STATE LIST BY COUNTRY NAME :

const {getStateByCountryName} = require("world-information");

    // Get a list of states in india
    /*
    Make sure the argument name is one of the below country. 
    I have also configured the JSDoc Annotations, So you will get the suggestions too.
    The argument value(country name) is case insensitive.
    'Afghanistan' | 'Albania' | 'Algeria' | 'Andorra' | 'Angola' | 'Antigua and Barbuda' | 'Argentina' | 'Armenia' | 'Australia' | 'Austria' | 'Azerbaijan' | 'Bahamas' | 'Bahrain' | 'Bangladesh' | 'Barbados' | 'Belarus' | 'Belgium' | 'Belize' | 'Benin' | 'Bhutan' | 'Bolivia' | 'Bosnia and Herzegovina' | 'Botswana' | 'Brazil' | 'Brunei' | 'Bulgaria' | 'Burkina Faso' | 'Burundi' | 'Cabo Verde' | 'Cambodia' | 'Cameroon' | 'Canada' | 'Central African Republic' | 'Chad' | 'Chile' | 'China' | 'Colombia' | 'Comoros' | 'Congo' | 'Costa Rica' | 'Croatia' | 'Cuba' | 'Cyprus' | 'Czech Republic' | 'Denmark' | 'Djibouti' | 'Dominica' | 'Dominican Republic' | 'Ecuador' | 'Egypt' | 'El Salvador' | 'Equatorial Guinea' | 'Eritrea' | 'Estonia' | 'Eswatini' | 'Ethiopia' | 'Fiji' | 'Finland' | 'France' | 'Gabon' | 'Gambia' | 'Georgia' | 'Germany' | 'Ghana' | 'Greece' | 'Grenada' | 'Guatemala' | 'Guinea' | 'Guinea-Bissau' | 'Guyana' | 'Haiti' | 'Honduras' | 'Hungary' | 'Iceland' | 'India' | 'Indonesia' | 'Iran' | 'Iraq' | 'Ireland' | 'Israel' | 'Italy' | 'Jamaica' | 'Japan' | 'Jordan' | 'Kazakhstan' | 'Kenya' | 'Kiribati' | 'Korea, North' | 'Korea, South' | 'Kuwait' | 'Kyrgyzstan' | 'Laos' | 'Latvia' | 'Lebanon' | 'Lesotho' | 'Liberia' | 'Libya' | 'Liechtenstein' | 'Lithuania' | 'Luxembourg' | 'Madagascar' | 'Malawi' | 'Malaysia' | 'Maldives' | 'Mali' | 'Malta' | 'Marshall Islands' | 'Mauritania' | 'Mauritius' | 'Mexico' | 'Micronesia' | 'Moldova' | 'Monaco' | 'Mongolia' | 'Montenegro' | 'Morocco' | 'Mozambique' | 'Myanmar' | 'Namibia' | 'Nauru' | 'Nepal' | 'Netherlands' | 'New Zealand' | 'Nicaragua' | 'Niger' | 'Nigeria' | 'North Macedonia' | 'Norway' | 'Oman' | 'Pakistan' | 'Palau' | 'Panama' | 'Papua New Guinea' | 'Paraguay' | 'Peru' | 'Philippines' | 'Poland' | 'Portugal' | 'Qatar' | 'Romania' | 'Russia' | 'Rwanda' | 'Saint Kitts and Nevis' | 'Saint Lucia' | 'Saint Vincent and the Grenadines' | 'Samoa' | 'San Marino' | 'Sao Tome and Principe' | 'Saudi Arabia' | 'Senegal' | 'Serbia' | 'Seychelles' | 'Sierra Leone' | 'Singapore' | 'Slovakia' | 'Slovenia' | 'Solomon Islands' | 'Somalia' | 'South Africa' | 'South Sudan' | 'Spain' | 'Sri Lanka' | 'Sudan' | 'Suriname' | 'Sweden' | 'Switzerland' | 'Syria' | 'Taiwan' | 'Tajikistan' | 'Tanzania' | 'Thailand' | 'Timor-Leste' | 'Togo' | 'Tonga' | 'Trinidad and Tobago' | 'Tunisia' | 'Turkey' | 'Turkmenistan' | 'Tuvalu' | 'Uganda' | 'Ukraine' | 'United Arab Emirates' | 'United Kingdom' | 'United States' | 'Uruguay' | 'Uzbekistan' | 'Vanuatu' | 'Vatican City' | 'Venezuela' | 'Vietnam' | 'Yemen' | 'Zambia' | 'Zimbabwe'
    */
    const indianStates = getStateByCountryName("India");
    console.log(indianStates);
    
    // Output (sample)
    [
        {name: 'Andhra Pradesh', code: 'IN-AP', country: 'India'},
        {name: 'Arunachal Pradesh', code: 'IN-AR', country: 'India'},
        ...
        {name: 'Puducherry', code: 'IN-PY', country: 'India'}
        
    ]



#### CONTRIBUTING:

Contributions are welcome! Please open an issue or submit a pull request on GitHub to help improve this package. &hearts;&hearts;&hearts;

###### This description provides a clear overview of the package's current capabilities and future enhancements, making it easier for users to understand and utilize the package.