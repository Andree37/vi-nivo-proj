const util = require('../../util');

module.exports.Happiness = function (callback) {
    util.readCsvToArray('./data/hapiness-dataset/data.csv', (err, data) => {
        if (err) return callback(err, null);

        /**
         * Builds Nivo.rocks objects with Hapiness world data
         * @returns object
         */
        function Happiness() {
            const obj = {};
            obj.data = util.ArrayEx(data);

            obj.countries = {};
            obj.regions = {};
            obj.ranks = {};
            obj.geoMap = {};

            const addCountryToCountries = (record) => {
                if (!Object.getOwnPropertyNames(obj.countries).includes(record.Country)) {
                    obj.countries[record.Country] = {};
                }
                obj.countries[record.Country][record.Year] = record;
            };

            const addCountryToRegion = (record) => {
                if (!Object.getOwnPropertyNames(obj.regions).includes(record.Region)) {
                    obj.regions[record.Region] = [];
                }
                obj.regions[record.Region].push(record);
            };

            const addCountryToRank = (record) => {
                let year = record.Year + '';
                let rank = record.Rank;
                if (!Object.getOwnPropertyNames(obj.ranks).includes(year)) {
                    obj.ranks[year] = {};
                }
                if (!Object.getOwnPropertyNames(obj.ranks).includes('geoMap')) {
                    obj.ranks['geoMap'] = [];
                }
                obj.ranks[year][rank] = record;
            };

            const addGeoMap = (record) => {
                let year = record.Year + '';
                if (!Object.getOwnPropertyNames(obj.geoMap).includes(year)) {
                    obj.geoMap[year] = [];
                }
                if (record.CountryCode !== '#N/A') obj.geoMap[year].push({ id: record.CountryCode, value: record.Score });
            };

            const buildRadarChartStructure = (country) => {
                const result = [];
                Object.entries(country).forEach(([k, v]) => {
                    result.push({
                        Year: k,
                        'Social Support': v['SocialSupport'],
                        'Health Life Expectancy': v['HealthLifeExpectancy'],
                        'Freedom of Choices': v['FreedomOfChoices'],
                        Generosity: v['Generosity'],
                        'Perceptions of Corruption': v['PerceptionsOfCorruption'],
                    });
                });

                return result;
            };

            const buildPieChartStructure = (country) => {
                const count = Object.entries(country).length;
                if (count < 1) return null;
                const socialSupport = { id: 'socialSupport', label: 'Social Support', value: 0, color: 'hsl(32, 70%, 50%)' };
                const healthLifeExpectancy = {
                    id: 'healthLifeExpectancy',
                    label: 'Health Life Expectancy',
                    value: 0,
                    color: 'hsl(21, 70%, 50%)',
                };
                const freedomOfChoices = {
                    id: 'freedomOfChoices',
                    label: 'Freedom of Choices',
                    value: 0,
                    color: 'hsl(10, 70%, 50%)',
                };
                const generosity = { id: 'generosity', label: 'Generosity', value: 0, color: 'hsl(250, 70%, 50%)' };
                const perceptionsOfCorruption = {
                    id: 'perceptionsOfCorruption',
                    label: 'Perceptions of Corruption',
                    value: 0,
                    color: 'hsl(31, 70%, 50%)',
                };
                Object.entries(country).forEach(([k, v]) => {
                    socialSupport.value += v['SocialSupport'];
                    healthLifeExpectancy.value += v['HealthLifeExpectancy'];
                    freedomOfChoices.value += v['FreedomOfChoices'];
                    generosity.value += v['Generosity'];
                    perceptionsOfCorruption.value += v['PerceptionsOfCorruption'];
                });
                socialSupport.value = parseFloat((socialSupport.value / count).toFixed(2));
                healthLifeExpectancy.value = parseFloat((healthLifeExpectancy.value / count).toFixed(2));
                freedomOfChoices.value = parseFloat((freedomOfChoices.value / count).toFixed(2));
                generosity.value = parseFloat((generosity.value / count).toFixed(2));
                perceptionsOfCorruption.value = parseFloat((perceptionsOfCorruption.value / count).toFixed(2));

                return [
                    socialSupport,
                    healthLifeExpectancy,
                    freedomOfChoices,
                    generosity,
                    // perceptionsOfCorruption // Retirar comentário para incluir no gráfico
                ];
            };

            const buildLinesChartStructure = (country) => {
                let socialSupport = { id: 'Social Support', color: 'hsl(32, 70%, 50%)', data: [] };
                const healthLifeExpectancy = {
                    id: 'Health Life Expectancy',
                    color: 'hsl(21, 70%, 50%)',
                    data: [],
                };
                const freedomOfChoices = {
                    id: 'Freedom of Choices',
                    color: 'hsl(10, 70%, 50%)',
                    data: [],
                };
                const generosity = { id: 'Generosity', color: 'hsl(250, 70%, 50%)', data: [] };
                const perceptionsOfCorruption = {
                    id: 'Perceptions of Corruption',
                    color: 'hsl(31, 70%, 50%)',
                    data: [],
                };
                Object.entries(country).forEach(([k, v]) => {
                    socialSupport.data.push({ x: k, y: parseFloat(v['SocialSupport']) });
                    healthLifeExpectancy.data.push({ x: k, y: parseFloat(v['HealthLifeExpectancy']) });
                    freedomOfChoices.data.push({ x: k, y: parseFloat(v['FreedomOfChoices']) });
                    generosity.data.push({ x: k, y: parseFloat(v['Generosity']) });
                    perceptionsOfCorruption.data.push({ x: k, y: parseFloat(v['PerceptionsOfCorruption']) });
                });

                return [socialSupport, healthLifeExpectancy, freedomOfChoices, generosity, perceptionsOfCorruption];
            };

            const buildBarChartStructure = (country) => {
                const result = [];
                Object.entries(country).forEach(([k, v]) => {
                    result.push({
                        Year: k,
                        'Social Support': parseFloat(v['SocialSupport']),
                        'Health Life Expectancy': parseFloat(v['HealthLifeExpectancy']),
                        'Freedom of Choices': parseFloat(v['FreedomOfChoices']),
                        Generosity: parseFloat(v['Generosity']),
                        'Perceptions of Corruption': parseFloat(v['PerceptionsOfCorruption']),
                    });
                });
                return result;
            };

            // Build dataset structure
            obj.data.syncForEach((record) => {
                record['Rank'] = parseInt(record.Rank);
                record['Year'] = parseInt(record['Year']);
                record['Score'] = parseFloat(record['Score']);
                record['GDP'] = parseFloat(record['GDP']);
                record['SocialSupport'] = parseFloat(record['SocialSupport']);
                record['HealthLifeExpectancy'] = parseFloat(record['HealthLifeExpectancy']);
                record['FreedomOfChoices'] = parseFloat(record['FreedomOfChoices']);
                record['Generosity'] = parseFloat(record['Generosity']);
                record['PerceptionsOfCorruption'] = parseFloat(record['PerceptionsOfCorruption']);
                addCountryToCountries(record);
                addCountryToRegion(record);
                addCountryToRank(record);
                addGeoMap(record);
            });

            // Add Nivo.rocks structures
            Object.entries(obj.countries).forEach(([k, v]) => {
                const country = obj.countries[k];
                const nivo = {};
                nivo.radar = {
                    meta: { url: 'https://nivo.rocks/radar/', name: 'Radar' },
                    data: buildRadarChartStructure(country),
                };
                nivo.line = {
                    meta: { url: 'https://nivo.rocks/line/', name: 'Line' },
                    data: buildLinesChartStructure(country),
                };
                nivo.bar = { meta: { url: 'https://nivo.rocks/bar/', name: 'Bar' }, data: buildBarChartStructure(country) };
                nivo.pie = { meta: { url: 'https://nivo.rocks/pie/', name: 'Pie' }, data: buildPieChartStructure(country) };
                country.nivo = nivo;
            });

            return obj;
        }

        return callback(null, new Happiness());
    });
};
