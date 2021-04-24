import React, {useEffect, useMemo, useState} from 'react';

import RadarComponent from "./Graphs/RadarComponent";
import PieComponent from "./Graphs/PieComponent";
import BarComponent from "./Graphs/BarComponent";
import LineComponent from "./Graphs/LineComponent";
import SelectComponent from "./SelectComponent";

const CountryDetailCard = ({dataset}) => {
  const [optionRegion, setOptionRegion] = useState({value: "Western Europe", label: "Western Europe"});
  const [optionCountry, setOptionCountry] = useState({value: "Switzerland", label: "Switzerland"});

  // selectors
  const countries = useMemo(() => {
    return dataset.regions[optionRegion?.value]?.map(r => ({
      value: r.Country,
      label: r.Country
    }))
  }, [dataset.regions, optionRegion?.value])

  const regions = useMemo(() => {
    return Object.keys(dataset.regions).map(c => ({value: c, label: c}));
  }, [dataset])

  // filter dataset to the declared variables above
  // optionRegion, optionCountry
  const radarData = useMemo(() => {
    return dataset.countries[optionCountry?.value]?.nivo.radar.data
  }, [dataset.countries, optionCountry?.value])

  const pieData = useMemo(() => {
    return dataset.countries[optionCountry?.value]?.nivo.pie.data
  }, [dataset.countries, optionCountry?.value])

  const barData = useMemo(() => {
    return dataset.countries[optionCountry?.value]?.nivo.bar.data
  }, [dataset.countries, optionCountry?.value])

  const lineData = useMemo(() => {
    return dataset.countries[optionCountry?.value]?.nivo.line.data
  }, [dataset.countries, optionCountry?.value])

  const handleSetRegion = (region) => {
    setOptionRegion(region)
    setOptionCountry(countries[0])
  }

  // deal with change on region -> change country
  useEffect(() => {
    setOptionCountry(countries[0])
  }, [countries, optionRegion, regions])

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <SelectComponent options={regions} onChangeHandle={handleSetRegion} value={optionRegion}/>
        <SelectComponent options={countries} onChangeHandle={setOptionCountry} value={optionCountry}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
        <RadarComponent data={radarData ? radarData : []}
                        keys={radarData && Object.keys(radarData[0]).filter(k => k !== 'Year')}/>
        <PieComponent data={pieData}/>
        <BarComponent data={barData ? barData : []}
                      keys={barData && Object.keys(barData[0]).filter(k => k !== 'Year')}/>
      </div>
      <LineComponent data={lineData}/>
    </div>
  );
};

export default CountryDetailCard;
