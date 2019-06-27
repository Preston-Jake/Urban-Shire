import React, { Component } from 'react';
import { Button, Card } from 'reactstrap';
import ActionPlanModal from './ActionPlanModal';
import UserPlans from './UserPlans';
import '../../main.css'

export default class ActionPlan extends Component {
    render() {

        return (
            <section id="container_action_plan">
                <div id="header_action_plan">
                    <h2 id="action_plan_title">Action Plan</h2>
                    <Button id="btn_add_action" onClick={this.props.toggleActionPlanModal}>+</Button>
                </div>
                <UserPlans {...this.props} />
                <ActionPlanModal {...this.props} toggleActionPlanModal={this.props.toggleActionPlanModal} />
            </section>
        )
    }
}
