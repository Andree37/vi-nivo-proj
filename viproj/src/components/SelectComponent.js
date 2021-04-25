import React from 'react';
import Select from "react-select";

// Some styling for the selected items
const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

// helper function to format the labels
const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

/**
 * Select component, used to select over some values sent in the options parameter
 * @param options Array of options to be shown
 * @param onChangeHandle Function to be called when a change in value happens
 * @param value Value that is shown
 * @returns {JSX.Element}
 */
const SelectComponent = ({options, onChangeHandle, value}) => {
  return (
    <div style={{width: '200px'}}>
      <Select
        onChange={onChangeHandle}
        defaultValue={options && options[0]}
        options={options}
        formatGroupLabel={formatGroupLabel}
        value={value}
      />
    </div>
  );
};

export default SelectComponent;
