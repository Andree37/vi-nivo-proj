import React from "react"

class RangeNav extends React.Component{
    
    
      handleChange(e) {
        var range = e.target.value;
        this.props.onChange({
            type:this.props.data.label,
            value: range
          });
    }
      render(){
     const {min, max, value, label,step}  = this.props.data;
      return (
          <div>
               <label>{label} </label>
                   <input type="Range" value={value}  min={min} max={max} name={label}  onChange={(e)=>{this.handleChange(e)}} step= {step} />  
          </div>
      )}
}
export default RangeNav;