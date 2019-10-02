import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { CustomInput } from 'reactstrap';
import FormikEmissions from './FormikEmissions';


export default class EmissionsForm extends Component {

    state = {}


    render() {
        // console.log(this.props)
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
                <Label for="exampleSelect">Household vehicles</Label>
                <div>
                    <h3>Vehicle 1</h3>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">MPG</InputGroupAddon>
                        <Input type="text" name="MPG" id="vehicle_0_mpg" placeholder="Vehicle MPG" defaultValue={this.props.vehicle_0_mpg} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Miles Per Week</InputGroupAddon>
                        <Input type="text" name="milesPerWeek" id="vehicle_0_miles" placeholder="Miles Driven Per Week" defaultValue={this.props.vehicle_0_miles} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                </div>
                <div>
                    <h3>Vehicle 2</h3>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">MPG</InputGroupAddon>
                        <Input type="text" name="MPG" id="vehicle_1_mpg" placeholder="Vehicle MPG" defaultValue={this.props.vehicle_1_mpg} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Miles Per Week</InputGroupAddon>
                        <Input type="text" name="milesPerWeek" id="vehicle_1_miles" placeholder="Miles Driven Per Week" defaultValue={this.props.vehicle_1_miles} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                </div>
                <div>
                    <h3>Vehicle 3</h3>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">MPG</InputGroupAddon>
                        <Input type="text" name="MPG" id="vehicle_2_mpg" placeholder="Vehicle MPG" defaultValue={this.props.vehicle_2_mpg} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Miles Per Week</InputGroupAddon>
                        <Input type="text" name="milesPerWeek" id="vehicle_2_miles" placeholder="Miles Driven Per Week" defaultValue={this.props.vehicle_2_miles} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                </div>
                <div>
                    <h3>Vehicle 4</h3>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">MPG</InputGroupAddon>
                        <Input type="text" name="MPG" id="vehicle_3_mpg" placeholder="Vehicle MPG" defaultValue={this.props.vehicle_3_mpg} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Miles Per Week</InputGroupAddon>
                        <Input type="text" name="milesPerWeek" id="vehicle_3_miles" placeholder="Miles Driven Per Week" defaultValue={this.props.vehicle_3_miles} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                </div>
                <div>
                    <h3>Vehicle 5</h3>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">MPG</InputGroupAddon>
                        <Input type="text" name="MPG" id="vehicle_4_mpg" placeholder="Vehicle MPG" defaultValue={this.props.vehicle_4_mpg} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Miles Per Week</InputGroupAddon>
                        <Input type="text" name="milesPerWeek" id="vehicle_4_miles" placeholder="Miles Driven Per Week" defaultValue={this.props.vehicle_4_miles} onChange={(e) => this.props.handleFieldChange(e)} />
                    </InputGroup>
                </div>
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
                {FormikEmissions()}
            </Form>
        )
    }
}


