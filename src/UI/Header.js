import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';


class Header extends Component {
    state = {};


    render() {

        return (
            <Menu stackable>
                <Menu.Item header>
                    <NavLink to="/">
                        DoctorSet
                    </NavLink>
                </Menu.Item>
                <NavLink className={"item"} to="/appointments/list">
                    List
                    Appointments
                </NavLink>
                <NavLink className={"item"} to="/appointments/create">
                    Create
                    Appointment
                </NavLink>

                <NavLink to="/appointments/delete" className={"item"}>
                    Delete
                    Appointment
                </NavLink>

                <NavLink to="/appointments/update" className={"item"}>
                    Update
                    Appointment
                </NavLink>

                <Menu.Menu position='right'>
                    <NavLink to="/customer/create" className={"item"}>
                        Add Customer
                    </NavLink>
                    <NavLink to="/customer/list"  className={"item"}>
                        List All Customers
                    </NavLink>


                    <NavLink to="/customer/update"  className={"item"}>
                        Update Customer
                    </NavLink>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;