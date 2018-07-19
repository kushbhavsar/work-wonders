import React, { Component } from 'react';
import './PostJob.css';
import { Link } from 'react-router-dom';
import Api from "../../utils/Api";


class PostJob extends Component {

    state = {
        jobTitle: "",
        jobDescription: "",
        maxPayment: "",
        auctionDays: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`   
                        jobTitle: ${this.state.jobTitle}
                        jobDescription: ${this.state.jobDescription}
                        maxPayment: ${this.state.maxPayment}
                        auctionDays: ${this.state.auctionDays}
                    `);

        Api.saveJobs({
            jobTitle: this.state.jobTitle,
            jobDescription: this.state.jobDescription,
            maxPayment: this.state.maxPayment,
            auctionDays: this.state.auctionDays
        })
            .catch(err => console.log(err));

             window.location.href = "/bidpage"

        this.setState({ jobTitle: "", jobDescription: "", maxPayment: "", auctionDays: "", })
    }

    render() {


        return (
            <form id="postForm">
                <div className='form-group'>
                    <label htmlFor='jobTitle'>Job Title
                    <input type='text' className='form-control' name='jobTitle' value={this.state.jobTitle} onChange={this.handleInputChange} placeholder='Enter job title' />
                    </label>
                </div>

                <div className='form-group'>
                    <label htmlFor='jobDescription'> Job Description
                    <textarea className='form-control' id="jobDescription" name='jobDescription' rows='4' value={this.state.jobDescription} onChange={this.handleInputChange} placeholder='Enter Job Description'> </textarea>
                    </label>
                </div>



                <div className='form-group' >
                    <label htmlFor='maxPayment'>Max Payment

                    <div className="input-group mb-3" >
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                            </div>
                            <input type='text' className='form-control' name='maxPayment' value={this.state.maxPayment} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)" placeholder='Enter your max payment amount' />
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>

                    </label>
                </div>

                <div className='form-group' >
                    <label htmlFor='auctionDays'>Post job for # days</label>
                    <input id="auctionDays" type='text' className='form-control' name='auctionDays' value={this.state.auctionDays} onChange={this.handleInputChange} placeholder='Enter your bid amount' />
                </div>


                <button onClick={this.handleFormSubmit} id="postjobBtn" type="submit" className="btn btn-primary btn-lg">
                    Submit
                </button>

            </form>
        );
    }
};

export default PostJob;