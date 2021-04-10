import React from 'react';

import RadarComponent from "./Graphs/RadarComponent";
import PieComponent from "./Graphs/PieComponent";
import BarComponent from "./Graphs/BarComponent";
import LineComponent from "./Graphs/LineComponent";

const ComparisonCard = ({radarData, pieData, barData, lineData}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
        <RadarComponent data={radarData}/>
        <PieComponent data={pieData}/>
        <BarComponent data={barData}/>
      </div>
      <LineComponent data={lineData}/>
    </div>
  );
};

export default ComparisonCard;
