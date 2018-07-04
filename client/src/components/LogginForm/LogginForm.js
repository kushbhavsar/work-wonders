import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './LogginForm.css';


class LogginForm extends Component {
    state = {
        username: "",
        password: ""

    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            username: "",
            password: ""
        });
    };

    render() {
        return (
            <form id='logginform'>
                <div className='form-group username'>
                    {// <label htmlFor='userName'>Username</label> 
                    }
                    <TextField
                        type='text'
                        id='userName'
                        placeholder='username'
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />

                </div>

                <div className='form-group password' >
                    {// <label htmlFor ='inputPassword'>Password</label>
                    }
                    <TextField
                        type='password'
                        id='inputPassword'
                        placeholder='Password'
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />

                </div>

                <div>
                    <a href="#" >Register</a>
                </div>

            </form>
        );
    }
}

export default LogginForm;