import React from 'react';
import {ResponsiveLine} from '@nivo/line';

/**
 * LineComponent is the component that has all the Line graph behaviour
 * @param data array with all the data to be used in the line graph
 * @returns {JSX.Element}
 */
const LineComponent = ({data}) => {
  return (
    // All the Graphs by nivo require a defined height and weight
    // Else it will be 0 and no graph will be rendered
    <div style={{height: '400px', width: '100%'}}>
      <ResponsiveLine
        data={data}
        margin={{top: 40, right: 110, bottom: 50, left: 60}}
        xScale={{type: 'point'}}
        yScale={{type: 'linear', min: 'auto', max: 2, stacked: false, reverse: false}}
        yFormat=' >-.2f'
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Years',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Score',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{theme: 'background'}}
        pointBorderWidth={2}
        pointBorderColor={{from: 'serieColor'}}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: 30,
            translateY: -40,
            itemsSpacing: 20,
            itemDirection: 'left-to-right',
            itemWidth: 130,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
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


export default LineComponent;
