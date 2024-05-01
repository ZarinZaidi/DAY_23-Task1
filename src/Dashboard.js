import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MainArea from './MainArea';

function Dashboard() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9}>
                        <MainArea />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;
