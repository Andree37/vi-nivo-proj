import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const PrincipalComp =() =>{
    const header = {
        display: "flex",
        color: "white",
        backgroundColor: "#00004d",
        padding: "10px",
      };
    return(
        <div>
            <div style={header}>
                <h1 style={{'text-align': "center"}}>Geographical areas</h1>
            </div>
            <div style={{width: '49%', margin: '1% 1% 1% 0% ',float:"left", border: "solid black 1%"}} > 
               <LeftSide/>
            </div>
            <div style={{width: '49%', margin: '1% 0% 0% 0% ',float:"left", border: "solid black 1%"}} > 
              <RightSide/>
            </div>
        </div>

    );

}

export default PrincipalComp;