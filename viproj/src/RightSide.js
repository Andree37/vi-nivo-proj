import React from 'react';
import GeoChart from './GeoChart'

class RightSide extends React.Component{
    render(){
        return(
            <div style={{padding: "10px",}}>
                <h1>RightSide</h1>
                <GeoChart />
            </div>

        );
    }

}

export default RightSide;