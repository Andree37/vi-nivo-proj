import React from 'react';
import {ResponsiveBar} from '@nivo/bar';

/**
 * BarComponent is the component that has all the bar graph behaviour
 * @param data array with all the data to be used in the bar graph
 * @param keys array to be used by the graph to identify the keys
 * @returns {JSX.Element}
 */
const BarComponent = ({data, keys}) => {
  return (
    // All the Graphs by nivo require a defined height and weight
    // Else it will be 0 and no graph will be rendered
    <div style={{height: '400px', width: '33%'}}>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy='Year'
        margin={{top: 20, right: 10, bottom: 50, left: 60}}
        padding={0.3}
        valueScale={{type: 'linear'}}
        indexScale={{type: 'band', round: true}}
        colors={{scheme: 'nivo'}}
        maxValue={4}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Stacked score',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default BarComponent;
