import React, { Component } from 'react';
import './Bid.css';
//import { Link } from 'react-router-dom';
import { Cards } from './Cards';
import Api from '../../utils/Api';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input } from '../RegistrationForm/Forms/Input';
import Timer from './Timer';

class Bid extends Component {

    state = {
        jobTitle: "",
        jobDescription: "",
        maxPayment: "",
        auctionDays: "",
        jobs: [],
        modal: false,
        bidAmount: "", // saves user bid. We should post this to the dB
        timeString: [],
        days: "",
        hours: "",
        minutes: "",
        seconds:"",
       // postDate: ""
    }

    componentDidMount() {
        this.loadJobs();
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    
   
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value

        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(` User bid ${this.state.bidAmount}`);

        this.setState({
            bidAmount:""
        })
        this.toggle();
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
    };

    render() {
        return (

            <div className= "Cardspace">
                
                {
                    this.state.jobs.map((job, _id) => {

                        let time = Timer.counter(job.date, job.auctionDays);

                        
                        return (
                            <div key={job._id}>
                                <Cards
                                
                                    jobTitle = {job.jobTitle}
                                    jobDescription = {job.jobDescription}
                                    timer = {job.auctionDays}
                                    postDate = {job.date}
                                    maxPayment = {job.maxPayment}
                                    // timerArray = {this.countDownTimer(job.date, job.auctionDays)}
                                    timeString={ this.state.timeString}
                                    //hours = {this.state.hours}
                                   // minutes = {this.state.minutes}
                                   // seconds = {this.state.seconds }
                                   // days = {this.state.days}
                                        //counter = {this.bidCounter(postDate)}
                                />

                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader > {job.jobTitle}</ModalHeader>
                                    <ModalBody>
                                       <div class="container-fluid">     
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-4">
                                                        <Input
                                                            value={this.state.bidAmount} 
                                                            label="bidAmount" 
                                                            name="bidAmount"
                                                            placeholder="Bid Amount"
                                                            onChange={this.handleInputChange}
                                                        
                                                        />

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button className="btn btn-outline-primary" onClick={this.handleFormSubmit} >Save</Button>{'   '}
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