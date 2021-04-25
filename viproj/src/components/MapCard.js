import React, {useMemo, useState} from 'react';
import GeoChart from "./Graphs/GeoChart";
import SelectComponent from "./SelectComponent";
const dataset = require('../data/hapiness-dataset/dataset.json');

function MapCard() {
  const [year, setYear] = useState("2015");

  const years = useMemo(() => {
    return Object.keys(dataset.geoMap).map(g => ({value: g, label: g}));
  }, [])

  const geoData = useMemo(()=> {
    return dataset.geoMap[year]
  }, [year])

  console.log(years)
  console.log(geoData)

  return (
    <div style={{width: '100%', height: "100%"}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <SelectComponent options={years} onChangeHandle={setYear} value={year}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',  border: "solid black 1px"}}>
        <GeoChart data={geoData} />
      </div>
    </div>
  );
}

export default MapCard;
