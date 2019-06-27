import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { login } from '../auth/userManager'
import { Alert } from 'reactstrap';

export default class LogIn extends Component {

    render() {
        console.log(this.props)
        return (
            <div id="container_login">
                <Input placeholder="Email" onChange={(e) => this.props.handleEmail(e)} />
                <Input placeholder="Password" onChange={(e) => this.props.handlePassword(e)} />
                <Button id="btn_login" size="lg" block onClick={(e) => { e.preventDefault(); this.props.submit(); }}>Log In</Button>
                {/* <Alert className="auth__message">
                    Not registered yet?
                </Alert> */}
            </div>
        )
    }
}
