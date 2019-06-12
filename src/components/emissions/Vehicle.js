import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


export default class Vehicle extends Component {

    state = {

    }

    createVehicleArray = (num) => {
        const Vehicles = []
        for (let index = 0; index < num; index++) {
            Vehicles.push(index)
        }
        console.log(Vehicles)
        return Vehicles
    }


    render() {
        return (
            <>
                {this.createVehicleArray(this.props.numOfVehicles).map((v, index) => {
                    return (
                        <div key={index}>
                            <h3>Vehicle {index + 1}</h3>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">MPG</InputGroupAddon>
                                <Input id="mpg" placeholder="Vehicle MPG" onChange={(e) => { console.log(e.target.value) }} />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Miles</InputGroupAddon>
                                <Input id="miles" placeholder="Avg. Miles Driven per Week" onChange={(e) => { }} />
                            </InputGroup>
                        </div>
                    )
                })}
            </>
        )
    }
}
