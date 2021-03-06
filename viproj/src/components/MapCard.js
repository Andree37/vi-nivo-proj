import React, {useMemo, useState} from 'react';

import GeoChart from "./Graphs/GeoChart";
import SelectComponent from "./SelectComponent";
import TableComponent from "./TableComponent";

// Import the dataset to be used throughout all the graphs in the comparison page
const dataset = require('../data/hapiness-dataset/dataset.json');

/**
 * Card responsible for the map page on the app as well as the top 10 table
 * @returns {JSX.Element}
 */
function MapCard() {
  const [year, setYear] = useState({value: "2015", label: "2015"});

  // years select, just a little treatment on the data that comes from the dataset
  // making it highly responsive
  const years = useMemo(() => {
    return Object.keys(dataset.geoMap).map(g => ({value: g, label: g}));
  }, [])

  // Data from the dataset based on the year defined
  // useMemo is used to help with computing power
  const geoData = useMemo(() => {
    return dataset.geoMap[year.value]
  }, [year])

  return (
    <div style={{width: '100%', height: "100%"}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <SelectComponent options={years} onChangeHandle={setYear} value={year}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', border: "solid black 1px"}}>
        <GeoChart data={geoData}/>
        <TableComponent countries={dataset.ranks[year.value]}/>
      </div>
    </div>
  );
}

export default MapCard;
