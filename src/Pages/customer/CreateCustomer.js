import React, {Component} from 'react';
import api from '../../Shared/ApiConnect';
import {Button, Form, Input, Select, TextArea} from "semantic-ui-react";


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' }
];
class CreateCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {

                firstName : "",
                lastName: "",
                gender:"",
                phone:"",
                email:"",
                currentWeight:"",
                startWeight:"",
                height:"",
                totalPayment:"",
                appointmentCredit:"",
                note:"",
                paymentDid:"",
                paymentLeft:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
        console.log(event.target.value)
    }

    handleChangeGender = (e, { value }) =>  {
        let genderValue = value;
        this.setState({ gender: genderValue })
    };

    handleSubmit(event) {
        console.log(this.state);
        this.sendPostRequest(this.state);
        event.preventDefault();
    }


    sendPostRequest = (data) => {
        api.post("customer", data).then(response => {
            console.log(response.data);
        })
    };

    componentDidMount() {

    }


    render() {

        const {  value } = this.state;
        return (
            <div>
                <h1>Add a Customer</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='First name' value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder='First name' />
                        <Form.Field control={Input} label='Last name' value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder='Last name' />
                        <Form.Field control={Select} label='Gender' options={options} selectionvalue={value} onChange={this.handleChangeGender} name="gender" placeholder='Gender' />



                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='Phone' value={this.state.phone} name="phone" onChange={this.handleChange} placeholder='0XXX XXX XX XX' />
                        <Form.Field control={Input} label='E-mail' value={this.state.email} name="email"  onChange={this.handleChange} placeholder='' />

                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='Start Weight (kg)' value={this.state.startWeight} name="startWeight"  onChange={this.handleChange} placeholder='65' />
                        <Form.Field control={Input} label='Height (cm)' value={this.state.height} name="height"  onChange={this.handleChange} placeholder='180' />
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='Total Payment (₺)' value={this.state.totalPayment} name="totalPayment"  onChange={this.handleChange} placeholder='500' />
                        <Form.Field control={Input} label='Appointment Credit (Day)' value={this.state.appointmentCredit} name="appointmentCredit"  onChange={this.handleChange} placeholder='4' />
                    </Form.Group>

                    <Form.Field control={TextArea} label='Note' value={this.state.note} name="note"  onChange={this.handleChange} placeholder='Tell about the customer...' />
                    <Button.Group>
                        <Button type="reset">Reset</Button>
                        <Button.Or />
                        <Button type="submit" positive>Create</Button>
                    </Button.Group>
                </Form>
            </div>
        );
    }
}

export default CreateCustomer;