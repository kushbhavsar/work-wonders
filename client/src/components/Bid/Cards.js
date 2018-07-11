import React from 'react';

export const Cards = props => (
    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title" > {props.jobTitle}</h5>
            <p className="card-text">{props.jobDescription}</p>
            <button className="btn btn-outline-primary btn-small">Bid</button>
            <p >{props.timer}</p>
        </div>

    </div>
);