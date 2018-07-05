import React, { Component } from 'react';
import { Input } from '../Forms';
import './RegistrationForm.css';

class RegistrationForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        address: "",
        city: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ firstName: "", lastName: "", userName: "", email: "", address: "", city: "" })
    };

    render() {
        return (
                <form>


                <Input
                    value={this.state.firstName}
                    label = "First Name"
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="First Name"
                />

                <Input
                    value={this.state.lastName}
                    label = "Last Name"
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Last Name"
                />

                <Input
                    value={this.state.userName}
                    label = "username"
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username"
                />

                <Input
                    value={this.state.email}
                    label = "Email"
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="email"
                />

                <Input
                    value={this.state.address}
                    label = "Address"
                    onChange={this.handleInputChange}
                    name="address"
                    placeholder="Address"
                />

                <Input
                    value={this.state.city}
                    label = "City"
                    onChange={this.handleInputChange}
                    name="city"
                    placeholder="City"
                />

                <Input
                    value={this.state.state}
                    label = "State"
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="First Name"
                />

                <Input
                    value={this.state.zip}
                    label = "Zip"
                    onChange={this.handleInputChange}
                    name="zip"
                    placeholder="zip"
                />

                <button type="submit" className="btn btn-primary">Register</button>
            
                </form>


        );
    }
}


export default RegistrationForm;