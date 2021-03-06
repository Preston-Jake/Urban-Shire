import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { register } from '../auth/userManager';


export default class Register extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    }

    submit = () => {
        register(this.state)
            .then(newUser => {
                this.props.onRegister(newUser);
                this.props.history.push("/emissions/form")
            });
    }

    render() {
        console.log(this.props)
        return (
            <Modal id="container_register" isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                <ModalHeader toggle={this.props.toggle}>Create an Account</ModalHeader>
                <ModalBody>
                    <Form className="register__form" onSubmit={this.submit}>
                        <FormGroup>
                            <Input type="username" name="username" id="username" placeholder="Username" onChange={(e) => this.props.handleUsername(e)} />
                            <Input type="email" name="email" id="email" placeholder="Email" onChange={(e) => this.props.handleEmail(e)} />
                            <Input type="password" name="password" id="password" placeholder="Password" onChange={(e) => this.props.handlePassword(e)} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { this.props.toggle(); this.props.submitRegister() }}>Register</Button>{' '}
                    <Button color="secondary" onClick={() => { this.props.toggle() }}>Cancel</Button>
                </ModalFooter>
                {/* <Alert >
                    Already registered?
                </Alert> */}
            </Modal>
        )
    }
}