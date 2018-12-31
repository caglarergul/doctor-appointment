import React, {Component} from 'react';
import {Table} from "semantic-ui-react";
import api from '../../Shared/ApiConnect';
import CustomerDetails from "./Partials/_CustomerDetails";

class ListCustomers extends Component {
    state = {
        customerList: []
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


        this.getAllCustomers()

    }

    render() {

        let customers = this.state.customerList.map(customer => {
            return <CustomerDetails key={customer._id} id={customer._id} firstName={customer.firstName}
                                     lastName={customer.lastName} gender={customer.gender}
                                     totalPayment={customer.totalPayment} appointmentCredit={customer.appointmentCredit} updateButtonHidden={true} paymentLeft={customer.paymentLeft}/>;
        });

        return (
            <div>
                <h1 className={"ui ui-header"}>List All Customers</h1>
                <Table celled striped color={'blue'}  compact='very'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>First name</Table.HeaderCell>
                            <Table.HeaderCell>Last name</Table.HeaderCell>
                            <Table.HeaderCell>Gender</Table.HeaderCell>
                            <Table.HeaderCell>Total Payment</Table.HeaderCell>
                            <Table.HeaderCell>Payment Left</Table.HeaderCell>
                            <Table.HeaderCell  collapsing>Appointment Credit</Table.HeaderCell>
                            <Table.HeaderCell collapsing>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {customers}
                    </Table.Body>
                </Table>
            </div>

        );
    }
}

export default ListCustomers;