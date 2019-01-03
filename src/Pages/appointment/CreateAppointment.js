import React, {Component} from 'react';
import {Button, Confirm, Dimmer, Form, Header, Icon, Segment, Select, TextArea} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import DateTimeButton from './Partials/_DateTimeButton';
import 'react-datepicker/dist/react-datepicker.min.css';
import api from "../../Shared/ApiConnect";


class CreateAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            customerList: [],
            relatedCustomerId: '',
            relatedCustomerFullName:'',
            notes: '',
            customerData: []

        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChangeDate(date) {
        this.setState({startDate: date})

    }

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
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleChangeCustomer = (e, {value}) => {
        this.setState({relatedCustomerId: value});
        api.get('customer/' + value).then(response => {
            this.setState({customerData: response.data});
            this.setState({relatedCustomerFullName: response.data.firstName + ' ' + response.data.lastName});
            console.log(this.state.customerData);
        });

    };

    handleSubmit() {

        const appointmentObject = {
            relatedCustomerId: this.state.relatedCustomerId,
            notes: this.state.notes,
            date: this.state.startDate,
            relatedCustomerFullName: this.state.relatedCustomerFullName
        };

        this.sendPostRequest(appointmentObject);
        this.updateCustomerAppointmentCount();
    }


    updateCustomerAppointmentCount = () => {
        let newAppointmentCredit = parseInt(this.state.customerData.appointmentCredit);
        newAppointmentCredit = newAppointmentCredit - 1;

        const updatedCustomerDataArray = this.state.customerData;
        updatedCustomerDataArray.appointmentCredit = newAppointmentCredit.toString();

        api.put('customer/' + this.state.relatedCustomerId, updatedCustomerDataArray).then(response => {

            console.log("customer appointment count is updated: \n" + response.data.toString());
        })
    };

    show = () => this.setState({open: true});

    handleConfirm = () => {
        this.setState({result: 'confirmed', open: false});
        this.handleSubmit();
        this.handleOpen();
    };

    handleCancel = () => this.setState({result: 'cancelled', open: false});

    sendPostRequest = (data) => {
        api.post("appointment", data).then(response => {
            console.log(response.data);
        })
    };

    handleOpen = () => this.setState({active: true});
    handleClose = () => {
        this.setState({active: false});
        window.location.reload();
    };

    render() {

        let customers = this.state.customerList.map(customer => {
            let customerList = {key: customer._id, text: customer.firstName, value: customer._id};
            return customerList
        });
        const {open, active} = this.state;
        return (
            <div>
                <h1>Create an Appointment</h1>
                <Segment raised>
                    <Form>
                        <Form.Group>
                            <Form.Field widths='5'>
                                <label>Select Appointment Date</label>
                                <DatePicker
                                    calendarClassName={" "}
                                    showTimeSelect
                                    customInput={<DateTimeButton/>}
                                    selected={this.state.startDate}
                                    onChange={this.handleChangeDate}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    dropdownMode={"select"}/>
                            </Form.Field>
                            <Form.Field control={Select} label='Select Customer' options={customers}
                                        placeholder='Select Customer' onChange={this.handleChangeCustomer}/>
                        </Form.Group>

                        <Form.Field control={TextArea} name={"notes"} onChange={this.handleChange} label='Note' placeholder='Tell us more about the appointment'/>

                        <Button.Group position='right'>
                            <Button>Reset</Button>
                            <Button.Or/>
                            <Button positive onClick={this.show}>Save</Button>
                        </Button.Group>
                    </Form>

                    <Confirm open={open} onCancel={this.handleCancel} onConfirm={this.handleConfirm}/>


                    <Dimmer active={active} onClickOutside={this.handleClose} page>
                        <Header as='h2' icon inverted>
                            <Icon name='check'/>
                            Successfull!
                            <Header.Subheader>Operation is successful.</Header.Subheader>
                        </Header>
                    </Dimmer>
                </Segment>
            </div>
        )
    }
}

export default CreateAppointment;