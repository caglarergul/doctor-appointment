import React, {Component} from 'react';
import api from '../../Shared/ApiConnect';
import {Label, Grid, Segment, Table, Icon, Form, Button} from "semantic-ui-react";
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
    }

    addPaymentHandler = () => {
        this.handleSubmit();
    };



    handleSubmit() {
        api.post("customer/"+this.state.customerId, ).then(response => {
            console.log(response.data);
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
            console.log(updatedCustomerData);
            this.setState({customerData: updatedCustomerData});
            const FullName = updatedCustomerData.firstName + " " + updatedCustomerData.lastName;
            this.setState({customerFullName: FullName});
        });
        console.log("ID:");
        console.log(this.state.customerId);
        console.log("State:");
        console.log(this.state.customerId);
    };

    componentWillMount() {
        this.getAllDetailsFromCustomer(this.state.customerId);
    }

    render() {
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
                                            <Table.Cell>{this.state.customerData.firstName}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='grey' horizontal>E-Mail</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.email}</Table.Cell>
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
                                    <a className={"ui button green tiny"} onClick={this.showHideAddPayment}><Icon
                                        name='payment'/> Add Payment</a>
                                    <NavLink className={"ui button blue tiny"}
                                             to={"/customer/update/" + this.state.customerId}><Icon name='male'/>Set
                                        Appointment</NavLink>
                                </div>
                                <div className={"add-payment m-t-28"} hidden={this.state.paymentShow}>
                                    <Form>
                                        <Form.Field>
                                            <label>How much did your customer pay?</label>
                                            <input placeholder='100' value={this.state.paymentValue}/>
                                        </Form.Field>


                                        <Button compact color='green' name={"addPayment"} value={this.state.addPayment} onClick={this.addPaymentHandler} inverted>Add</Button>
                                    </Form>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


            </div>
        );
    }
}

export default CustomerDetails;