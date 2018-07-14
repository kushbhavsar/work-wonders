import React, { Component } from 'react';
import './Bid.css';
import { Link } from 'react-router-dom';
import { Cards } from './Cards';
import Api from '../../utils/Api';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Bid extends Component {

    state = {
        jobTitle: "",
        jobDescription: "",
        maxPayment: "",
        auctionDays: "",
        jobs: [],
        modal: false
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

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

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
                                
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggler={this.toggle}>{job.jobTitle}</ModalHeader>
                                    <ModalBody></ModalBody>
                                    <ModalFooter>
                                        <Button className="btn btn-outline-primary" onClick={this.toggle} >Bid</Button>{'   '}
                                        <Button className="btn btn-outline-secondary" onClick={this.toggle} >Bid</Button>
                                    </ModalFooter>
                                </Modal>
                                <button className="btn btn-outline-primary btn-small" id="btnBid" onClick={this.toggle} >Bid</button>
                                

                            </div>

                        )
                    })
                }

            </div>

        )
    }
}

export default Bid;