import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardText } from 'reactstrap';
import ActionPlanModal from './ActionPlanModal';
import UserPlans from './UserPlans';

export default class ActionPlan extends Component {
    render() {
        return (
            <div id="action_plan_container">
                <Card>
                    <CardHeader tag="h3">Action Plan<Button color="primary" onClick={this.props.toggleActionPlanModal}>+</Button></CardHeader>
                    <CardBody>

                        <UserPlans {...this.props} />
                    </CardBody>
                </Card>
                <ActionPlanModal {...this.props} toggleActionPlanModal={this.props.toggleActionPlanModal} />

            </div>
        )
    }
}