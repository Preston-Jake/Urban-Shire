import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Vehicle from './Vehicle';
import { CustomInput } from 'reactstrap';

export default class EditEmissions extends Component {
    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                <ModalHeader toggle={this.props.toggle}>Create an Account</ModalHeader>
                <ModalBody>
                    <Form>
                        <h1>Emissions</h1>
                        <h2>Home</h2>
                        <FormGroup>
                            <Label for="exampleSelect">How many people live in your household?</Label>
                            <Input type="select" name="select" id="numOfPeople" onChange={(e) => this.props.handleFieldChange(e)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <h2>Resources</h2>
                        <p>(Resource $dollar amount per month)</p>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                            <Input placeholder="Natural Gas" id="naturalGas" onChange={(e) => this.props.handleFieldChange(e)} />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                            <Input placeholder="Electricity" id="electricity" onChange={(e) => this.props.handleFieldChange(e)} />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                            <Input placeholder="Fuel Oil" id="fuelOil" onChange={(e) => this.props.handleFieldChange(e)} />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                            <Input placeholder="Propane" id="propane" onChange={(e) => this.props.handleFieldChange(e)} />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                        <h2>Vehicles</h2>

                        <FormGroup>
                            <Label for="exampleCheckbox">What do you recycle?</Label>
                            <div>
                                <CustomInput type="switch" name="customSwitch" label="Aluminum" id="aluminum" onChange={(e) => {
                                    this.props.toggleAluminum()
                                }} />
                                <CustomInput type="switch" id="plastic" name="customSwitch" label="Plastic" onChange={(e) => {
                                    this.props.togglePlastic(e)
                                }} />
                                <CustomInput type="switch" id="glass" name="customSwitch" label="Glass" onChange={(e) => {
                                    this.props.toggleGlass(e)
                                }} />
                                <CustomInput type="switch" id="newspaper" name="customSwitch" label="Newspaper" onChange={(e) => {
                                    this.props.toggleNewspaper(e)
                                }} />
                                <CustomInput type="switch" id="magazines" name="customSwitch" label="Magazines" onChange={(e) => {
                                    this.props.toggleMagazines(e)
                                }} />
                            </div>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { this.props.toggle(); this.submit() }}>Submit</Button>{' '}
                    <Button color="secondary" onClick={() => { this.props.toggle() }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
