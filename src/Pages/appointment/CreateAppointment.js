import React, {Component} from 'react';
import {Button, Checkbox, Form, Input, Select, TextArea} from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Çağlar Ergül', value: 'male' },
    { key: 'f', text: 'Pınar Ergül', value: 'female' },
    { key: 'f', text: 'Selda Hızlı', value: 'female' },
    { key: 'f', text: 'Adalet Ergül', value: 'female' },
];

const timeOptions = [
    { key: '12:00', text: '12:00', value: '12:00' },
    { key: '12:00', text: '12:30', value: '12:30' },
    { key: '12:00', text: '13:00', value: '13:00' },
    { key: '12:00', text: '13:30', value: '13:30' },
];

class CreateAppointment extends Component {
    state = {};
    handleChange = (e, { value }) => this.setState({ value });
    render() {
        const { value } = this.state;
        return (
            <div>
            <h1>Create an Appointment</h1>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field control={Input} label='Date' placeholder='25/12/2018' />

                    <Form.Field control={Select} label='Time' options={timeOptions} placeholder='Time' />
                    <Form.Field control={Select} label='Customer' options={options} placeholder='Select Customer' />
                </Form.Group>

                <Form.Field control={TextArea} label='Note' placeholder='Tell us more about the appointment' />

                <Button.Group position='right'>
                    <Button>Reset</Button>
                    <Button.Or />
                    <Button positive>Save</Button>
                </Button.Group>
            </Form>
            </div>
        )
    }
}

export default CreateAppointment;