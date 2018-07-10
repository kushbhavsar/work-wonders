import React, { Component } from 'react';
import { Input, USstate } from './Forms';
import './RegistrationForm.css';
import Api from "../../utils/Api";

class RegistrationForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password:"",
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
                        last name: ${this.state.lastName}
                        email: ${this.state.email}
                        password: ${this.state.password}
                        address: ${this.state.address}
                        address_2: ${this.state.address_2}
                        city: ${this.state.city}
                        USstate: ${this.state.USstate}
                        zip: ${this.state.zip}`);

        Api.saveUsers({

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            address_2: this.state.address_2,
            city: this.state.city,
            USstate: this.state.USstate,
            zip: this.state.zip

        })
         .catch(err => console.log(err));


        //window.location.href = "/bidauction" 
    
        this.setState({ firstName: "", lastName: "", password: "", email: "", address: "",address_2:"", city: "", USstate: "", zip: "" })
    };

    render() {
        return (
            <form >

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Input
                            value={this.state.firstName} label="First Name" onChange={this.handleInputChange} name="firstName" placeholder="First Name" 
                        />
                        <div className="invalid-feedback">
                            Please enter your First name.
                        </div>
                    </div>

                    <div className="form-group col-md-6">

                        <Input
                            value={this.state.lastName} label="Last Name" onChange={this.handleInputChange}
                            name="lastName" placeholder="Last Name" 
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Input
                            value={this.state.email} label="Email" onChange={this.handleInputChange}
                            name="email" placeholder="email@example.com" 
                        />
                    </div>
                
                    <div className="form-group col-md-6">
                        <Input
                            value={this.state.password} label="Password" onChange={this.handleInputChange}
                            name="password" placeholder="password" 
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6" >
                        <Input
                            value={this.state.address} label="Address" onChange={this.handleInputChange}
                            name="address" placeholder="123 Walnut Street" 
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
                            name="city" placeholder="City" 
                        />
                    </div>

                    <div className="form-group col-md-4" >
                        <USstate
                            value={this.state.USstate} label="State" onChange={this.handleInputChange}
                            name="State" placeholder="State"  
                        />
                    </div>

                    <div className="form-group col-md-4" >
                        <Input
                            value={this.state.zip} label="Zip" onChange={this.handleInputChange} name="zip"
                            placeholder="zip" 
                        />
                    </div>
                </div>


                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-lg" id="registerBtn">
                    Register
                </button>

            </form>
        );
    }
}


export default RegistrationForm;