import React, {Component} from 'react';
import {Button, Icon, Table} from "semantic-ui-react";
import moment from 'moment';
import 'moment/locale/tr';
import api from "../../../Shared/ApiConnect";

moment.locale('tr');

class _AppointmentDetails extends Component {



    handleDeleteAppointment = (id) => {
        let confirm = window.confirm('Are You Sure?');

        if (confirm === true) {
            api.delete('appointment/' + id).then(response => {
                alert("Successfully Deleted!");
                console.log(response.data);
                window.location.reload();
            });
        } else {

        }
    };

    render() {
        return (

            <Table.Row>

                <Table.Cell>{this.props.relatedCustomerFullName}</Table.Cell>
                <Table.Cell>
                    {moment(this.props.date).locale("tr").format("Do MMMM, dddd, YYYY, HH:mm")}
                </Table.Cell>
                <Table.Cell>{this.props.notes}</Table.Cell>
                <Table.Cell collapsing>
                    <Button className={"ui icon  orange right tiny  button m-b-5"}><Icon
                        className={"right refresh icon"}/></Button>
                    <Button className={"ui icon  red right tiny  button m-b-5"} data-id={this.props.id} onClick={()=>this.handleDeleteAppointment(this.props.id)}>
                        <Icon className={"right trash icon"}/>
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default _AppointmentDetails;