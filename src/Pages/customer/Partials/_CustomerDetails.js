import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';


class _CustomerDetails extends Component {

    render() {
        return (

            <Table.Row id={this.props.id}>
                <Table.Cell>
                    {this.props.firstName}
                </Table.Cell>
                <Table.Cell>
                    {this.props.lastName}
                </Table.Cell>
                <Table.Cell>
                    {this.props.gender}
                </Table.Cell>
                <Table.Cell>
                    {this.props.totalPayment}
                </Table.Cell>
                <Table.Cell>
                    {this.props.paymentLeft}
                </Table.Cell>
                <Table.Cell Width={100}>
                    <div style={{'float':'right'}}>
                        <NavLink className={"ui icon  blue right tiny  button m-b-5"} to={"/customer/" + this.props.id}>
                            <i aria-hidden="true" className="right arrow icon">&nbsp;</i>
                        </NavLink>
                    </div>
                    <div  style={{'float':'left'}} hidden={this.props.updateButtonHidden}>
                        <a className={"ui icon  orange right  tiny button"}
                                 onClick={() => this.props.updateClick()}
                                 >
                            <i aria-hidden="true" className="right refresh icon">&nbsp;</i>
                        </a>
                    </div>
                </Table.Cell>
            </Table.Row>


        );
    }


}

export default _CustomerDetails;