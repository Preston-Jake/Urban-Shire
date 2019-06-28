import React, { Component } from 'react';
import ActionPlan from '../action/ActionPlan';
export default class EmissionsProfile extends Component {

    render() {
        //if evrey plan is false return totalEmissions//else return totalEmissons - reduce emissions
        let totalE = this.props.totalEmissions
        this.props.action_plans.map(plan => {
            if (plan.isComplete === true) {
                totalE -= plan.reduce_emissions
            } else {
                totalE -= 0
            }
        })

        return (
            <div id="wrapper_emissions">
                <h1 id="title_carbon">Total Carbon Usage</h1>
                <h1 id="title_emissions">{Math.round(totalE)}lbs CO<sub>2</sub></h1>
                <ActionPlan {...this.props} />
            </div>
        )
    }
}