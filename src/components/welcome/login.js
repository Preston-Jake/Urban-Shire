import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { login } from '../auth/userManager'

export default class LogIn extends Component {
    state = {
        email: '',
        password: ''
    }

    submit = () => {
        login(this.state.email, this.state.password)
            .then(user => {
                this.props.onLogin(user);
            });
    }
    render() {
        return (
            <div>
                <Input placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                <Input placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                <Button color="primary" size="lg" block onClick={() => { this.submit() }}>Log In</Button>
            </div>
        )
    }
}
