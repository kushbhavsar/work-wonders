import React from "react";

function RenderState (props)  {
   return <option value={props.value}>{props.value}</option>
}

  
function StateList (props)  {
    const allstates = props.allstates;
    const listState = allstates.map((newState) =>

        <RenderState key={newState.toString()}   value={newState}        
        />
    );

    return (
        <div >

            <label htmlFor = {props.label}> {props.label}</label>
            <select className="form-control" {...props} > 
                {listState}
            </select>

        </div>

    );

}

const allstates = [ "","AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]

export const USstate = props => (
            <StateList allstates = {allstates} label={props.label}/>
);