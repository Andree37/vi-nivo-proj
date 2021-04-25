import React from 'react';
import {ResponsiveChoropleth} from '@nivo/geo';

// The Geo graph requires a little configuration that is in the file
const worldCountries = require('../../worldCountries.json');

/**
 * GeoChart is the component that has all the map chart behaviour
 * @param data array with all the data to be used in the map chart
 * @returns {JSX.Element}
 */
const GeoChart = ({data}) => {
  return (
    // All the Graphs by nivo require a defined height and weight
    // Else it will be 0 and no graph will be rendered
    <div style={{width: '1200px', height: '700px'}}>
      <ResponsiveChoropleth
        data={data}
        features={worldCountries.features}
        margin={{top: 0, right: 0, bottom: 0, left: 0}}
        colors='nivo'
        domain={[2, 8]}
        unknownColor='#666666'
        label='properties.name'
        valueFormat='.2s'
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        projectionScale={120}
        enableGraticule={true}
        graticuleLineColor='#dddddd'
        borderWidth={0.5}
        borderColor='#152538'
        legends={[
          {
            anchor: 'left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: '#444444',
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000000',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default GeoChart;
