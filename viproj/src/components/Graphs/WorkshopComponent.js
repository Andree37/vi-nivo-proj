import React from 'react';

// Load complete dataset
const dataset = require('../../data/hapiness-dataset/dataset.json');

const getData = (country) => {
    // Select data formatted for Barchart
    const barChartData = dataset.countries[country]?.nivo.bar.data;

    // return data
    return barChartData;
};

const getKeys = (column) => {
    // Select years as keys
    const keys = Object.keys(dataset.countries.Portugal.nivo.bar.data[0]).filter((k) => k !== column);

    // return the keys
    return keys;
};

const WorkshopComponent = () => {
    const data = getData('Portugal');
    const keys = getKeys('Year');

    // Print to browser console for analises
    console.dir(data);

    // Print the keys to browser console
    console.dir(keys);

    return (
        <div>
            <h1>Workshop Sandbox</h1>
            {/* COMPONENT CODE GOES HERE */}
        </div>
    );
};

export default WorkshopComponent;
