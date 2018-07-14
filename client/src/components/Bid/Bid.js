import React, { Component } from 'react';
import './Bid.css';
import { Link } from 'react-router-dom';
import { Cards } from './Cards';
import Api from '../../utils/Api';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Input} from '../RegistrationForm/Forms/Input';

class Bid extends Component {

    state = {
        jobTitle: "",
        jobDescription: "",
        maxPayment: "",
        auctionDays: "",
        jobs: [],
        modal: false,
        bidAmount: ""
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
                                    <ModalHeader toggler={this.state.toggle}>{job.jobTitle}</ModalHeader>
                                    <ModalBody>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <Input
                                                    value={this.state.bidAmount} label="Bid Amount"  name="bidAmount" placeholder="Bid Amount"
                                                />
                                               
                                            </div>
                                        </div>

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button className="btn btn-outline-primary" onClick={this.toggle} >Save</Button>{'   '}
                                        <Button className="btn btn-outline-secondary" onClick={this.toggle} >Cancel</Button>
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