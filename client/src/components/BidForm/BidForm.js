import React from 'react';
import './BidForm.css';

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

    </form>
);

export default BidForm;