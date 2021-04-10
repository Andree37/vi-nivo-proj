import React from 'react';
import BarChart from './BarChart';

class LeftSide extends React.Component{
    render(){

        return(
            <div style={{padding: "10px",}}>
                <BarChart />
            </div>
        );
    }

}

export default LeftSide;