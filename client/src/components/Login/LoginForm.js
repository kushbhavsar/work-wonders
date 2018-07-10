import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
                    <button type="button"  className= "btn btn-primary btn-sm"> Sign in
                    <Link to="/bidauction"/>
                    </button>
                </div>

                <hr id= "line"/>

                <div  id="signUp">
                   <p> Not a member yet ... <a href="#" > Sign up</a></p>
                </div>


            </form>
        );
    }
}

export default LoginForm;