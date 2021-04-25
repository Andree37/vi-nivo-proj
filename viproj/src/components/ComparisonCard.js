import React from 'react';
import CountryDetailCard from "./CountryDetailCard";
// Import the dataset to be used throughout all the graphs in the comparison page
const dataset = require('../data/hapiness-dataset/dataset.json');

/**
 * Card Responsible for the comparison graphs
 * @returns {JSX.Element}
 * @constructor
 */
const ComparisonCard = () => {
  return (
    // Just a little styling over the cards
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
