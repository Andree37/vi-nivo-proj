import React from 'react';
import PrincipalComp from './PrincipalComp';

class App extends React.Component{
  render(){
    const app = {
      height: '500px',
      width: '1200px',
      fontFamily: "Arial"
    };
      return(
          <div style={app}>
           <PrincipalComp />
          </div>
      );
  }
}
export default App;
