import React from 'react';
import {Table} from "semantic-ui-react";
import {NavLink} from "react-router-dom";


const customerPartial = (props) => (
    <Table.Row id={props.id}>
        <Table.Cell>
            {props.firstName}
        </Table.Cell>
        <Table.Cell>
            {props.lastName}
        </Table.Cell>
        <Table.Cell>
            {props.gender}
        </Table.Cell>
        <Table.Cell>
            {props.totalPayment}
        </Table.Cell>
        <Table.Cell>
            {props.paymentLeft}
        </Table.Cell>
        <Table.Cell collapsing>
            <NavLink className={"ui icon compact blue right labeled button"} to={"customer/" + props.id}>
                Show <i aria-hidden="true" className="right arrow icon">&nbsp;</i>
            </NavLink>
        </Table.Cell>
    </Table.Row>

);
export default customerPartial;