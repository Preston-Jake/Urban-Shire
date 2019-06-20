import React, { Component } from 'react';
import { Card, CardText, Row, Col, CardHeader, CustomInput, Button } from 'reactstrap';

export default class UserPlans extends Component {


    render() {
        let plans = []
        this.props.action_plans.filter((plan) => {
            this.props.user_action_plans.user_plans.map(uPlan => {
                if (plan.id === uPlan) {
                    plans.push(plan)
                }
            });
        })
        let planCard = plans.map(p => {
            return (

                <Card key={p.id}>
                    <CardHeader>{p.name}</CardHeader>
                    <CardText>{p.description}</CardText>
                    <CardText>{p.reduce_emissions}lbs C0<sub>2</sub></CardText>
                    <Button color="success" id={p.id} onClick={this.props.handleComplete}>Complete</Button>
                    <Button>Cancel</Button>
                </Card >

            )
        })

        if (this.props.user_plans.length === 0) {
            return (<h3>No Plans</h3>)
        } else {
            return (
                <div >
                    {planCard}
                </div>
            )
        }
    }
}