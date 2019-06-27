import React, { Component } from 'react';
import { Button, CardImg } from 'reactstrap';
import '../../main.css'


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
                        <div key={p.id} className="container_plan">
                            <CardImg top width="100%" src="" alt="Card image cap" />
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                            <p>{p.reduce_emissions}lbs C0<sub>2</sub></p>
                            <Button color="success" id={p.id} onClick={(e) => { this.props.handleComplete(e, p) }}>Complete</Button>
                            <Button onClick={(e) => { this.props.handleCancel(e, p) }}>Cancel</Button>
                        </div >
                    )
                } else {
                    return null
                }
            })
        }
    }
}