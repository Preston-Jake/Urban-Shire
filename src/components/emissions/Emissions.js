import React, { Component } from 'react';
import { dbCalls } from '../dbCalls/dbCalls';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import EditEmissions from './EditEmissions';



export default class Emissions extends Component {
    render() {

        return (
            <div>
                <h1>Annual Emissions: {this.props.totalEmissions}lbs CO<sub>2</sub></h1>
                <Card>
                    <CardHeader tag="h3">Home ({this.props.totalHomeEmissions}lbs CO<sub>2</sub>)<Button onClick={this.props.toggle}>Edit</Button></CardHeader>
                    <CardBody>
                        <CardText>Natural Gas: ${this.props.naturalGas} ({this.props.naturalGas * 11.2}lbs CO<sub>2</sub> per month)</CardText>
                        <CardText>Electricity: ${this.props.electricity} ({this.props.electricity * 11.75}lbs CO<sub>2</sub> per month)</CardText>
                        <CardText>Fuel Oil: ${this.props.fuelOil} ({this.props.fuelOil * 5.6}lbs CO<sub>2</sub> per month)</CardText>
                        <CardText>Propane ${this.props.propane} ({this.props.propane * 5}lbs CO<sub>2</sub> per month)</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader tag="h3">Vehicles ({Math.round(this.props.totalVehicleEmissions)}lbs CO<sub>2</sub>)</CardHeader>
                    <CardBody>
                        <CardText>Vehicle 1</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.props.vehicle_0_miles * 52) / this.props.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.props.vehicle_0_mpg}</li>
                            <li>Miles Per Week: {this.props.vehicle_0_miles}</li>
                        </ul>

                        <CardText>Vehicle 2</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.props.vehicle_1_miles * 52) / this.props.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.props.vehicle_1_mpg}</li>
                            <li>Miles Per Week: {this.props.vehicle_1_miles}</li>
                        </ul>
                        <CardText>Vehicle 3</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.props.vehicle_2_miles * 52) / this.props.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.props.vehicle_2_mpg}</li>
                            <li>Miles Per Week: {this.props.vehicle_2_miles}</li>
                        </ul>
                        <CardText>Vehicle 4</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.props.vehicle_3_miles * 52) / this.props.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.props.vehicle_3_mpg}</li>
                            <li>Miles Per Week: {this.props.vehicle_3_miles}</li>
                        </ul>
                        <CardText>Vehicle 5</CardText>
                        <ul>
                            <li>Total: {Math.round(((this.props.vehicle_4_miles * 52) / this.props.vehicle_0_mpg) * 19.87)}lbs CO<sub>2</sub></li>
                            <li>MPG:{this.props.vehicle_4_mpg}</li>
                            <li>Miles Per Week: {this.props.vehicle_4_miles}</li>
                        </ul>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader tag="h3">Waste ({this.props.totalWasteEmissions}lbs CO<sub>2</sub>)</CardHeader>
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
                < EditEmissions {...this.props} handleFieldChange={this.props.handleFieldChange} handleUpdate={this.props.handleUpdate} toggleAluminum={this.toggleAluminum} togglePlastic={this.props.togglePlastic} toggleGlass={this.props.toggleGlass} toggleNewspaper={this.props.toggleNewspaper} toggleMagazines={this.props.toggleMagazines} />
            </div>
        )
    }
}