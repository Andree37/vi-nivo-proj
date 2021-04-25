import React, {useMemo} from 'react';
import {Table} from 'antd';

// Columns defined here for the table, since it is only used in this component
// if the Table is required somewhere else, this requires refinement
// and should be sent over parameters to the component
const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
];

/**
 * TableComponent shows a table based on the columns stated in the component and shows the countries that come in the parameters
 *  This table is from Antd, here is the documentation https://ant.design/components/table/
 * @param countries Array of countries from the dataset
 * @returns {JSX.Element}
 */
const TableComponent = ({countries}) => {
  // Used to get only the top 10
  const dataSource = useMemo(() => {
    const arr = [];
    // get first ten
    Object.values(countries).forEach((c) => {
      // only get up to 10
      if (arr.length === 10) {
        return;
      }
      arr.push(c);
    });
    // map the object to the correct shape
    return arr.map((c) => ({
      key: c.Rank,
      rank: c.Rank,
      region: c.Region,
      country: c.Country,
      capital: c.Capital,
      score: c.Score,
    }));
  }, [countries]);

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false}/>;
    </div>
  );
};

export default TableComponent;
