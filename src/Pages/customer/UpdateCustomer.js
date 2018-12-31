import React, {Component} from 'react';
import {Grid, Segment, Select, Form, Input, TextArea, Button} from "semantic-ui-react";
import api from '../../Shared/ApiConnect';
import CustomerDetails from "./Partials/_CustomerDetails";
import UpdateCustomerPartial from "./Partials/_UpdateCustomer";


const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'}
];
class UpdateCustomer extends Component {
    state = {
        customerList: [],
        customerUrlParamId : this.props.match.params.id
    };


    getAllCustomers = () => {
        api.get("customers").then(response => {
            // handle success
            const updatedCustomerList = response.data.map(customers => {
                return {...customers};
            });
            this.setState({customerList: updatedCustomerList});
        }).catch(error => {
            // handle error
            console.log(error);
        });
    };

    componentDidMount() {
        this.getAllCustomers();
        console.log(this.state.customerUrlParamId)
    }

    render() {
        const {value, open, active} = this.state;
        let customerList = this.state.customerList.map(customer => {
            const options =
                {key: [customer._id], text: [customer.firstName + ' ' + customer.lastName], value: [customer._id]}
            ;

            return options;
        });

        return (
                    <div>
                        <h1 className={"ui ui-header"}>Update Customer</h1>
                        <Grid>
                            <Grid.Column>
                                <Segment raised padded>
                                    <Form>
                                    <Form.Group widths='200'>
                                        <Form.Field control={Select} label='Customer Name' options={customerList} placeholder='Customer Name' />
                                    </Form.Group>

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
                                        <Form.Field control={Input} label='Birth Year' value={this.state.birthYear} name="birthYear"
                                                    onChange={this.handleChange} placeholder='1990'/>

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
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </div>
        );
    }
}

export default UpdateCustomer;