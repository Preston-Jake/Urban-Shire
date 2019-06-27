import React, { Component } from 'react';
import {
    CardBody, CardTitle,
} from 'reactstrap';

export default class Waste extends Component {


    render() {
        const recycling = []
        if (this.props.aluminum === true) {
            recycling.push(`Aluminum -${this.props.numOfPeople * 89}lbs C02`)
        }
        if (this.props.plastic === true) {
            recycling.push(`Plastic -${this.props.numOfPeople * 36}lbs CO2`)
        }
        if (this.props.glass === true) {
            recycling.push(`Glass -${this.props.numOfPeople * 25}lbs CO2`)
        }
        if (this.props.newspaper === true) {
            recycling.push(`Newpaper -113lbs C02`)
        }
        if (this.props.magazines === true) {
            recycling.push(`Magazines -27lbs C02`)
        }
        if (recycling.length === 0) {
            recycling.push("none")
        }
        return (
            <div id="container_waste_content">
                <ul id="content_recycling">
                    {recycling.map((r) => {
                        return (<li key={r}> {r} </li>)
                    })}
                </ul>
            </div>
        )
    }
}