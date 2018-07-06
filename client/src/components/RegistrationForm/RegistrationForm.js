import React, { Component } from 'react';
import { Input, USstate } from '../Forms';
import './RegistrationForm.css';

const allStates = [ "AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]


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
        this.setState({ firstName: "", lastName: "", userName: "", email: "", address: "",address_2:"", city: "", USstate: "", zip: "" })
    };






    render() {
        return (
            <form>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Input
                            value={this.state.firstName} label="First Name" onChange={this.handleInputChange} name="firstName" placeholder="First Name"
                        />
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
                            value={this.state.userName} label="username" onChange={this.handleInputChange}
                            name="username" placeholder="username"
                        />
                    </div>
                
                    <div className="form-group col-md-6">
                        <Input
                            value={this.state.email} label="Email" onChange={this.handleInputChange}
                            name="email" placeholder="email"
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
                            name="State" placeholder="State" allStates= {this.allStates}
                        />
                    </div>

                    <div className="form-group col-md-4" >
                        <Input
                            value={this.state.zip} label="Zip" onChange={this.handleInputChange} name="zip"
                            placeholder="zip"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>

            </form>
        );
    }
}


export default RegistrationForm;