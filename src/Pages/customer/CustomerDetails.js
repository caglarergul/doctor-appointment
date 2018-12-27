import React, {Component} from 'react';
import api from '../../Shared/ApiConnect';
import {Label, Grid, Segment, Table} from "semantic-ui-react";

class CustomerDetails extends Component {

    state = {
        customerId: this.props.match.params.id,
        customerData: [],
        customerFullName: ""
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
                        <Grid.Column>
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
                        <Grid.Column>
                            <Segment raised padded>


                                <Label as='a' color='blue' ribbon>
                                    Payment Information
                                </Label>


                                <Table celled striped>
                                    <Table.Body>
                                        <Table.Row>

                                            <Table.Cell><Label color='green' horizontal>Total
                                                Payment</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.totalPayment}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='green' horizontal>Payment
                                                Left</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.paymentLeft}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='green' horizontal>Payment Did</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.paymentDid}</Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell collapsing><Label color='green' horizontal>Appointment
                                                Credit</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.appointmentCredit}</Table.Cell>
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
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Segment raised padded>


                                <Label as='a' color='blue' ribbon>
                                    Payment Information
                                </Label>


                                <Table celled striped>
                                    <Table.Body>
                                        <Table.Row>

                                            <Table.Cell><Label color='green' horizontal>Total
                                                Payment</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.totalPayment}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='green' horizontal>Payment
                                                Left</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.paymentLeft}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell><Label color='green' horizontal>Payment Did</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.paymentDid}</Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell collapsing><Label color='green' horizontal>Appointment
                                                Credit</Label></Table.Cell>
                                            <Table.Cell>{this.state.customerData.appointmentCredit}</Table.Cell>
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
                    </Grid.Row>
                </Grid>


            </div>
        );
    }
}

export default CustomerDetails;