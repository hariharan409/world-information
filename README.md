## WORLD INFORMATION

###### A package for fetching world information

[world-information](https://www.npmjs.com/package/world-information/v/0.0.1 "world-information")

## Installation

> npm install world-information

##### world-information is a comprehensive npm package designed to provide detailed geographical information. It includes data on continents, countries, states, and cities, making it an essential tool for applications that require location-based data.

####  AVAILABLE METHODS & ARRAY:

	Continent array
	Country array
	getCountryByContinentName(continentName);


#### COMING SOON:

	States
	Cities
	getStatesByCountryName(countryName);
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
    //   { name: 'Afghanistan', code: 'AF', continent: 'Asia' },
    //   { name: 'Albania', code: 'AL', continent: 'Europe' },
    //   ...
    //   { name: 'Zimbabwe', code: 'ZW', continent: 'Africa' }
    // ]

##### The current version includes data for all 196 countries.

##### EXAMPLE TO FILTER COUNTRY LIST BY CONTINENT NAME :

    const {getCountryByContinentName} = require("world-information");
    // Get a list of countries in asia continent
	/*
	Make sure the argument name is one of the below continent. I have also configured the JSDoc Annotations, So you will get the suggestions too.
	'Africa' | 'Antarctica' | 'Asia' | 'Europe' | 'North America' | 'Oceania' | 'South America'
	*/
    const asianCountries = getCountryByContinentName("Asia");
    console.log(asianCountries);
    
     // Output (sample):
    [
      { name: 'Afghanistan', code: 'AF', continent: 'Asia' },
      { name: 'Armenia', code: 'AM', continent: 'Asia' },
      { name: 'Azerbaijan', code: 'AZ', continent: 'Asia' },
      { name: 'Bahrain', code: 'BH', continent: 'Asia' },
      { name: 'Bangladesh', code: 'BD', continent: 'Asia' },
      { name: 'Bhutan', code: 'BT', continent: 'Asia' },
      ...
      { name: 'Vietnam', code: 'VN', continent: 'Asia' },
      { name: 'Yemen', code: 'YE', continent: 'Asia' }
    ]

#### CONTRIBUTING:

Contributions are welcome! Please open an issue or submit a pull request on GitHub to help improve this package. &hearts;&hearts;&hearts;

###### This description provides a clear overview of the package's current capabilities and future enhancements, making it easier for users to understand and utilize the package.