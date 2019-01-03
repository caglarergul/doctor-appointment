import React, {Component} from 'react';
import {Table, Segment} from 'semantic-ui-react'
import api from '../../Shared/ApiConnect';
import AppointmentDetails from "./Partials/_AppointmentDetails";
class ListAppointment extends Component {

    state = {
      appointmentList : []
    };


    getAllAppointments = () => {
        api.get('appointments').then(response => {
            let updatedList = response.data.map(appointments => {
                return {...appointments}
            });

            this.setState({appointmentList: updatedList});
        }).catch(error => {
            // handle error
            console.log(error);
        });

        console.log(this.state.appointmentList);
    };

    componentDidMount() {
        this.getAllAppointments();
    }

    render() {

        let appointments = this.state.appointmentList.map(appointment => {
           return <AppointmentDetails key={appointment._id} id={appointment._id}
                                       relatedCustomerId={appointment.relatedCustomerId}
                                       relatedCustomerFullName={appointment.relatedCustomerFullName}
                                       notes={appointment.notes} date={appointment.date}/>
        });

        return (
            <div>
                <h1>List of All Appointments</h1>
                <Segment padded>
                    <Table celled striped color={'red'}  compact='very'>
                        <Table.Header>
                            <Table.Row>

                                <Table.HeaderCell>Customer Name</Table.HeaderCell>
                                <Table.HeaderCell>Appointment Date</Table.HeaderCell>
                                <Table.HeaderCell>Notes</Table.HeaderCell>
                                <Table.HeaderCell>Details</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {appointments}
                        </Table.Body>
                    </Table>
                </Segment>


            </div>
        );
    }
}

export default ListAppointment;