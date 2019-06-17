import React, { Component } from 'react';
import { dbCalls } from '../dbCalls/dbCalls';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import EditEmissions from './EditEmissions';



export default class Emissions extends Component {
    state = {
        totalEmissions: 0,
        totalHomeEmissions: 0,
        totalVehicleEmissions: 0,
        totalWasteEmissions: 0,
        form: {
            aluminum: false,
            electricity: 0,
            fuelOil: 0,
            glass: false,
            id: 0,
            magazines: false,
            naturalGas: 0,
            newspaper: false,
            numOfPeople: 0,
            numOfVehicles: 0,
            plastic: false,
            propane: 0,
            userId: "",
            vehicle_0_miles: 0,
            vehicle_0_mpg: 0,
            vehicle_1_miles: 0,
            vehicle_1_mpg: 0,
            vehicle_2_miles: 0,
            vehicle_2_mpg: 0,
            vehicle_3_miles: 0,
            vehicle_3_mpg: 0,
            vehicle_4_miles: 0,
            vehicle_4_mpg: 0
        }

    }
    homeEmissions = (e) => {
        const naturalGas = e[0].naturalGas * 11.2 * 12
        const electricity = e[0].electricity * 11.75 * 12
        const fuelOil = e[0].fuelOil * 5.6 * 12
        const propane = e[0].propane * 5 * 12
        const totalHomeEmissions = naturalGas + electricity + fuelOil + propane
        // console.log(totalHomeEmissions)
        return totalHomeEmissions
    }
    vehicleEmissions = (e) => {
        const vehicles = []
        const v0 = (((e[0].vehicle_0_miles * 52) / e[0].vehicle_0_mpg) * 19.87)
        const v1 = (((e[0].vehicle_1_miles * 52) / e[0].vehicle_1_mpg) * 19.87)
        const v2 = (((e[0].vehicle_2_miles * 52) / e[0].vehicle_2_mpg) * 19.87)
        const v3 = (((e[0].vehicle_3_miles * 52) / e[0].vehicle_3_mpg) * 19.87)
        const v4 = (((e[0].vehicle_4_miles * 52) / e[0].vehicle_4_mpg) * 19.87)
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
        let waste = e[0].numOfPeople * 696
        if (e[0].aluminum === true) {
            waste = waste - 89
        }
        if (e[0].plastic === true) {
            waste = waste - 39
        }
        if (e[0].glass === true) {
            waste = waste - 25
        }
        if (e[0].newspaper === true) {
            waste = waste - 113
        }
        if (e[0].magazines === true) {
            waste = waste - 27
        }
        return (waste)
    }
    componentDidMount = () => {
        dbCalls.getUserEmissions(this.props.user.id).then(e => {
            let totalEmissions = 0
            totalEmissions += this.homeEmissions(e)
            totalEmissions += this.vehicleEmissions(e)
            totalEmissions += this.wasteEmissions(e)
            this.setState({
                totalEmissions: Math.round(totalEmissions),
                totalHomeEmissions: Math.round(this.homeEmissions(e)),
                totalVehicleEmissions: Math.round(this.vehicleEmissions(e)),
                totalWasteEmissions: Math.round(this.wasteEmissions(e)),
                form: e[0]
            })

        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Annual Emissions: {this.state.totalEmissions}lbs CO<sub>2</sub></h1>
                <Card>
                    <CardHeader tag="h3">Home ({this.state.totalHomeEmissions}lbs CO<sub>2</sub>)<Button onClick={this.props.toggle}>Edit</Button></CardHeader>
                    <CardBody>
                        <CardText>Natural Gas: ${this.state.form.naturalGas} ({this.state.form.naturalGas * 11.2}lbs CO<sub>2</sub> per month)</CardText>
                        <CardText>Electricity: ${this.state.form.electricity} ({this.state.form.electricity * 11.75}lbs CO<sub>2</sub> per month)</CardText>
                        <CardText>Fuel Oil: ${this.state.form.fuelOil} ({this.state.form.fuelOil * 5.6}lbs CO<sub>2</sub> per month)</CardText>
                        <CardText>Propane ${this.state.form.propane} ({this.state.form.propane * 5}lbs CO<sub>2</sub> per month)</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader tag="h3">Vehicles ({this.state.totalVehicleEmissions}lbs CO<sub>2</sub>)</CardHeader>
                    <CardBody>
                        <CardText>Vehicle 1</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.state.form.vehicle_0_miles * 52) / this.state.form.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.state.form.vehicle_0_mpg}</li>
                            <li>Miles Per Week: {this.state.form.vehicle_0_miles}</li>
                        </ul>

                        <CardText>Vehicle 2</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.state.form.vehicle_1_miles * 52) / this.state.form.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.state.form.vehicle_1_mpg}</li>
                            <li>Miles Per Week: {this.state.form.vehicle_1_miles}</li>
                        </ul>
                        <CardText>Vehicle 3</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.state.form.vehicle_2_miles * 52) / this.state.form.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.state.form.vehicle_2_mpg}</li>
                            <li>Miles Per Week: {this.state.form.vehicle_2_miles}</li>
                        </ul>
                        <CardText>Vehicle 4</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.state.form.vehicle_3_miles * 52) / this.state.form.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.state.form.vehicle_3_mpg}</li>
                            <li>Miles Per Week: {this.state.form.vehicle_3_miles}</li>
                        </ul>
                        <CardText>Vehicle 5</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.state.form.vehicle_4_miles * 52) / this.state.form.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.state.form.vehicle_4_mpg}</li>
                            <li>Miles Per Week: {this.state.form.vehicle_4_miles}</li>
                        </ul>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader tag="h3">Waste ({this.state.totalWasteEmissions}lbs CO<sub>2</sub>)</CardHeader>
                    <CardBody>
                        <CardText>Recycle:</CardText>
                        <ul>
                            <li>Aluminum</li>
                            <li>Plastic</li>
                            <li>Glass</li>
                            <li>Newpaper</li>
                            <li>Magazines</li>
                        </ul>

                    </CardBody>
                </Card>
                < EditEmissions {...this.props} />
            </div>
        )
    }
}