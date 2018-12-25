import React, {Component} from 'react';

import {Button, Checkbox, Form, Input, Select, TextArea} from "semantic-ui-react";
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];
class CreateCustomer extends Component {

    state = {};

    handleChange = (e, { value }) => this.setState({ value })
    render() {
        return (
            <div>
                <h1>Add a Customer</h1>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='First name' placeholder='First name' />
                        <Form.Field control={Input} label='Last name' placeholder='Last name' />
                        <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
                    </Form.Group>

                    <Form.Field control={TextArea} label='Description' placeholder='Tell us more about you...' />
                    <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
                    <Form.Field control={Button}>Submit</Form.Field>
                </Form>
            </div>
        );
    }
}

export default CreateCustomer;