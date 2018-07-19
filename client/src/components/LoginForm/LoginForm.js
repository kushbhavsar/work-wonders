import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import './LoginForm.css';
import Api from "../../utils/Api";


class LoginForm extends Component {
    state = {
        username: "",
        usernameError: "",
        password: "",
        passwordError:""

    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    // validate = () => {

    //     let isError = false;
    //     const errors ={};

    //     if (this.state.username.indexOf("@") === -1){
    //         isError =true;
    //         errors.usernameError = "Requires valid email";
    //     }

    //     if (isError) {
    //         this.setState({
    //             ...this.state,
    //             ...errors
    //         });
    //     }

    //     return isError;
    // }


    handleFormSubmit = event => {
        event.preventDefault();
        //validating
        // const val = validate();
        // if(!err){
        //clear form
        this.setState({
            username: "",
            password: ""
        });
    
        console.log(this.state);

        window.location.href = "/bidauction";


        Api.checkUsers({
            email: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log('login response: ')
                console.log(response)

                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })


                } else  {

                    //update the state to redirect to home
                   // this.setState({
                   //     redirectTo: '/'
                   // })

                   window.location.href = "/";


                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
            })

    };

    render() {
     //   if (this.state.redirectTo) {
     //       // return <Redirect to={{ pathname: this.state.redirectTo }} />
     //   }
    //    else {
            return (
                <div>
                    <form id='loginform'>
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
                                errorText={this.state.usernameError}
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
                                errorText={this.state.passwordError}
                            />

                        </div>

                        <div>
                            <button type="button" onClick={this.handleFormSubmit} className="btn btn-primary btn-sm">
                                Sign In
                                </button>
                        </div>

                        <hr id="line" />

                        <div id="signUp">
                            <p> Not a member yet ... <a href="/register" > Sign up</a></p>
                        </div>


                    </form>
                </div>
            );
     //   }
    }

}
export default LoginForm;