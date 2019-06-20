import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Vehicle from './Vehicle';
import { CustomInput } from 'reactstrap';



export default class EmissionsForm extends Component {

    state = {}


    render() {
        return (
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
                <h2>Vehicle</h2>
                <Label for="exampleSelect">How many Vehicles our in your household?</Label>
                <Input type="select" name="select" id="numberOfVechicles" onChange={(e) => this.props.getNumOFVehicles(e.target.value)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                <Vehicle {...this.props} handleFieldChange={this.props.handleFieldChange} numOfVehicles={this.props.numOfVehicles} createVehicleArray={this.props.createVehicleArray} />
                <h2>Recycle</h2>
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
                <Button color="primary" type="button" size="lg" block onClick={(e) => this.props.handleSubmit(e)}>Submit</Button>
            </Form>
        )
    }
}


