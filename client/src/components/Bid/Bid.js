import React, { Component } from 'react';
import './Bid.css';
//import { Link } from 'react-router-dom';
import { Cards } from './Cards';
import Api from '../../utils/Api';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input } from '../RegistrationForm/Forms/Input';
//import Timer from './Timer';

class Bid extends Component {

    state = {
        jobTitle: "",
        jobDescription: "",
        maxPayment: "",
        auctionDays: "",
        jobs: [],
        modal: false,
        bidAmount: "", // saves user bid. We should post this to the dB
        seconds: "",
        minutes: "",
        hours: "",
        postDate: ""
    }

    componentDidMount() {
        this.loadJobs();
    }

    componentWillUnmount() {
        //clearInterval(this.interval)
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
    }

/*
   bidCounter = (postDate, endDate) => {
       Timer.countDown(postDate,endDate)
   }
*/
    render() {
        return (

            <div>
                {
                    this.state.jobs.map((job, _id) => {
                        return (
                            <div  >
                                <Cards
                                
                                    jobTitle={job.jobTitle}
                                    jobDescription={job.jobDescription}
                                    timer={job.auctionDays}
                                    postDate={job.date}
                                    days={this.state.days}
                                    hours={this.state.hours}
                                    minutes={this.state.minutes}
                                    seconds={this.state.seconds}
                                    //counter = {this.bidCounter(postDate)}
                                    key={job._id}

                                />

                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader >{job.jobTitle}</ModalHeader>
                                    <ModalBody>
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
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