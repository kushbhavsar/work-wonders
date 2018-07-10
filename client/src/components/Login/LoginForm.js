import React from 'react';
import TextField from '@material-ui/core/TextField';

import './LogginForm.css';

const LogginForm = props => (
    <form id = 'logginform'>
        <div  className='form-group username'>
           {// <label htmlFor='userName'>Username</label> 
           }
            <TextField  type='text'  id ='userName' placeholder='username'/>
            
        </div>

        <div className='form-group password' >
            {// <label htmlFor ='inputPassword'>Password</label>
            }
            <TextField  type='password'  id='inputPassword'placeholder='Password'/>

        </div>

        <div>
            <a href="#" >Register</a>
        </div>

    </form>
)

export default LoginForm;