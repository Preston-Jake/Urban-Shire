import React, { Component } from 'react';

import VehicleInputs from './VehicleInputs';




export default class Vehicle extends Component {
    state = {

    }
    createVehicleArray = (num) => {
        const Vehicles = []
        for (let index = 0; index < num; index++) {
            Vehicles.push(index)
        }
        return Vehicles
    }

    render() {
        // console.log(this.props)
        return (
            <>
                {this.createVehicleArray(this.props.numOfVehicles).map((v, index) => {
                    return < VehicleInputs handleFieldChange={this.props.handleFieldChange} returnValue={this.returnValue} key={index} index={index} />
                })}

            </>
        )
    }
}