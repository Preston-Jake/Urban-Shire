import React, { Component } from 'react';
import Welcome from "./welcome/Welcome"
import { getUserFromLocalStorage, logout } from './auth/userManager';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import EmissionsForm from './emissions/EmissionForm';
import Emissions from './emissions/Emissions';
import { dbCalls } from '../components/dbCalls/dbCalls'
import { login } from './auth/userManager'
import EmissionsProfile from './emissions/EmissionsProfile';

class AppView extends Component {
    state = {
        email: "",
        password: "",
        numOfPeople: 1,
        naturalGas: 0,
        electricity: 0,
        fuelOil: 0,
        propane: 0,
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
        totalWasteEmissions: 0,
        actionPlanModal: false,
        user_action_plans: {
            user_plans: []
        },
        selected_plans: [],
        action_plans: []
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleActionPlanModal = this.toggleActionPlanModal.bind(this)
    }
    handleSelect = (selected, i) => {
        const index = this.state.selected_plans.indexOf(selected.id);
        if (index < 0) {
            this.state.selected_plans.push(selected.id);
            const newState = this.state.action_plans[i]
            newState.isSelected = true
            this.setState(newState)
        } else {
            this.state.selected_plans.splice(index, 1);
            const newState = this.state.action_plans[i]
            newState.isSelected = false
            this.setState(newState)
        }
        this.setState({ selected_plans: [...this.state.selected_plans] });
    }

