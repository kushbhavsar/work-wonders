import React, { Component } from 'react';
import './Bid.css';
import { Link } from 'react-router-dom';
import { Cards } from './Cards';
import Api from '../../utils/Api';
import {Modal} from './modal';

class Bid extends Component {

    state = {
        jobTitle: "",
        jobDescription: "",
        maxPayment: "",
        auctionDays: "",
        jobs: []
    }

    componentDidMount() {
        this.loadJobs();
    }

    loadJobs = () => {
        Api.getJobs()
            .then(res => {
                this.setState({
                    jobs: res.data
                })
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    render() {
        return (

            <div>
                {
                    this.state.jobs.map((job, index) => {
                        return (
                            <div>
                                <Cards
                                    jobTitle={job.jobTitle}
                                    jobDescription={job.jobDescription}
                                    timer={job.auctionDays}
                                    key= {index}
                                />
                                <Modal/>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                 Launch demo modal
                                </button>
                                <button className="btn btn-outline-primary btn-small" id="btnBid" data-toggle="modal" data-target="#exampleModalCenter">Bid</button>
                                

                            </div>

                        )
                    })
                }

            </div>

        )
    }
}

export default Bid;