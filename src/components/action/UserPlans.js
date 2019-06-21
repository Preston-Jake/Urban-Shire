import React, { Component } from 'react';
import { Card, CardText, Row, Col, CardHeader, CustomInput, Button } from 'reactstrap';


export default class UserPlans extends Component {


    render() {
        if (this.props.user_action_plans.user_plans.length === 0) {
            return (<h3>No Plans</h3>)
        } else {
            return this.props.user_action_plans.user_plans.map((p) => {
                if (p.isCompleted === true) {
                    return null
                } else if (p.isSelected === true) {
                    return (
                        <Card key={p.id}>
                            <CardHeader>{p.name}</CardHeader>
                            <CardText>{p.description}</CardText>
                            <CardText>{p.reduce_emissions}lbs C0<sub>2</sub></CardText>
                            <Button color="success" id={p.id} onClick={(e) => { this.props.handleComplete(e, p) }}>Complete</Button>
                            <Button>Cancel</Button>
                        </Card >
                    )
                } else {
                    return null
                }
            })
        }
    }
}