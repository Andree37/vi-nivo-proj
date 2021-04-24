import React, {useState} from 'react';
import CountryDetailCard from "./CountryDetailCard";
const dataset = require('../data/hapiness-dataset/dataset.json');

// countrydetailcard props -> data object
// props need to be changed to the object to do the data filtering
const ComparisonCard = () => {
  return (
    <div style={{width: '100%', border: "solid black 1px"}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
        <div style={{width: '50%', border: "solid black 1px"}}>
          <CountryDetailCard dataset={dataset}/>
        </div>
        <div style={{width: '50%', border: "solid black 1px"}}>
          <CountryDetailCard dataset={dataset}/>
        </div>
      </div>
    </div>
  );
};


export default ComparisonCard;
