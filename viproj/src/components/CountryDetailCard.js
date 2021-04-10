import React from 'react';

import RadarComponent from "./Graphs/RadarComponent";
import PieComponent from "./Graphs/PieComponent";
import BarComponent from "./Graphs/BarComponent";
import LineComponent from "./Graphs/LineComponent";
import SelectComponent from "./SelectComponent";

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
]

const CountryDetailCard = ({radarData, pieData, barData, lineData}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <SelectComponent options={options}/>
      <SelectComponent options={options}/>
      <SelectComponent options={options}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
        <RadarComponent data={radarData}/>
        <PieComponent data={pieData}/>
        <BarComponent data={barData}/>
      </div>
      <LineComponent data={lineData}/>
    </div>
  );
};

export default CountryDetailCard;
