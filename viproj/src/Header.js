import React from 'react';

class Header extends React.Component{
    render(){
        const header = {
            color: "white",
            backgroundColor: "#00004d",
            padding: "10px",
          };
        return(
            <div style={header}>
                <h1>Header</h1>
            </div>

        );
    }

}

export default Header;