    handlePlansSubmit = (e) => {
        e.preventDefault();
        const userPlanObj = {
            user_plans: this.state.action_plans
        }
        dbCalls.patchUserPlans(this.state.user_action_plans.id, userPlanObj).then(
            (e) => {
                this.setState({ user_action_plans: e, selected_plans: [] })
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formObj = {
            numOfPeople: this.state.numOfPeople,
            naturalGas: this.state.naturalGas,
            electricity: this.state.electricity,
            fuelOil: this.state.fuelOil,
            propane: this.state.propane,
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
            .then((form) => {
                this.props.history.push("/emissions")
                let newState = form
                newState.totalHomeEmissions = this.homeEmissions(form)
                newState.totalVehicleEmissions = this.vehicleEmissions(form)
                newState.totalWasteEmissions = this.wasteEmissions(form)
                newState.totalEmissions = this.homeEmissions(form) + this.vehicleEmissions(form) + this.wasteEmissions(form)
                this.setState(newState)
            })
    }
    handleComplete = (event, plan) => {
        const newPlan = plan
        newPlan.isComplete = true
        newPlan.isSelected = false
        this.setState(newPlan, () => { dbCalls.patchUserPlans(this.state.user_action_plans.id, this.state.user_action_plans) })

    }

    handleCancel = (event, plan) => {
        const newPlan = plan;
        newPlan.isSelected = false;
        this.setState(newPlan, () => { dbCalls.patchUserPlans(this.state.user_action_plans.id, this.state.user_action_plans) })
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
            newState.totalEmissions = this.homeEmissions(e) + this.vehicleEmissions(e) + this.wasteEmissions(e)
            this.setState(newState)
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    toggleActionPlanModal = () => {
        this.setState(prevState => ({
            actionPlanModal: !prevState.actionPlanModal
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
            waste = waste - (89 * e.numOfPeople)
        }
        if (e.plastic === true) {
            waste = waste - (39 * e.numOfPeople)
        }
        if (e.glass === true) {
            waste = waste - (25 * e.numOfPeople)
        }
        if (e.newspaper === true) {
            waste = waste - (119)
        }
        if (e.magazines === true) {
            waste = waste - (27)
        }
        return (waste)
    }
    handleEmail = (e) => { this.setState({ email: e.target.value }) }

    handlePassword = (e) => { this.setState({ password: e.target.value }) }

    onRegister = (user) => { this.setState({ user: user }) }

    submit = () => {
        login(this.state.email, this.state.password)
            .then(user => {
                this.setState({ user: user });
            }).then(
                () => {
                    if (this.state.user !== undefined) {
                        dbCalls.getUserEmissions(this.state.user.id).then(
                            (r) => {
                                const newState = r[0];
                                newState.totalHomeEmissions = this.homeEmissions(r[0])
                                newState.totalVehicleEmissions = this.vehicleEmissions(r[0])
                                newState.totalWasteEmissions = this.wasteEmissions(r[0])
                                newState.totalEmissions = this.homeEmissions(r[0]) + this.vehicleEmissions(r[0]) + this.wasteEmissions(r[0])
                                this.setState(newState)
                            }
                        )
                        this.props.history.push("/emissions")


                    }
                }
            )
    }

    cancel = () => {
        dbCalls.getUserEmissions(this.state.user.id).then(
            (r) => {
                const newState = r[0];
                newState.totalHomeEmissions = this.homeEmissions(r[0])
                newState.totalVehicleEmissions = this.vehicleEmissions(r[0])
                newState.totalWasteEmissions = this.wasteEmissions(r[0])
                newState.totalEmissions = this.homeEmissions(r[0]) + this.vehicleEmissions(r[0]) + this.wasteEmissions(r[0])
                this.setState(newState)
            }
        )
    }

    componentDidMount = () => {
        if (this.state.user === null) {
            return this.props.history.push("/")
        } else {
            dbCalls.getUserEmissions(this.state.user.id).then(e => {
                if (e.length === 0) {
                    return this.props.history.push("/emissions/form")
                } else {
                    let newState = {}
                    newState = e[0]
                    newState.totalHomeEmissions = this.homeEmissions(e[0])
                    newState.totalVehicleEmissions = this.vehicleEmissions(e[0])
                    newState.totalWasteEmissions = this.wasteEmissions(e[0])
                    newState.totalEmissions = this.homeEmissions(e[0]) + this.vehicleEmissions(e[0]) + this.wasteEmissions(e[0])
                    this.setState(newState)
                }
            }).then(
                dbCalls.getActionPlans().then(
                    r => this.setState({ action_plans: r })
                )
            ).then(
                dbCalls.getUserPlans(this.state.user.id).then((w) => {
                    if (w[0].user_plans.length === 0) {
                        this.setState({ user_action_plans: w[0] })
                    } else {
                        this.setState({
                            user_action_plans: w[0],
                            action_plans: w[0].user_plans
                        })
                    }
                })
            )
        }
    }

    render() {
        // console.log(this.state)

        return (
            <>
                <Route exact path="/" render={(props) =>
                    <Welcome {...props} {...this.state} toggle={this.toggle} modal={this.state.modal} {...this.props} onRegister={this.onRegister} onLogin={this.onLogin} handleEmail={this.handleEmail} handlePassword={this.handlePassword} submit={this.submit} />}
                />
                <Route exact path="/emissions/form" render={(props) =>

                    <EmissionsForm {...props} user={getUserFromLocalStorage()} handleFieldChange={this.handleFieldChange} createVehicleArray={this.createVehicleArray} numOfVehicles={this.state.numOfVehicles} toggleAluminum={this.toggleAluminum} togglePlastic={this.togglePlastic} toggleGlass={this.toggleGlass} toggleNewspaper={this.toggleNewspaper} toggleMagazines={this.toggleMagazines} handleSubmit={this.handleSubmit} />
                }
                />

                <Route exact path="/carbonprofile" render={(props) =>
                    <Emissions {...props} {...this.state} user={getUserFromLocalStorage()} toggle={this.toggle} modal={this.state.modal} handleFieldChange={this.handleFieldChange} handleUpdate={this.handleUpdate} toggleAluminum={this.toggleAluminum} togglePlastic={this.togglePlastic} toggleGlass={this.toggleGlass} toggleNewspaper={this.toggleNewspaper} toggleMagazines={this.toggleMagazines} toggleActionPlanModal={this.toggleActionPlanModal} handleSelect={this.handleSelect} handleCancel={this.handleCancel} handlePlansSubmit={this.handlePlansSubmit} handleComplete={this.handleComplete} cancel={this.cancel} />}
                />
                <Route exact path="/emissions" render={(props) =>
                    <EmissionsProfile {...props} {...this.state} user={getUserFromLocalStorage()} toggle={this.toggle} modal={this.state.modal} handleFieldChange={this.handleFieldChange} handleUpdate={this.handleUpdate} toggleAluminum={this.toggleAluminum} togglePlastic={this.togglePlastic} toggleGlass={this.toggleGlass} toggleNewspaper={this.toggleNewspaper} toggleMagazines={this.toggleMagazines} toggleActionPlanModal={this.toggleActionPlanModal} handleSelect={this.handleSelect} handleCancel={this.handleCancel} handlePlansSubmit={this.handlePlansSubmit} handleComplete={this.handleComplete} cancel={this.cancel} />}
                />
            </>
        )
    }
}
export default withRouter(AppView)