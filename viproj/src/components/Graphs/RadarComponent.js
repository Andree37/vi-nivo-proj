import React from 'react';
import {ResponsiveRadar} from "@nivo/radar";

const RadarComponent = ({data, keys}) => {
  return (
    <div style={{height: '400px', width: '33%'}}>
      <ResponsiveRadar
        data={data}
        keys={keys}
        indexBy="Year"
        maxValue="auto"
        margin={{top: 0, right: 40, bottom: 90, left: 40}}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{from: 'color'}}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={10}
        enableDots={true}
        dotSize={10}
        dotColor={{theme: 'background'}}
        dotBorderWidth={2}
        dotBorderColor={{from: 'color'}}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{scheme: 'nivo'}}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateX: -30,
            translateY: -30,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default RadarComponent;
