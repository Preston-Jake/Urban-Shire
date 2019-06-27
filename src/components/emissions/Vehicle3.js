import React, { Component } from 'react';

export default class Vehicle1 extends Component {

    render() {
        if (this.props.vehicle_2_miles === 0 || this.props.vehicle_2_miles === null) {
            return null
        } else {
            return (
                <div className="item_vehicle">
                    <h4 className="content_vechicle_title">Vehicle 3 {Math.round(((this.props.vehicle_2_miles * 52) / this.props.vehicle_2_mpg) * 19.87)}lbs CO<sub>2</sub> per year</h4>
                    <ul className="container_vehicle_info">
                        <li className="content_vehicle_info">MPG: {this.props.vehicle_2_mpg}</li>
                        <li className="content_vehicle_info">Miles Per Week: {this.props.vehicle_2_miles}</li>
                    </ul>
                </div>
            )
        }
    }
}