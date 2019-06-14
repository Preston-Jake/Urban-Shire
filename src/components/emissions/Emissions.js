import React, { Component } from 'react';
import { dbCalls } from '../dbCalls/dbCalls';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export default class Emissions extends Component {
    state = {
        totalEmissions: 0
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
        const v0 = (((e[0].vehicle_0_miles * 54) / e[0].vehicle_0_mpg) * 19.87)
        const v1 = (((e[0].vehicle_1_miles * 54) / e[0].vehicle_1_mpg) * 19.87)
        const v2 = (((e[0].vehicle_2_miles * 54) / e[0].vehicle_2_mpg) * 19.87)
        const v3 = (((e[0].vehicle_3_miles * 54) / e[0].vehicle_3_mpg) * 19.87)
        const v4 = (((e[0].vehicle_4_miles * 54) / e[0].vehicle_4_mpg) * 19.87)
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
            this.setState({ totalEmissions: Math.round(totalEmissions) })
        })
    }

    render() {
        return (
            <div>
                <h1>Annual CO<sub>2</sub> Emissions: {this.state.totalEmissions} lbs </h1>
                <Card>
                    <CardHeader tag="h3">Emissions Form</CardHeader>
                    <CardBody>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}