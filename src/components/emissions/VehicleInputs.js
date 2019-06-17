import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, } from 'reactstrap';

export default class VehicleInputs extends Component {

    render() {
        return (
            <div key={this.props.index}>
                <h3>Vehicle {this.props.index + 1}</h3>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">MPG</InputGroupAddon>
                    <Input id={`vehicle_${this.props.index}_mpg`} className="mpg" placeholder="Vehicle MPG" onChange={(e) => {
                        this.props.handleFieldChange(e)
                    }} />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Miles</InputGroupAddon>
                    <Input id={`vehicle_${this.props.index}_miles`} className="miles" placeholder="Avg. Miles Driven per Week" onChange={(e) => { this.props.handleFieldChange(e) }} />
                </InputGroup>
            </div>
        );

    };
};