import React from "react";



function RenderState (props)  {
    <option value={props.value}>{props.value}</option>
}

  
function StateList (props)  {
    const allStates = props.allStates;
    const listState = allStates.map((allStates) =>

        <RenderState key={allStates.toString()} value={allStates}
        />
    );

    return (
        {listState}
    );
}

const allStates = [ "AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]

export const USstate = props => (
    <div >
        <label htmlFor = {props.label}> {props.label}</label>
        <select className="form-control" {...props} > 
            <StateList allStates = {allStates} />
        </select>
    </div>
);