import React, { Component } from 'react';
import Welcome from "./welcome/Welcome"
import { getUserFromLocalStorage, logout } from './auth/userManager';

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

            <Welcome toggle={this.toggle} modal={this.state.modal} {...this.props} onRegister={(user) => this.setState({ user: user })} onLogin={(user) => this.setState({ user: user })} />
        )
    }
}