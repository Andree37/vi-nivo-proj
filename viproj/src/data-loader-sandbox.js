/* 
Usar dataset tem a seguinte estrutura.
{
    data: 
        [ é um array com todos objectos, cada objeto é um linha do csv ],
    countries: { 
        'Portugal': { 
                '2016': <O_REGISTO>, 
                '2017': (...) 
            }, 
        'Spain': {
            (...) 
        },
        (...)
    },
    regions: { 
        'Western Europe': [
                { Portugal em 2016 },
                { Portugal em 2017},
                { Spain ... },
                { etc. }
        ],
        'Eastern Europe': [ etc. ]
    }
    ranks: {
        '2016' : {
            '1': { país em primeiro},
            '2': { etc. }
        }
    }
}

Cada país tem um nivo, o nivo tem lá dentro os dados organizados para injetar nos graficos.

Portugal.nivo.radar
Portugal.nivo.lines
Portugal.nivo.pie
Portugal.nivo.bars

Dentro de cada uma destas categorias há, por exemplo:
    Portugal.nivo.radar.meta.name : nome do chart do nivo
    Portugal.nivo.radar.meta.url : isto é o url do site no nivo para este tipo de gráfico
    Portugal.nivo.radar.meta.data: objeto com os dados formatados para o objeto
**/

// Exemplo para aceder aos dados

// Nome giro, para 'lidar com a felicidade' :)
const happinessHandler = require('./data/hapiness-dataset/happiness');

happinessHandler.Happiness((err, dataset) => {
    if (err) return err;
    const Portugal = dataset.countries['Portugal'];

    // Exemplos de acesso aos dados para o Nivo.rocks para portugal
    console.log(Portugal.nivo.radar.data);
    console.log(Portugal.nivo.line.data);
    console.log(Portugal.nivo.pie.data);
    console.log(Portugal.nivo.bar.data);

    // Cada gráfico tem um meta com o url do manual do Nivo
    console.log(Portugal.nivo.radar.meta);

    // Pode obter-se todos os países assim:
    const countries = dataset.countries;

    // Ou a o nome de cada país assim:
    Object.getOwnPropertyNames(countries);

    // Pode obter-se o nome das regiões assim:
    const regions = dataset.regions;

    // Ou os nomes das regiões
    Object.getOwnPropertyNames(regions);

    // E a lista de países em determinada região assim:
    regions['Western Europe'].forEach((countryObj) => {
        // fazer coisas com cada país
        console.log(countryObj.Country);
    });

    // País em primeiro lugar em 2019
    console.log(dataset.ranks['2019']['10']);

    // Obter dados para o mapa. Estão organizados por ano.
    //Por exemplo:
    console.log(dataset.geoMap['2019']);

    // Bom, é explorar
});
