import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MainArea from './MainArea';

function Dashboard() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <Sidebar />
                    </Col>
                    <Col xs={12} sm={6} md={9}>
                        <MainArea />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;
