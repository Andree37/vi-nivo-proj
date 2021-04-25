import React from 'react';
import {ResponsiveRadar} from '@nivo/radar';

/**
 * RadarComponent is the component that has all the radar graph behaviour
 * @param data array with all the data to be used in the radar graph
 * @param keys array to be used by the graph to identify the keys
 * @returns {JSX.Element}
 */
const RadarComponent = ({data, keys}) => {
  return (
    // All the Graphs by nivo require a defined height and weight
    // Else it will be 0 and no graph will be rendered
    <div style={{height: '400px', width: '33%'}}>
      <ResponsiveRadar
        data={data}
        keys={keys}
        indexBy='Year'
        maxValue='auto'
        margin={{top: 0, right: 40, bottom: 0, left: 40}}
        curve='linearClosed'
        borderWidth={2}
        borderColor={{from: 'color'}}
        gridLevels={5}
        gridShape='circular'
        gridLabelOffset={10}
        enableDots={true}
        dotSize={10}
        dotColor={{theme: 'background'}}
        dotBorderWidth={2}
        dotBorderColor={{from: 'color'}}
        dotLabel='value'
        dotLabelYOffset={-12}
        colors={{scheme: 'nivo'}}
        fillOpacity={0.25}
        blendMode='multiply'
        animate={true}
        motionConfig='wobbly'
        isInteractive={true}
      />
    </div>
  );
};

export default RadarComponent;
