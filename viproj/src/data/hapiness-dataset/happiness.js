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
                let rank = record['Overall rank'];
                if (!Object.getOwnPropertyNames(obj.ranks).includes(year)) {
                    obj.ranks[year] = {};
                }
                obj.ranks[year][rank] = record;
            };

            const buildRadarChartStructure = (country) => {
                const result = [];
                Object.entries(country).forEach(([k, v]) => {
                    result.push({
                        Year: k,
                        'Social Support': v['Social_Support'],
                        'Health Life Expectancy': v['Health_life_expectancy'],
                        'Freedom of Choices': v['freedom_of_choices'],
                        Generosity: v['Generosity'],
                        'Perceptions of Corruption': v['Perceptions_of_corruption'],
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
                    socialSupport.value += v['Social_Support'];
                    healthLifeExpectancy.value += v['Health_life_expectancy'];
                    freedomOfChoices.value += v['freedom_of_choices'];
                    generosity.value += v['Generosity'];
                    perceptionsOfCorruption.value += v['Perceptions_of_corruption'];
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
                    socialSupport.data.push({ x: k, y: parseFloat(v['Social_Support']) });
                    healthLifeExpectancy.data.push({ x: k, y: parseFloat(v['Health_life_expectancy']) });
                    freedomOfChoices.data.push({ x: k, y: parseFloat(v['freedom_of_choices']) });
                    generosity.data.push({ x: k, y: parseFloat(v['Generosity']) });
                    perceptionsOfCorruption.data.push({ x: k, y: parseFloat(v['Perceptions_of_corruption']) });
                });

                return [socialSupport, healthLifeExpectancy, freedomOfChoices, generosity, perceptionsOfCorruption];
            };

            const buildBarChartStructure = (country) => {
                const result = [];
                Object.entries(country).forEach(([k, v]) => {
                    result.push({
                        Year: k,
                        'Social Support': parseFloat(v['Social_Support']),
                        'Health Life Expectancy': parseFloat(v['Health_life_expectancy']),
                        'Freedom of Choices': parseFloat(v['freedom_of_choices']),
                        Generosity: parseFloat(v['Generosity']),
                        'Perceptions of Corruption': parseFloat(v['Perceptions_of_corruption']),
                    });
                });
                return result;
            };

            // Build dataset structure
            obj.data.syncForEach((record) => {
                record['Overall rank'] = parseInt(record['Overall rank']);
                record['Year'] = parseInt(record['Year']);
                record['Score'] = parseInt(record['Score']);
                record['GDP'] = parseFloat(record['GDP']);
                record['Social_Support'] = parseFloat(record['Social_Support']);
                record['Health_life_expectancy'] = parseFloat(record['Health_life_expectancy']);
                record['freedom_of_choices'] = parseFloat(record['freedom_of_choices']);
                record['Generosity'] = parseFloat(record['Generosity']);
                record['Perceptions_of_corruption'] = parseFloat(record['Perceptions_of_corruption']);
                addCountryToCountries(record);
                addCountryToRegion(record);
                addCountryToRank(record);
            });

            // Add Nino.rocks structures
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
