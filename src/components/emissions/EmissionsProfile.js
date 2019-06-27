import React, { Component } from 'react';
import ActionPlan from '../action/ActionPlan';
export default class EmissionsProfile extends Component {
    render() {
        return (
            <div id="wrapper_emissions">
                <h1 id="title_emissions">{Math.round(this.props.totalEmissions)}lbs CO<sub>2</sub></h1>
                <ActionPlan {...this.props} />
            </div>
        )
    }
}