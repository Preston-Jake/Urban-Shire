import React, { Component } from 'react';
import Welcome from "./welcome/Welcome"
import { getUserFromLocalStorage, logout } from './auth/userManager';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import EmissionsForm from './emissions/EmissionForm';
import Emissions from './emissions/Emissions';
import { dbCalls } from '../components/dbCalls/dbCalls'

export default class AppView extends Component {
    state = {
        numOfPeople: 1,
        naturalGas: 0,
        electricity: 0,
        fuelOil: 0,
        propane: 0,
        numOfVehicles: 0,
        vehicle_0_mpg: 0,
        vehicle_0_miles: 0,
        vehicle_1_mpg: 0,
        vehicle_1_miles: 0,
        vehicle_2_mpg: 0,
        vehicle_2_miles: 0,
        vehicle_3_mpg: 0,
        vehicle_3_miles: 0,
        vehicle_4_mpg: 0,
        vehicle_4_miles: 0,
        aluminum: false,
        plastic: false,
        glass: false,
        newspaper: false,
        magazines: false,
        user: getUserFromLocalStorage(),
        modal: false,
        totalHomeEmissions: 0,
        totalVehicleEmissions: 0,
        totalWasteEmissions: 0
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    handleSumbit = (e) => {
        e.preventDefault()
        const formObj = {
            numOfPeople: this.state.numOfPeople,
            naturalGas: this.state.naturalGas,
            electricity: this.state.electricity,
            fuelOil: this.state.fuelOil,
            propane: this.state.propane,
            numOfVehicles: this.state.numOfVehicles,
            vehicle_0_mpg: this.state.vehicle_0_mpg,
            vehicle_0_miles: this.state.vehicle_0_miles,
            vehicle_1_mpg: this.state.vehicle_1_mpg,
            vehicle_1_miles: this.state.vehicle_1_miles,
            vehicle_2_mpg: this.state.vehicle_2_mpg,
            vehicle_2_miles: this.state.vehicle_2_miles,
            vehicle_3_mpg: this.state.vehicle_3_mpg,
            vehicle_3_miles: this.state.vehicle_3_miles,
            vehicle_4_mpg: this.state.vehicle_4_mpg,
            vehicle_4_miles: this.state.vehicle_4_miles,
            aluminum: this.state.aluminum,
            plastic: this.state.plastic,
            glass: this.state.glass,
            newspaper: this.state.newspaper,
            magazines: this.state.magazines,
            userId: this.state.user.id
        }
        dbCalls.post("emission_forms", formObj)
    }

    getNumOFVehicles = (num) => {
        this.setState({ numOfVehicles: parseInt(num) })
    }

    handleFieldChange = (evt) => {
        // console.log(evt.target.id)
        const stateToChange = {};
        stateToChange[evt.target.id] = parseInt(evt.target.value);
        this.setState(stateToChange);
    };

    handleUpdate = (evt) => {
        const formObj = {
            numOfPeople: this.state.numOfPeople,
            naturalGas: this.state.naturalGas,
            electricity: this.state.electricity,
            fuelOil: this.state.fuelOil,
            propane: this.state.propane,
            numOfVehicles: this.state.numOfVehicles,
            vehicle_0_mpg: this.state.vehicle_0_mpg,
            vehicle_0_miles: this.state.vehicle_0_miles,
            vehicle_1_mpg: this.state.vehicle_1_mpg,
            vehicle_1_miles: this.state.vehicle_1_miles,
            vehicle_2_mpg: this.state.vehicle_2_mpg,
            vehicle_2_miles: this.state.vehicle_2_miles,
            vehicle_3_mpg: this.state.vehicle_3_mpg,
            vehicle_3_miles: this.state.vehicle_3_miles,
            vehicle_4_mpg: this.state.vehicle_4_mpg,
            vehicle_4_miles: this.state.vehicle_4_miles,
            aluminum: this.state.aluminum,
            plastic: this.state.plastic,
            glass: this.state.glass,
            newspaper: this.state.newspaper,
            magazines: this.state.magazines,
            userId: this.state.user.id
        }
        dbCalls.patch(this.state.id, formObj).then(e => {
            let newState = e
            newState.totalHomeEmissions = this.homeEmissions(e)
            newState.totalVehicleEmissions = this.vehicleEmissions(e)
            newState.totalWasteEmissions = this.wasteEmissions(e)
            this.setState(newState)
        })
    }


    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    toggleAluminum = () => {
        this.setState(prevState => ({
            aluminum: !prevState.aluminum
        }));
    }
    togglePlastic = () => {
        this.setState(prevState => ({
            plastic: !prevState.plastic
        }));
    }
    toggleGlass = () => {
        this.setState(prevState => ({
            glass: !prevState.glass
        }));
    }
    toggleNewspaper = () => {
        this.setState(prevState => ({
            newspaper: !prevState.newspaper
        }));
    }
    toggleMagazines = () => {
        this.setState(prevState => ({
            magazines: !prevState.magazines
        }));
    }

    homeEmissions = (e) => {
        const naturalGas = e.naturalGas * 11.2 * 12
        const electricity = e.electricity * 11.75 * 12
        const fuelOil = e.fuelOil * 5.6 * 12
        const propane = e.propane * 5 * 12
        const totalHomeEmissions = naturalGas + electricity + fuelOil + propane
        // console.log(totalHomeEmissions)
        return totalHomeEmissions
    }

    vehicleEmissions = (e) => {
        const vehicles = []
        const v0 = (((e.vehicle_0_miles * 52) / e.vehicle_0_mpg) * 19.87)
        const v1 = (((e.vehicle_1_miles * 52) / e.vehicle_1_mpg) * 19.87)
        const v2 = (((e.vehicle_2_miles * 52) / e.vehicle_2_mpg) * 19.87)
        const v3 = (((e.vehicle_3_miles * 52) / e.vehicle_3_mpg) * 19.87)
        const v4 = (((e.vehicle_4_miles * 52) / e.vehicle_4_mpg) * 19.87)
        vehicles.push(v0, v1, v2, v3, v4)
        const totalVehicleEmissions = vehicles.map(num => {
            if (isNaN(num)) {
                return num = 0
            } else {
                return num
            }

        }).reduce((a, b) => a + b)
        // console.log(totalVehicleEmissions)
        return totalVehicleEmissions
    }

    wasteEmissions = (e) => {
        let waste = e.numOfPeople * 696
        if (e.aluminum === true) {
            waste = waste - 89
        }
        if (e.plastic === true) {
            waste = waste - 39
        }
        if (e.glass === true) {
            waste = waste - 25
        }
        if (e.newspaper === true) {
            waste = waste - 113
        }
        if (e.magazines === true) {
            waste = waste - 27
        }
        return (waste)
    }

    componentDidMount = () => {
        dbCalls.getUserEmissions(this.state.user.id).then(e => {
            let newState = e[0]
            newState.totalHomeEmissions = this.homeEmissions(e[0])
            newState.totalVehicleEmissions = this.vehicleEmissions(e[0])
            newState.totalWasteEmissions = this.wasteEmissions(e[0])
            this.setState(newState)
        })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Route exact path="/" render={(props) =>
                    <Welcome toggle={this.toggle} modal={this.state.modal} {...this.props} onRegister={(user) => this.setState({ user: user })} onLogin={(user) => this.setState({ user: user })} />} />
                <Route exact path="/emissions/form" render={(props) =>

                    <EmissionsForm {...props} user={getUserFromLocalStorage()} getNumOFVehicles={this.getNumOFVehicles} handleFieldChange={this.handleFieldChange} createVehicleArray={this.createVehicleArray} numOfVehicles={this.state.numOfVehicles} toggleAluminum={this.toggleAluminum} togglePlastic={this.togglePlastic} toggleGlass={this.toggleGlass} toggleNewspaper={this.toggleNewspaper} toggleMagazines={this.toggleMagazines} handleSumbit={this.handleSumbit} />}
                />

                <Route exact path="/emissions" render={(props) =>
                    <Emissions {...props} {...this.state} user={getUserFromLocalStorage()} toggle={this.toggle} modal={this.state.modal} handleFieldChange={this.handleFieldChange} handleUpdate={this.handleUpdate} toggleAluminum={this.toggleAluminum} togglePlastic={this.togglePlastic} toggleGlass={this.toggleGlass} toggleNewspaper={this.toggleNewspaper} toggleMagazines={this.toggleMagazines} />}
                />

            </>
        )
    }
}