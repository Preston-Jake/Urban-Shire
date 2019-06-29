import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import VehiclesContainer from "../../containers/VehiclesContainer"

class VehiclesForm extends Component {
    render() {
        return (
            <VehiclesContainer>
                {({ createNewVehicle, inputUpdate, removeVehicle, vehicles }) => {
                    const allVehicles = vehicles.map((vehicle, index) => (
                        <div key={index}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">MPG</InputGroupAddon>
                                <Input
                                    type="text"
                                    name="mpg"
                                    placeholder="Vehicle MPG"
                                    defaultValue={vehicle.mpg}
                                    onChange={(e) => {
                                        const value = e.target.value
                                        inputUpdate("mpg", value, index)
                                    }}
                                />
                                <InputGroupAddon addonType="prepend">Miles Per Week</InputGroupAddon>
                                <Input
                                    type="text"
                                    name="mpw"
                                    placeholder="Vehicle Miles Per Week"
                                    defaultValue={vehicle.mpw}
                                    onChange={(e) => {
                                        const value = e.target.value
                                        inputUpdate("mpw", value, index)
                                    }}
                                />
                            </InputGroup>
                            <Button onClick={() => removeVehicle(index)}> Remove </Button>
                        </div>
                    ))
                    return (
                        <div>
                            {allVehicles}
                            <button onClick={createNewVehicle} > Create New Vehicle </button>
                        </div>
                    )
                }}
            </VehiclesContainer>
        )
    }
}

export default VehiclesForm