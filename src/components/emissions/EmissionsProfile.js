import React, { Component } from 'react';
import ActionPlan from '../action/ActionPlan';
export default class EmissionsProfile extends Component {

    render() {
        let totalE
        this.props.action_plans.map(plan => {
            if (plan.isComplete === true) {
                totalE = this.props.totalEmissions - plan.reduce_emissions

            }
        })
        return (
            <div id="wrapper_emissions">
                <h1 id="title_emissions">{Math.round(totalE)}lbs CO<sub>2</sub></h1>
                <ActionPlan {...this.props} />
            </div>
        )
    }
}