import React, {Component} from 'react';
import api from '../../Shared/ApiConnect';
import {Label, Header, Grid, Segment, Table, Icon, Form, Button, Input, Dimmer} from "semantic-ui-react";
import {NavLink} from 'react-router-dom';

class CustomerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: this.props.match.params.id,
            customerData: [],
            customerFullName: "",
            paymentShow: true,
            addPayment: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        // console.log(event.target.value)
    }

    addPaymentHandler = () => {
        this.handleSubmit();
    };



    handleSubmit() {
        const updatedCustomerData = {
            ...this.state.customerData
        };

        updatedCustomerData.paymentDid =  parseInt(updatedCustomerData.paymentDid) + parseInt(this.state.addPayment);
        updatedCustomerData.paymentLeft = parseInt(updatedCustomerData.totalPayment - updatedCustomerData.paymentDid);

        // console.log(updatedCustomerData);
         api.put("customer/"+this.state.customerId, updatedCustomerData).then(response => {
             console.log(response.data);
             this.handleOpen();
         })


    }




    showHideAddPayment = () => {
        if (this.state.paymentShow === true) {
            this.setState({paymentShow: false});
        } else {
            this.setState({paymentShow: true});
        }

    };

    getAllDetailsFromCustomer = (CustomerID) => {
        api.get('customer/' + CustomerID).then(response => {
            const updatedCustomerData = response.data;
           // console.log(updatedCustomerData);
            this.setState({customerData: updatedCustomerData});
            const FullName = updatedCustomerData.firstName + " " + updatedCustomerData.lastName;
            this.setState({customerFullName: FullName});
        });
        // console.log("ID:");
        // console.log(this.state.customerId);
        // console.log("State:");
        // console.log(this.state.customerId);
    };
    handleOpen = () => this.setState({active: true});
    handleClose = () => {
        this.setState({active: false});
        window.location.reload();
    };
    componentWillMount() {
        this.getAllDetailsFromCustomer(this.state.customerId);
    }

    render() {
        const {active} = this.state;
        const age = (new Date()).getFullYear() - parseInt(this.state.customerData.birthYear);
        return (
            <div>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column width={7}>
                            <Segment raised padded>
                                <Label as='a' color='blue' ribbon>
                                    Basic Information
                                </Label>

                                <Table celled striped>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell collapsing><Label color='grey' horizontal>First
                                                Name</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.firstName}</Table.Cell>

                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='grey' horizontal>Last name</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.lastName}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='grey' horizontal>Gender</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.gender}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='grey' horizontal>E-Mail</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.email}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='grey' horizontal>Age</Label></Table.Cell>
                                            <Table.Cell>{age}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='grey' horizontal>Phone</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.phone}</Table.Cell>
                                        </Table.Row>


                                    </Table.Body>
                                </Table>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Segment raised padded>


                                <Label as='a' color='blue' ribbon>
                                    Body Information
                                </Label>


                                <Table celled striped>
                                    <Table.Body>
                                        <Table.Row>

                                            <Table.Cell><Label color='green' horizontal>Start
                                                Weight</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.startWeight} kg</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing><Label color='green' horizontal>Current
                                                Weight</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.currentWeight} kg</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing><Label color='green' horizontal>Lost
                                                Weight</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.startWeight - this.state.customerData.currentWeight} kg</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='green' horizontal>Height</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.height} cm</Table.Cell>
                                        </Table.Row>


                                    </Table.Body>
                                </Table>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>


                        <Grid.Column width={7}>
                            <Segment raised padded>


                                <Label as='a' color='blue' ribbon>
                                    Payment Information
                                </Label>


                                <Table celled striped>
                                    <Table.Body>
                                        <Table.Row>

                                            <Table.Cell><Label color='green' horizontal>Total
                                                Payment</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.totalPayment} ₺</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='green' horizontal>Payment
                                                Left</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.paymentLeft} ₺</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='green' horizontal>Payment Did</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.paymentDid} ₺</Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell collapsing><Label color='green' horizontal>Appointment
                                                Credit</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.appointmentCredit} days</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing><Label color='green'
                                                                          horizontal>Notes</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.note}</Table.Cell>
                                        </Table.Row>

                                    </Table.Body>
                                </Table>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Segment raised padded>
                                <div className="ui three buttons">
                                    <NavLink className={"ui button tiny orange"}
                                             to={"/customer/update/" + this.state.customerId}><Icon
                                        name='refresh'/> Update Information</NavLink>
                                    <button className={"ui button green tiny"} onClick={this.showHideAddPayment}><Icon
                                        name='payment'/> Add Payment</button>
                                    <NavLink className={"ui button blue tiny"}
                                             to={"/appointments/create/:" + this.state.customerId}><Icon name='male'/>Set
                                        Appointment</NavLink>
                                </div>
                                <div className={"add-payment m-t-28"} hidden={this.state.paymentShow}>
                                    <Form>

                                        <Form.Field control={Input} label='How much did your customer pay?' value={this.state.addPayment}
                                                    name="addPayment" onChange={this.handleChange} placeholder='100'/>

                                        <Button compact color='green' name={"addPayment"}  onClick={this.addPaymentHandler} inverted>Add</Button>
                                    </Form>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Dimmer blurring active={active} onClickOutside={this.handleClose} page>
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

export default CustomerDetails;