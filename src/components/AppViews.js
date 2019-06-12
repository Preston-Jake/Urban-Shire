import React, { Component } from 'react';
import Welcome from "./welcome/Welcome"
import { getUserFromLocalStorage, logout } from './auth/userManager';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import EmissionsForm from './emissions/EmissionForm';

export default class AppView extends Component {
    state = {
        modal: false,
        user: getUserFromLocalStorage()
    }

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <Router>
                <Route exact path="/welcome" render={(props) => <Welcome toggle={this.toggle} modal={this.state.modal} {...this.props} onRegister={(user) => this.setState({ user: user })} onLogin={(user) => this.setState({ user: user })} />} />
                <Route exact path="/emissions/form" render={(props) => <EmissionsForm />} />
            </Router>
        )
    }
}