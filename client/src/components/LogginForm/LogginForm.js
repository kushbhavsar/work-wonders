import React from 'react';

import './LogginForm.css';

const LogginForm = props => (
    <form>
        <div className='form-group'>
            <label htmlFor='userName'>Username</label>
            <input type='text' className='form-control' id ='userName' placeholder='Enter username'/>
            
        </div>

        <div className='form-group'>
            <label htmlFor ='inputPassword'>Password</label>
            <input type='password' className='form-control' id='inputPassword'placeholder='Password'/>

        </div>

        <div>
            <a href="#" >Register</a>
        </div>

    </form>
)

export default LogginForm;