import React from 'react';
import {ResponsivePie} from '@nivo/pie';

const PieComponent = ({data}) => {
  return (
    <div style={{height: '400px', width: '33%'}}>
      <ResponsivePie
        enableRadialLabels={false}
        data={data}
        margin={{top: 0, right: 10, bottom: 0, left: 10}}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{scheme: 'nivo'}}
        borderWidth={1}
        borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
      />
    </div>
  );
};

export default PieComponent;
