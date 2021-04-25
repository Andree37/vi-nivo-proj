import React, {useEffect, useState} from 'react';
import {ResponsiveBar} from '@nivo/bar';

// Load complete dataset
const dataset = require('../../data/hapiness-dataset/dataset.json');

const WorkshopComponent = () => {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);

  // Initial setup
  useEffect(() => {
    // Get data for Portugal
    setData(dataset.countries['Portugal']?.nivo.bar.data)
    // Select years as keys, besides Year
    setKeys(Object.keys(dataset.countries.Portugal.nivo.bar.data[0]).filter((k) => k !== 'Year'));
  }, [])


  // Print to browser console for analyses
  console.dir(data);

  // Print the keys to browser console
  console.dir(keys);

  // A little surprise for later ;)
  const CustomBarComponent = ({x, y, width, height, color}) => (
    <circle cx={x + width / 2} cy={y + height / 2} r={Math.min(width, height) / 2} fill={color}/>
  )

  return (
    <div>
      <h1>Workshop Sandbox</h1>
      <div style={{height: '700px', width: '80%'}}>
        {/* COMPONENT CODE GOES HERE */}
      </div>
    </div>
  );
}

export default WorkshopComponent;
