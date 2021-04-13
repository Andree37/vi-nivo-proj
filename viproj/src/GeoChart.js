// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import React from 'react';
import {ResponsiveChoroplethCanvas} from '@nivo/geo'

const worldCountries = require('./worldCountries.json');

const GeoChart = ( props)=> {
  const {geodata,zoom,traX,traY} = props
   
    return (
      <div style={{width: '900px', height: '500px'}}>
        <ResponsiveChoroplethCanvas
          data={geodata}
          features={worldCountries.features}
          margin={{top: 0, right: 0, bottom: 0, left: 0}}
          colors="RdBu"
          domain={[0, 1000000]}
          unknownColor="#101b42"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[traX, traY]}
          projectionRotation={[0, 0, 0]}
          projectionScale= {zoom}  
          enableGraticule={false}
          graticuleLineColor="rgba(0, 0, 0, .2)"
          borderWidth={0.5}
          borderColor="#101b42"
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'row',
              justify: true,
              translateX: 20,
              translateY: 20,
              itemsSpacing: 0,
              itemWidth: 92,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 18
            }
          ]}
        />
      </div>
    )
}

export default GeoChart;
