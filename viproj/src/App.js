import React from 'react'
import Header from './Header';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

class App extends React.Component{
  render(){
    const colums = {
      backgroundColor: "DodgerBlue",
      float:"left",
      width: "50%",
      height:"100%",
    };
    const app = {
      height: '500px',
      width: '900px',
      fontFamily: "Arial"
    };
      return(
          <div style={app}>
             <Header />
            <div style={colums} > 
              <LeftSide />
            </div>
            <div style={colums} >
             <RightSide />
             </div>
          </div>
      );
  }
}
export default App;
