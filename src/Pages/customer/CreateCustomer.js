import React, {Component} from 'react';
import api from '../../Shared/ApiConnect';
import {Button, Confirm, Form, Input, Select, TextArea, Dimmer, Header, Icon, Segment} from "semantic-ui-react";


const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'}
];

class CreateCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: "",
            open: false,
            firstName: "",
            lastName: "",
            gender: "",
            phone: "",
            email: "",
            currentWeight: "",
            startWeight: "",
            height: "",
            totalPayment: "",
            appointmentCredit: "",
            note: "",
            paymentDid: "",
            paymentLeft: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleChangeGender = (e, {value}) => {
        this.setState({gender: value})
    };

    handleSubmit() {
        const customerObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            phone: this.state.phone,
            email: this.state.email,
            currentWeight: this.state.currentWeight,
            startWeight: this.state.startWeight,
            height: this.state.height,
            totalPayment: this.state.totalPayment,
            appointmentCredit: this.state.appointmentCredit,
            note: this.state.note,
            paymentDid: this.state.paymentDid,
            paymentLeft: this.state.totalPayment
        };

        this.sendPostRequest(customerObject);
    }

    show = () => this.setState({open: true});

    handleConfirm = () => {
        this.setState({result: 'confirmed', open: false});
        this.handleSubmit();
        this.handleOpen();
    };

    handleCancel = () => this.setState({result: 'cancelled', open: false})

    sendPostRequest = (data) => {
        api.post("customer", data).then(response => {
            console.log(response.data);
        })
    };

    handleOpen = () => this.setState({active: true});
    handleClose = () => {
        this.setState({active: false});
        window.location.reload();
    };

    render() {

        const {value, open, active} = this.state;
        return (
            <div>
                <h1>Add a Customer</h1>
                <Segment raised>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label='First name' value={this.state.firstName} name="firstName"
                                        onChange={this.handleChange} placeholder='First name'/>
                            <Form.Field control={Input} label='Last name' value={this.state.lastName} name="lastName"
                                        onChange={this.handleChange} placeholder='Last name'/>
                            <Form.Field control={Select} label='Gender' options={options} selectionvalue={value}
                                        onChange={this.handleChangeGender} name="gender" placeholder='Gender'/>


                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label='Phone' value={this.state.phone} name="phone"
                                        onChange={this.handleChange} placeholder='0XXX XXX XX XX'/>
                            <Form.Field control={Input} label='E-mail' value={this.state.email} name="email"
                                        onChange={this.handleChange} placeholder=''/>

                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label='Start Weight (kg)' value={this.state.startWeight}
                                        name="startWeight" onChange={this.handleChange} placeholder='65'/>
                            <Form.Field control={Input} label='Height (cm)' value={this.state.height} name="height"
                                        onChange={this.handleChange} placeholder='180'/>
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label='Total Payment (₺)' value={this.state.totalPayment}
                                        name="totalPayment" onChange={this.handleChange} placeholder='500'/>
                            <Form.Field control={Input} label='Appointment Credit (Day)'
                                        value={this.state.appointmentCredit} name="appointmentCredit"
                                        onChange={this.handleChange} placeholder='4'/>
                        </Form.Group>

                        <Form.Field control={TextArea} label='Note' value={this.state.note} name="note"
                                    onChange={this.handleChange} placeholder='Tell about the customer...'/>
                        <Button.Group>
                            <Button type="reset">Reset</Button>
                            <Button.Or/>
                            <Button type="submit" onClick={this.show} positive>Create</Button>
                        </Button.Group>
                    </Form>

                    <Confirm open={open} onCancel={this.handleCancel} onConfirm={this.handleConfirm}/>


                    <Dimmer blurring active={active} onClickOutside={this.handleClose} page>
                        <Header as='h2' icon inverted>
                            <Icon name='check'/>
                            Successfull!
                            <Header.Subheader>Operation is successful.</Header.Subheader>
                        </Header>
                    </Dimmer>
                </Segment>
            </div>


        );
    }
}

export default CreateCustomer;