import React from 'react';
import './DateInput.css';

function DateInput({getDate,setDateString,reset}){
    return(
        <div className = "Date-input">
            <input type = "text" onChange = {getDate} placeholder = "Enter the Date like : 1 jan 2021 13:22:55" />
            <button onClick = {setDateString} >submit</button>
        </div>
        
    )
}

export default DateInput;