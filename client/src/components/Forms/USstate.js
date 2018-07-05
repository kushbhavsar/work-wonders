import React from "react";

export const USstate = props => (
    <div >
        <label htmlFor = {props.label}> {props.label}</label>
        <select className="form-control" {...props} > 
            <option value= {props.list}>{props.list}</option>
        </select>
    </div>
);