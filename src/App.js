import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeComponent from './Pages/Home';
import ListComponent from './Pages/appointment/List';
import CreateComponent from './Pages/appointment/Create';
import UpdateComponent from './Pages/appointment/Update';
import DeleteComponent from './Pages/appointment/Delete';
import CreateCustomerComponent from './Pages/customer/CreateCustomer';
import UpdateCustomerComponent from './Pages/customer/UpdateCustomer';
import ListCustomerComponent from './Pages/customer/ListCustomers';
import Layout from './UI/Layout';
import Aux from './HOC/Auxilary';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {
    render() {
        return (

            <Router>
                <Aux>
                    <Layout>
                        <Switch>
                            <Route path="/"  exact component={HomeComponent}/>
                            <Route path="/appointments/list" exact component={ListComponent}/>
                            <Route path="/appointments/create"  exact component={CreateComponent}/>
                            <Route path="/appointments/update"  exact component={UpdateComponent}/>
                            <Route path="/appointments/delete" exact  component={DeleteComponent}/>
                            <Route path="/customer/create"  exact component={CreateCustomerComponent}/>
                            <Route path="/customer/update"  exact component={UpdateCustomerComponent}/>
                            <Route path="/customer/list"  exact component={ListCustomerComponent}/>
                            <Route path="/customer/update/:id"  exact component={UpdateCustomerComponent}/>
                        </Switch>
                    </Layout>
                </Aux>
            </Router>
        );
    }
}

export default App;
