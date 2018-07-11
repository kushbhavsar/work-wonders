import React, {Component} from 'react';
import './Bid.css';
import {Link} from 'react-router-dom';
import { Cards } from './Cards';

class Bid extends Component {

    state = {
        jobTitle :"Gardening",
        jobDescription : "The job will be from xx to xx",
        maxPayment : "$100",
        auctionDays : "3 days"
    }


    render() {
        return (

            <div>
            <Cards
                jobTitle = {this.state.jobTitle} 
                jobDescription = {this.state.jobDescription}
                timer = {this.state.auctionDays}

            />
            </div>

        )
    }
}

export default Bid;