import React, {Component} from 'react';
import './Bid.css';
import {Link} from 'react-router-dom';
import { Cards } from './Cards';
import Api from '../../utils/Api';

class Bid extends Component {

    state = {
        jobTitle :"",
        jobDescription : "",
        maxPayment : "",
        auctionDays : ""
    }
    
    componentDidMount() {
        this.loadJobs();
    }

    

    loadJobs = () => {
        Api.getJobs()
            .then(res => {
                this.setState({jobTitle : res.data[0].jobTitle, 
                                jobDescription: res.data[0].jobDescription, 
                                auctionDays: res.data[0].auctionDays
                                 })
            
            
            console.log(res.data)                     

            })
            .catch(err => console.log(err));
    };
        
    //loadJobs()

    render() {
        return (

            <div>
                <Cards
                    jobTitle = {this.state.jobTitle} 
                    jobDescription = {this.state.jobDescription}
                    timer = {this.state.auctionDays}    
                />
                <button className="btn btn-outline-primary btn-small" id="btnBid">Bid</button>
            </div>

        )
    }
}

export default Bid;