import React from 'react';
import './BidForm.css';
import Calendar from '../Calendar';

const BidForm = props => (
    <form>
        <div className='form-group'>
            <label htmlFor='jobTitle'>Job Title</label>
            <input type='text' className='form-control' id='jobTitle' placeholder='Enter job title'/>
        </div>

        <div className='form-group'>
            <label htmlFor='jobDescription'> Job Description</label>
            <textarea className='form-control' id='jobDescription' rows='4' placeholder='Enter Job Description'> </textarea>
        </div>

        <div className ='form-group'>
            <label htmlFor='duration'> Duration</label>
            <Calendar/>
        </div>

        <div className = 'form-group' >
            <label htmlFor ='maxBid'>Max Bid</label>

            <div className="input-group mb-3" >
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>
                <input type='text' className='form-control' id='maxBid'aria-label="Amount (to the nearest dollar)" placeholder='Enter your bid amount'/>
                <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                </div>
            </div>
        </div>
        
        <div className = 'form-group' >
            <label htmlFor ='auctionDays'>Auction last for # days</label>
            <input type='text' className='form-control' id='maxBid' placeholder='Enter your bid amount'/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

    </form>
);

export default BidForm;