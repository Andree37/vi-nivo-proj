import React, { useMemo } from 'react';
import { Table } from 'antd';

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

const TableComponent = ({ countries }) => {
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
        console.log(arr);
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
            <Table dataSource={dataSource} columns={columns} pagination={false} />;
        </div>
    );
};

export default TableComponent;
