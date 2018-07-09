import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = props => (
    <form>
        <div className='form-group'>
            <label htmlFor="firstName">First name</label>
            <input type='text' className='form-control' id='firstName' placeholder='Enter your first name'/>

        </div>

        <div className='form-group'>
            <label htmlFor ='lastName'>Last Name</label>
            <input type='text' className='form-control' id='lastName' placeholder='Enter your last name' />
        </div>

        <div className='form-group'>
            <label htmlFor ='userName'>Last Name</label>
            <input type='text' className='form-control' id='userName' placeholder='Username' />
        </div>

        <div className='form-group'>
            <label htmlFor ='emailAddress'>Email Address</label>
            <input type='email' className='form-control' id='emailAddress' placeholder='example@gmail.com' />
        </div>

        <div className='form-group'>
            <label htmlFor ='address'>Address</label>
            <input type='text' className='form-control' id='address' placeholder='Address' />
        </div>

        <div className='form-group'>
            <label htmlFor ='city'>City</label>
            <input type='text' className='form-control' id='city' placeholder='City' />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
    </form>
)

export default RegistrationForm;