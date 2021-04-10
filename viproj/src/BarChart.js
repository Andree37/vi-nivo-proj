// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

class BarChart  extends React.Component{
  render(){
  const data = [
    {
      "country": "AD",
      "hot dog": 176,
      "hot dogColor": "hsl(198, 70%, 50%)",
      "burger": 61,
      "burgerColor": "hsl(342, 70%, 50%)",
      "sandwich": 76,
      "sandwichColor": "hsl(223, 70%, 50%)",
      "kebab": 162,
      "kebabColor": "hsl(40, 70%, 50%)",
      "fries": 16,
      "friesColor": "hsl(215, 70%, 50%)",
      "donut": 150,
      "donutColor": "hsl(120, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 84,
      "hot dogColor": "hsl(316, 70%, 50%)",
      "burger": 90,
      "burgerColor": "hsl(332, 70%, 50%)",
      "sandwich": 85,
      "sandwichColor": "hsl(334, 70%, 50%)",
      "kebab": 100,
      "kebabColor": "hsl(124, 70%, 50%)",
      "fries": 183,
      "friesColor": "hsl(138, 70%, 50%)",
      "donut": 41,
      "donutColor": "hsl(48, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 181,
      "hot dogColor": "hsl(318, 70%, 50%)",
      "burger": 130,
      "burgerColor": "hsl(119, 70%, 50%)",
      "sandwich": 102,
      "sandwichColor": "hsl(278, 70%, 50%)",
      "kebab": 178,
      "kebabColor": "hsl(251, 70%, 50%)",
      "fries": 9,
      "friesColor": "hsl(227, 70%, 50%)",
      "donut": 85,
      "donutColor": "hsl(157, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 172,
      "hot dogColor": "hsl(191, 70%, 50%)",
      "burger": 122,
      "burgerColor": "hsl(154, 70%, 50%)",
      "sandwich": 177,
      "sandwichColor": "hsl(90, 70%, 50%)",
      "kebab": 100,
      "kebabColor": "hsl(114, 70%, 50%)",
      "fries": 165,
      "friesColor": "hsl(216, 70%, 50%)",
      "donut": 70,
      "donutColor": "hsl(78, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 11,
      "hot dogColor": "hsl(279, 70%, 50%)",
      "burger": 111,
      "burgerColor": "hsl(51, 70%, 50%)",
      "sandwich": 184,
      "sandwichColor": "hsl(219, 70%, 50%)",
      "kebab": 51,
      "kebabColor": "hsl(327, 70%, 50%)",
      "fries": 189,
      "friesColor": "hsl(228, 70%, 50%)",
      "donut": 142,
      "donutColor": "hsl(190, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 3,
      "hot dogColor": "hsl(328, 70%, 50%)",
      "burger": 85,
      "burgerColor": "hsl(278, 70%, 50%)",
      "sandwich": 60,
      "sandwichColor": "hsl(167, 70%, 50%)",
      "kebab": 0,
      "kebabColor": "hsl(132, 70%, 50%)",
      "fries": 35,
      "friesColor": "hsl(177, 70%, 50%)",
      "donut": 189,
      "donutColor": "hsl(148, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 16,
      "hot dogColor": "hsl(267, 70%, 50%)",
      "burger": 165,
      "burgerColor": "hsl(151, 70%, 50%)",
      "sandwich": 70,
      "sandwichColor": "hsl(38, 70%, 50%)",
      "kebab": 130,
      "kebabColor": "hsl(83, 70%, 50%)",
      "fries": 197,
      "friesColor": "hsl(83, 70%, 50%)",
      "donut": 22,
      "donutColor": "hsl(310, 70%, 50%)"
    }
  ];
  return (
    <div>
     <h3>Bar Chart</h3>
      <ResponsiveBar
        data={data}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy="country"
        margin={{top: 50, right: 130, bottom: 50, left: 60}}
        padding={0.3}
        valueScale={{type: 'linear'}}
        indexScale={{type: 'band', round: true}}
        colors={{scheme: 'nivo'}}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'fries'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'sandwich'
            },
            id: 'lines'
          }
        ]}
        borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}
}

export default BarChart;
