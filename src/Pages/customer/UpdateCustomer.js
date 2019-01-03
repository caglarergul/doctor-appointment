import React, {Component} from 'react';
import {Button, Confirm, Dimmer, Form, Grid, Header, Icon, Input, Segment, Select, TextArea} from "semantic-ui-react";
import api from '../../Shared/ApiConnect';


const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'}
];


class UpdateCustomer extends Component {


    constructor(props) {
        super(props);
        this.state = {
        customerList: [],
        customerId: "",
        value: '',
        open: false,
        result: "",
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
        paymentLeft: "",
        birthYear: ""
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit() {

        const customerObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            phone: this.state.phone,
            email: this.state.email,
            currentWeight: parseInt(this.state.startWeight),
            startWeight: parseInt(this.state.startWeight),
            height: parseInt(this.state.height),
            totalPayment: parseInt(this.state.totalPayment),
            appointmentCredit: this.state.appointmentCredit,
            note: this.state.note,
            paymentDid: 0,
            paymentLeft: parseInt(this.state.totalPayment),
            birthYear: this.state.birthYear
        };

         this.sendPostRequest(customerObject,this.props.match.params.id);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleChangeGender = (e, {value}) => {
        this.setState({gender: value})
    };


    getCustomer = (id) => {

        api.get("customer/" + id).then(response => {


            this.setState({firstName: response.data.firstName});
            this.setState({lastName: response.data.lastName});
            this.setState({gender: response.data.gender});
            this.setState({phone: response.data.phone});
            this.setState({email: response.data.email});
            this.setState({note: response.data.note});
            this.setState({currentWeight: response.data.currentWeight});
            this.setState({startWeight: response.data.startWeight});
            this.setState({height: response.data.height});
            this.setState({totalPayment: response.data.totalPayment});
            this.setState({paymentDid: response.data.paymentDid});
            this.setState({paymentLeft: response.data.paymentLeft});
            this.setState({birthYear: response.data.birthYear});
            this.setState({appointmentCredit: response.data.appointmentCredit});
                console.log(this.state.gender)
        }).catch(error => {
            // handle error
            console.log(error);
        });

    };


    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({customerId: this.props.match.params.id});
            this.getCustomer(this.props.match.params.id);
        } else {
            console.log("No user id")
        }

        this.getCustomer(this.props.match.params.id);
        // console.log(this.state.customerUrlParamId)
        console.log("Did Mount");
    }

    show = () => this.setState({open: true});

    handleConfirm = () => {
        this.setState({result: 'confirmed', open: false});
        this.handleSubmit();
        this.handleOpen();
    };

    handleCancel = () => this.setState({result: 'cancelled', open: false})

    sendPostRequest = (data,id) => {
        api.put("customer/"+id, data).then(response => {
            console.log("Success");
        }).catch(error => {
            // handle error
            console.log(error);
        });
    };

    handleOpen = () => this.setState({active: true});
    handleClose = () => {
        this.setState({active: false});
        window.location.reload();
    };

    render() {
        const {open, active} = this.state;


        return (
            <div>

                <h1 className={"ui ui-header"}>Update Customer</h1>
                <Grid>
                    <Grid.Column>
                        <Segment raised padded>
                            <Form>


                                <Form.Group widths='equal'>
                                    <Form.Field control={Input} label='First name'
                                                value={this.state.firstName} name="firstName"
                                                onChange={this.handleChange}/>
                                    <Form.Field control={Input} label='Last name'
                                                value={this.state.lastName} name="lastName"
                                                onChange={this.handleChange}/>
                                    <Form.Field control={Select} label='Gender' options={options} value={this.state.gender} selectionvalue={this.state.gender}
                                                onChange={this.handleChangeGender} name="gender"/>


                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field control={Input} label='Phone' value={this.state.phone}
                                                name="phone"
                                                onChange={this.handleChange} placeholder='0XXX XXX XX XX'/>
                                    <Form.Field control={Input} label='E-mail' value={this.state.email}
                                                name="email"
                                                onChange={this.handleChange} placeholder=''/>
                                    <Form.Field control={Input} label='Birth Year'
                                                value={this.state.birthYear} name="birthYear"
                                                onChange={this.handleChange} placeholder='1990'/>

                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field control={Input} label='Start Weight (kg)'
                                                value={this.state.startWeight}
                                                name="startWeight" onChange={this.handleChange} placeholder='65'/>
                                    <Form.Field control={Input} label='Height (cm)'
                                                value={this.state.height} name="height"
                                                onChange={this.handleChange} placeholder='180'/>
                                </Form.Group>

                                <Form.Group widths='equal'>
                                    <Form.Field control={Input} label='Total Payment (₺)'
                                                value={this.state.totalPayment}
                                                name="totalPayment" onChange={this.handleChange} placeholder='500'/>
                                    <Form.Field control={Input} label='Appointment Credit (Day)'
                                                value={this.state.appointmentCredit}
                                                name="appointmentCredit"
                                                onChange={this.handleChange} placeholder='4'/>
                                </Form.Group>

                                <Form.Field control={TextArea} label='Note' value={this.state.note}
                                            name="note"
                                            onChange={this.handleChange} placeholder='Tell about the customer...'/>
                                <Button.Group>
                                    <Button type="reset">Cancel</Button>
                                    <Button.Or/>
                                    <Button type="submit" onClick={this.show} positive>Update</Button>
                                </Button.Group>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>

                <Confirm open={open} onCancel={this.handleCancel} onConfirm={this.handleConfirm}/>


                <Dimmer active={active} onClickOutside={this.handleClose} page>
                    <Header as='h2' icon inverted>
                        <Icon name='check'/>
                        Successfull!
                        <Header.Subheader>Operation is successful.</Header.Subheader>
                    </Header>
                </Dimmer>
            </div>
        );
    }
}

export default UpdateCustomer;