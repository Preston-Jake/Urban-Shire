import React, { Component } from 'react';
import {
    Button,
} from 'reactstrap';
import EditEmissions from './EditEmissions';
import Vehicle1 from './Vehicle1';
import Vehicle2 from './Vehicle2';
import Vehicle3 from './Vehicle3';
import Vehicle4 from './Vehicle4';
import Vehicle5 from './Vehicle5';
import Waste from './Waste';
import '../../main.css'




export default class Emissions extends Component {
    render() {
        return (
            <article id="wrapper_profile">
                <section id="container_home">
                    <div id="header_home">
                        <h2 id="title_home">Home</h2>
                        <h3 id="total_home_emissions">{this.props.totalHomeEmissions}lbs CO<sub>2</sub></h3>
                    </div>
                    <div id="container_content_home">
                        <ul id="content_home">
                            <li className="home_rsc">Natural Gas: ${this.props.naturalGas} ({Math.round(this.props.naturalGas * 11.2)}lbs CO<sub>2</sub> per month)</li>
                            <li className="home_rsc">Electricity: ${this.props.electricity} ({Math.round(this.props.electricity * 11.75)}lbs CO<sub>2</sub> per month)</li>
                            <li className="home_rsc">Fuel Oil: ${this.props.fuelOil} ({Math.round(this.props.fuelOil * 5.6)}lbs CO<sub>2</sub> per month)</li>
                            <li className="home_rsc">Propane ${this.props.propane} ({Math.round(this.props.propane * 5)}lbs CO<sub>2</sub> per month)</li>
                        </ul>
                    </div>
                </section>
                <section id="container_vehicle">
                    <div id="header_vehicle">
                        <h2 id="title_vehicle">Vehicle</h2>
                        <h3 id="total_vehicle_emissions">{Math.round(this.props.totalVehicleEmissions)}lbs CO<sub>2</sub></h3>
                    </div>
                    <div id="container_vehicle_content">
                        <Vehicle1 {...this.props} />
                        <Vehicle2 {...this.props} />
                        <Vehicle3 {...this.props} />
                        <Vehicle4 {...this.props} />
                        <Vehicle5 {...this.props} />
                    </div>
                </section>
                <section id="container_waste">
                    <div id="header_waste">
                        <h2 id="title_waste">Waste</h2>
                        <h3 id="total_waste_emissions">{this.props.totalWasteEmissions}lbs CO<sub>2</sub></h3>
                    </div>
                    <Waste {...this.props} />
                </section>
                <Button id="btn_edit" onClick={this.props.toggle}>Edit</Button>
                < EditEmissions {...this.props} />
            </article>
        )
    }
}

