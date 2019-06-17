import React, { Component } from 'react';
import Welcome from "./welcome/Welcome"
import { getUserFromLocalStorage, logout } from './auth/userManager';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import EmissionsForm from './emissions/EmissionForm';
import Emissions from './emissions/Emissions';
import { dbCalls } from '../components/dbCalls/dbCalls'

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
            vehicle_1_mpg: this.state.vehicle_0_mpg,
            vehicle_1_miles: this.state.vehicle_0_miles,
            vehicle_2_mpg: this.state.vehicle_0_mpg,
            vehicle_2_miles: this.state.vehicle_0_miles,
            vehicle_3_mpg: this.state.vehicle_0_mpg,
            vehicle_3_miles: this.state.vehicle_0_miles,
            vehicle_4_mpg: this.state.vehicle_0_mpg,
            vehicle_4_miles: this.state.vehicle_0_miles,
            aluminum: this.state.aluminum,
            plastic: this.state.plastic,
            glass: this.state.glass,
            newspaper: this.state.newspaper,
            magazines: this.state.magazines,
            userId: this.state.user.id
        }
        dbCalls.post("emission_forms", formObj).then(e =>
            this.props.history.push("/emissions")
        )
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


    render() {
        return (
            <>
                <Route exact path="/" render={(props) => <Welcome toggle={this.toggle} modal={this.state.modal} {...this.props} onRegister={(user) => this.setState({ user: user })} onLogin={(user) => this.setState({ user: user })} />} />
                <Route exact path="/emissions/form" render={(props) => <EmissionsForm {...props} user={getUserFromLocalStorage()} getNumOFVehicles={this.getNumOFVehicles} handleFieldChange={this.handleFieldChange} createVehicleArray={this.createVehicleArray} numOfVehicles={this.state.numOfVehicles} toggleAluminum={this.toggleAluminum} togglePlastic={this.togglePlastic} toggleGlass={this.toggleGlass} toggleNewspaper={this.toggleNewspaper} toggleMagazines={this.toggleMagazines} handleSumbit={this.handleSumbit} />} />
                <Route exact path="/emissions" render={(props) => <Emissions {...props} state={this.state} user={getUserFromLocalStorage()} toggle={this.toggle} modal={this.state.modal} handleFieldChange={this.handleFieldChange} />} />
            </>
        )
    }
}