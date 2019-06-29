import React, { Component } from 'react'

class VehiclesContainer extends Component {

    state = {
        vehicles: []
    }

    handleCreateNewVehicle = (e) => {
        e.preventDefault()
        this.setState({
            vehicles: this.state.vehicles.concat(this.vehicleObject())
        })
    }

    handleInputUpdate = (key, value, vehicleIndex) => {
        const vehicles = this.state.vehicles.map((vehicle, index) => {
            return index === vehicleIndex ? { ...vehicle, [key]: value } : vehicle
        })
        this.setState({
            vehicles
        })
    }

    handleRemoveVehicle = (index) => {
        const vehicles = this.state.vehicles.splice(index)
        this.setState({
            vehicles,
        })
    }

    vehicleObject = () => ({ mpg: "", mpw: "" })

    render() {
        return (
            <div>
                {this.props.children({
                    createNewVehicle: this.handleCreateNewVehicle,
                    inputUpdate: this.handleInputUpdate,
                    removeVehicle: this.handleRemoveVehicle,
                    vehicles: this.state.vehicles
                })}
            </div>
        )
    }
}

export default VehiclesContainer