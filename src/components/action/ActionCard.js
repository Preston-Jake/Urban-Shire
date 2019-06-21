import React, { Component } from 'react';
import { Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';

export default class ActionCard extends Component {
    render() {
        return (
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
            </Row>
        )
    }
}
