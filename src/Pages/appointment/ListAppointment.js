import React, {Component} from 'react';
import {Icon, Table, Button} from 'semantic-ui-react'

class ListAppointment extends Component {
    render() {
        return (
            <div>
                <h1>List of All Appointments</h1>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Customer Name</Table.HeaderCell>
                            <Table.HeaderCell>Appointment Date</Table.HeaderCell>
                            <Table.HeaderCell>Time</Table.HeaderCell>
                            <Table.HeaderCell Width={"100px"}>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell collapsing>
                                1
                            </Table.Cell>
                            <Table.Cell>Çağlar ERGÜL</Table.Cell>
                            <Table.Cell>
                                25 December 2018
                            </Table.Cell>
                            <Table.Cell>12:00pm</Table.Cell>
                            <Table.Cell>
                                <Button icon labelPosition='right'>Show<Icon
                                    name='right arrow'/></Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell collapsing>
                                1
                            </Table.Cell>
                            <Table.Cell>Çağlar ERGÜL</Table.Cell>
                            <Table.Cell>
                                25 December 2018
                            </Table.Cell>
                            <Table.Cell>12:00pm</Table.Cell>
                            <Table.Cell>
                                <Button icon labelPosition='right'>Show<Icon
                                    name='right arrow'/></Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell collapsing>
                                1
                            </Table.Cell>
                            <Table.Cell>Çağlar ERGÜL</Table.Cell>
                            <Table.Cell>
                                25 December 2018
                            </Table.Cell>
                            <Table.Cell>12:00pm</Table.Cell>
                            <Table.Cell>
                                <Button icon labelPosition='right'>Show<Icon
                                    name='right arrow'/></Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell collapsing>
                                1
                            </Table.Cell>
                            <Table.Cell>Çağlar ERGÜL</Table.Cell>
                            <Table.Cell>
                                25 December 2018
                            </Table.Cell>
                            <Table.Cell>12:00pm</Table.Cell>
                            <Table.Cell>
                                <Button icon labelPosition='right'>Show<Icon
                                    name='right arrow'/></Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell collapsing>
                                1
                            </Table.Cell>
                            <Table.Cell>Çağlar ERGÜL</Table.Cell>
                            <Table.Cell>
                                25 December 2018
                            </Table.Cell>
                            <Table.Cell>12:00pm</Table.Cell>
                            <Table.Cell>
                                <Button icon labelPosition='right'>Show<Icon
                                    name='right arrow'/></Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell collapsing>
                                1
                            </Table.Cell>
                            <Table.Cell>Çağlar ERGÜL</Table.Cell>
                            <Table.Cell>
                                25 December 2018
                            </Table.Cell>
                            <Table.Cell>12:00pm</Table.Cell>
                            <Table.Cell>
                                <Button icon labelPosition='right'>Show<Icon
                                    name='right arrow'/></Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell collapsing>
                                1
                            </Table.Cell>
                            <Table.Cell>Çağlar ERGÜL</Table.Cell>
                            <Table.Cell>
                                25 December 2018
                            </Table.Cell>
                            <Table.Cell>12:00pm</Table.Cell>
                            <Table.Cell>
                                <Button icon labelPosition='right'>Show<Icon
                                    name='right arrow'/></Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell collapsing>
                                1
                            </Table.Cell>
                            <Table.Cell>Çağlar ERGÜL</Table.Cell>
                            <Table.Cell>
                                25 December 2018
                            </Table.Cell>
                            <Table.Cell>12:00pm</Table.Cell>
                            <Table.Cell>
                                <Button icon labelPosition='right'>Show<Icon
                                    name='right arrow'/></Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </div>
        );
    }
}

export default ListAppointment;