import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';


class Header extends Component {
    state = {};

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <Menu stackable>
                <Menu.Item header>
                    <NavLink to="/">
                        DoctorSet
                    </NavLink>
                </Menu.Item>

                <NavLink active={activeItem === 'Create'} className={"item"} to="/appointments/create">
                    Create
                    Appointment
                </NavLink>

                <NavLink to="/appointments/delete" active={activeItem === 'Delete'} className={"item"}>
                    Delete
                    Appointment
                </NavLink>

                <NavLink to="/appointments/update" active={activeItem === 'Update'} className={"item"}>
                    Update
                    Appointment
                </NavLink>

                <Menu.Menu position='right'>
                    <NavLink to="/customer/create" active={activeItem === 'create'} className={"item"}>
                        Add Customer
                    </NavLink>
                    <NavLink to="/customer/list" active={activeItem === 'list'} className={"item"}>
                        List All Customers
                    </NavLink>


                    <NavLink to="/customer/update" active={activeItem === 'update'} className={"item"}>
                        Update Customer
                    </NavLink>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;