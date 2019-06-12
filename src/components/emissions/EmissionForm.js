import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Vehicle from './Vehicle';
import { CustomInput } from 'reactstrap';



export default class EmissionsForm extends Component {

    state = {
        numOfPeople: 1,
        naturalGas: 0,
        electricity: 0,
        fuelOil: 0,
        propane: 0,
        numOfVehicles: 0,
        vehicles: []
    }

    getNumOFVehicles = (num) => {
        this.setState({ numOfVehicles: parseInt(num) })
    }




    render() {

        console.log(this.state)
        return (
            <Form>
                <h1>Emissions</h1>
                <h2>Home</h2>
                <FormGroup>
                    <Label for="exampleSelect">How many people live in your household?</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={(e) => { this.setState({ numOfPeople: parseInt(e.target.value) }) }}>
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
                    <Input placeholder="Natural Gas" onChange={(e) => { this.setState({ naturalGas: parseInt(e.target.value) }) }} />
                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input placeholder="Electricity" onChange={(e) => { this.setState({ electricity: parseInt(e.target.value) }) }} />
                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input placeholder="Fuel Oil" onChange={(e) => { this.setState({ fuelOil: parseInt(e.target.value) }) }} />
                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input placeholder="Propane" onChange={(e) => { this.setState({ propane: parseInt(e.target.value) }) }} />
                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <h2>Vehicle</h2>
                <Label for="exampleSelect">How many Vehicles our in your household?</Label>
                <Input type="select" name="select" id="numberOfVechicles" onChange={(e) => this.getNumOFVehicles(e.target.value)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                <Vehicle numOfVehicles={this.state.numOfVehicles} />
                <h2>Recycle</h2>
                <FormGroup>
                    <Label for="exampleCheckbox">What do you recycle?</Label>
                    <div>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Aluminum" />
                        <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Plastic" />
                        <CustomInput type="switch" id="exampleCustomSwitch3" name="customSwitch" label="Glass" />
                        <CustomInput type="switch" id="exampleCustomSwitch4" name="customSwitch" label="Newspaper" />
                        <CustomInput type="switch" id="exampleCustomSwitch5" name="customSwitch" label="Magazines" />
                    </div>
                </FormGroup>
                <Button color="primary" size="lg" block >Submit</Button>
            </Form>
        )
    }
}


