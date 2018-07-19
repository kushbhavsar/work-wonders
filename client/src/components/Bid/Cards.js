import React from 'react';
import  './Cards.css';

export const Cards = props => (
   // <div class="col-md-4">
        
            <div id='Card' className="card" style={{ width: '55rem' }}>
                <div className="card-body">
                    <h5 className="card-title" > {props.jobTitle}</h5>
                    <p className="card-text">{props.jobDescription}</p>
                    <p id="maxPayment">{`Maximum Bid = $ ${props.maxPayment}`}</p>
                    <p id="timer">{`${props.days} days ${props.hours}hrs : ${props.minutes}mins : ${props.seconds}secs`}</p>
                </div>

            </div>
    //</div>   
);