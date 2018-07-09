import React from "react";

export const Input = props => (
    <div >
        <label htmlFor = {props.label}> {props.label}</label>
        <input className="form-control" {...props} /> 
    </div>
);