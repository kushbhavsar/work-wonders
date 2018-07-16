import React, { Component } from 'react';
import './Bid.css';
import { Link } from 'react-router-dom';
import { Cards } from './Cards';
import Api from '../../utils/Api';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input } from '../RegistrationForm/Forms/Input';

class Bid extends Component {

    state = {
        jobTitle: "",
        jobDescription: "",
        maxPayment: "",
        auctionDays: "",
        jobs: [],
        modal: false,
        bidAmount: "",
        seconds: 1000,
        minutes: "",
        hours: "",
        postDate: ""
    }

    componentDidMount() {
        this.loadJobs();
        //this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
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


    countDown = (postDate, endDate) => {

        let days, hours, minutes, seconds;

        endDate = parseInt(endDate) * 24 * 60 * 60 * 1000;
        postDate = new Date(postDate).getTime() + endDate;

        if (isNaN(postDate)) { //  check if our input is valid
            return;
        }

        calculate = () => {
            let startDate = new Date();
            startDate = startDate.getTime();

            let timeRemaining = parseInt((postDate - startDate) / 1000);
            console.log(timeRemaining);

            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400)
                timeRemaining = (timeRemaining % 86400)

                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);

                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);

                seconds = parseInt(timeRemaining);

                //let showTimer = `${parseInt(days, 10)} days ${('0' + hours).slice(-2)}h : ${('0' + minutes).slice(-2)}m: ${('0' + seconds).slice(-2)}s`;

                let showTime = {
                    days : parseInt(days, 10),
                    hours : ('0'+hours).slice(-2),
                    minutes : ('0' + minutes).slice(-2),
                    seconds : ('0' + seconds).slice(-2)
                }

                return showTime;
            }
        }

        setInterval(calculate, 1000);
    };


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
                                    key={job._id}

                                />

                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggler={this.toggle}>{job.jobTitle}</ModalHeader>
                                    <ModalBody>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <Input
                                                    value={this.state.bidAmount} label="Bid Amount" name="bidAmount" placeholder="Bid Amount"
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