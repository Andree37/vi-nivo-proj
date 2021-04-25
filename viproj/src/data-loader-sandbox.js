/*
Usar dataset tem a seguinte estrutura.
{
    data:
        [ Array of objects, each object is a dataset row ],
    countries: {
        'Portugal': {
                '2016': { Portugal row for 2016 },
                '2017': (...)
            },
        'Spain': {
            '2016': { Spanish row for 2016 },
            (...)
        },
        (...)
    },
    regions: {
        'Western Europe': [
                { Portugal in 2016 },
                { Portugal in 2017 },
                { Portugal in etc. },
                { Spain ... },
                { etc. }
        ],
        'Eastern Europe': [ etc. ]
    }
    ranks: {
        '2016' : {
            '1': { Country ranked in first },
            '2': { Country ranked in second  }
        }
    }
}

Each country has its Nivo.rocks objects for each type of chart

Like:
dataset.Portugal.nivo.radar
dataset.Portugal.nivo.lines
dataset.Portugal.nivo.pie
dataset.Portugal.nivo.bars

Inside each of this Nivo.rocks objects there is a meta object with info about how to use the Libraries.
Example:
    Portugal.nivo.radar.meta.name : Name for the Nivo.rocks chart
    Portugal.nivo.radar.meta.url  : Nivo.rocks tyoe of chart documentation
    Portugal.nivo.radar.meta.data : objeto com os dados formatados para o objeto
**/

// Example for accessing data

// Nice name for handling happiness, our function to read the dataset is the hapinessHandler :)
const happinessHandler = require('./data/hapiness-dataset/happiness');

happinessHandler.Happiness((err, dataset) => {
  if (err) return err;
  const Portugal = dataset.countries['Portugal'];

  // Example for accessing data for Nivo.rocks para portugal:
  console.log(Portugal.nivo.radar.data);
  console.log(Portugal.nivo.line.data);
  console.log(Portugal.nivo.pie.data);
  console.log(Portugal.nivo.bar.data);

  // Portugal Nivo.rocks Radar chart meta data:
  console.log(Portugal.nivo.radar.meta);

  // Example for obtaining all countries:
  const countries = dataset.countries;

  // Or each country name:
  Object.getOwnPropertyNames(countries);

  // Or each region data:
  const regions = dataset.regions;

  // Or each region names
  Object.getOwnPropertyNames(regions);

  // Or the list of countries in one region:
  regions['Western Europe'].forEach((countryObj) => {
    // print
    console.log(countryObj.Country);
  });

  // Accessing and printing first country in rank
  console.log(dataset.ranks['2019']['10']);

  // Accesing and printing map data, grouped by year
  console.log(dataset.geoMap['2019']);

  // Well, it's a lot to explore

  const fs = require('fs');
  fs.writeFile('./data/hapiness-dataset/dataset.json', JSON.stringify(dataset), () => {
  });
});
