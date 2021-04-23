import React, {useState} from 'react';

import RadarComponent from "./Graphs/RadarComponent";
import PieComponent from "./Graphs/PieComponent";
import BarComponent from "./Graphs/BarComponent";
import LineComponent from "./Graphs/LineComponent";
import SelectComponent from "./SelectComponent";

// just some placeholders for the options
// later to be changed to some real static data

const optionRegions = [
  {value: 'norte', label: 'Norte'},
  {value: 'centro', label: 'Centro'},
  {value: 'sul', label: 'Sul'}
]

const optionCountries = [
  {value: 'portugal', label: 'Portugal'},
  {value: 'espanha', label: 'Espanha'},
]

const optionYears = [
  {value: '2019', label: '2019'},
  {value: '2020', label: '2020'},
  {value: '2021', label: '2021'}
]

const CountryDetailCard = (props) => {
  const [optionRegion, setOptionRegion] = useState(optionRegions[0]);
  const [optionCountry, setOptionCountry] = useState(optionCountries[0]);
  const [optionYear, setOptionYear] = useState(optionYears[0]);
  // do fetching and filtering of data on this component
  // based on options above
  // dataset.get(optionRegion, whatever)
  // props for now is just an object of data for each graphType
  const {radarData, pieData, barData, lineData} = props;
  // later it can be just the data object, ready for filtering like raimundo did

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <SelectComponent options={optionRegions} onChangeHandle={setOptionRegion}/>
      <SelectComponent options={optionCountries} onChangeHandle={setOptionCountry}/>
      <SelectComponent options={optionYears} onChangeHandle={setOptionYear}/>
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
