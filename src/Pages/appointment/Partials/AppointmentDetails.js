import React, {Component} from 'react';
import {Button, Icon,Table} from "semantic-ui-react";
import moment from 'moment';
import 'moment/locale/tr';
moment.locale('tr');
class AppointmentDetails extends Component {

    render() {
        return (
            <Table.Row>

                <Table.Cell>{this.props.relatedCustomerFullName}</Table.Cell>
                <Table.Cell>
                    {moment(this.props.date).locale("tr").format("Do MMMM, dddd, YYYY, HH:mm")}
                </Table.Cell>
                <Table.Cell>{this.props.notes}</Table.Cell>
                <Table.Cell>
                    <Button icon labelPosition='right' color={'orange'}>Update<Icon
                        name='right refresh'/></Button>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default AppointmentDetails;