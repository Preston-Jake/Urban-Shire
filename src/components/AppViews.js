import React, { Component } from 'react';
import Welcome from "./welcome/Welcome"
import { getUserFromLocalStorage, logout } from './auth/userManager';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import EmissionsForm from './emissions/EmissionForm';
import Emissions from './emissions/Emissions';

export default class AppView extends Component {
    state = {

    }
    constructor(props) {
        super(props);
        this.state = {
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
        };

        this.toggle = this.toggle.bind(this);
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


    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    toggleSwitch = (evt) => {
        console.log(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Route exact path="/" render={(props) => <Welcome toggle={this.toggle} modal={this.state.modal} {...this.props} onRegister={(user) => this.setState({ user: user })} onLogin={(user) => this.setState({ user: user })} />} />
                <Route exact path="/emissions/form" render={(props) => <EmissionsForm {...props} user={getUserFromLocalStorage()} getNumOFVehicles={this.getNumOFVehicles} handleFieldChange={this.handleFieldChange} createVehicleArray={this.createVehicleArray} numOfVehicles={this.state.numOfVehicles} toggleSwitch={this.toggleSwitch} />} />
                <Route exact path="/emissions" render={(props) => <Emissions user={getUserFromLocalStorage()} />} />
            </>
        )
    }
}