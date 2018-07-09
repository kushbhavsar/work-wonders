import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Input, USstate } from './Forms';
import './RegistrationForm.css';

class RegistrationForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        address: "",
        address_2:"",
        city: "",
        USstate:"",
        zip: "",


    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`   first name: ${this.state.firstName}
                        last name: ${this.state.firstName}
                        email: ${this.state.email}
                        address: ${this.state.address}
                        address_2: ${this.state.address_2}
                        city: ${this.state.city}
                        USstate: ${this.state.USstate}
                        zip: ${this.state.zip}`);
    

        this.setState({ firstName: "", lastName: "", userName: "", email: "", address: "",address_2:"", city: "", USstate: "", zip: "" })
    };

    render() {
        return (
            <form className="needs-validation" noValidate>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Input
                            value={this.state.firstName} label="First Name" onChange={this.handleInputChange} name="firstName" placeholder="First Name" required
                        />
                        <div className="invalid-feedback">
                            Please enter your First name.
                        </div>
                    </div>

                    <div className="form-group col-md-6">

                        <Input
                            value={this.state.lastName} label="Last Name" onChange={this.handleInputChange}
                            name="lastName" placeholder="Last Name" required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Input
                            value={this.state.userName} label="username" onChange={this.handleInputChange}
                            name="userName" placeholder="username" required
                        />
                    </div>
                
                    <div className="form-group col-md-6">
                        <Input
                            value={this.state.email} label="Email" onChange={this.handleInputChange}
                            name="email" placeholder="email" required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6" >
                        <Input
                            value={this.state.address} label="Address" onChange={this.handleInputChange}
                            name="address" placeholder="123 Walnut Street" required
                        />
                    </div>
                    <div className="form-group col-md-6" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6" >
                        <Input
                            value={this.state.address_2} label="Address 2" onChange={this.handleInputChange}
                            name="address_2" placeholder="Apt, Studio or Floor" 
                        />
                    </div>
                    <div className="form-group col-md-6" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4" >
                        <Input
                            value={this.state.city} label="City" onChange={this.handleInputChange}
                            name="city" placeholder="City" required
                        />
                    </div>

                    <div className="form-group col-md-4" >
                        <USstate
                            value={this.state.USstate} label="State" onChange={this.handleInputChange}
                            name="State" placeholder="State"  required
                        />
                    </div>

                    <div className="form-group col-md-4" >
                        <Input
                            value={this.state.zip} label="Zip" onChange={this.handleInputChange} name="zip"
                            placeholder="zip" required
                        />
                    </div>
                </div>
                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-lg" id="registerBtn">Register
                </button>

            </form>
        );
    }
}


export default RegistrationForm;