import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardText, Row, Col, CardHeader, CustomInput } from 'reactstrap';

export default class ActionPlanModal extends Component {

    render() {
        // console.log(this.props)
        let card = this.props.action_plans.map((action, index) => {
            if (action.isComplete === true) { return null } else {
                return (
                    <Col key={action.id} sm="6">
                        <Card>
                            <CardHeader>{action.name}</CardHeader>
                            <CardText>{action.description}</CardText>
                            <CardText>{action.reduce_emissions}lbs C0<sub>2</sub></CardText>
                            <CustomInput type="checkbox" id={action.id} label="Add" onClick={(e) => { this.props.handleSelect(action, index) }} />
                        </Card>
                    </Col>
                )
            }
        })
        return (
            <Modal isOpen={this.props.actionPlanModal}>
                <ModalHeader>Action Plan</ModalHeader>
                <ModalBody>
                    <Row>
                        {card}
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => { this.props.handlePlansSubmit(e); this.props.toggleActionPlanModal() }}>Create Plan</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggleActionPlanModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}