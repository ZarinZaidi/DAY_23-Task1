import React from 'react';
import { Card, Table } from 'react-bootstrap';
import Chart from './Chart';

const MainArea = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Main Area</Card.Title>
                    <Card.Text>
                        This is the main area of the dashboard.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Statistics</Card.Title>
                    <Card.Text>
                        Display statistics here.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>30</td>
                        <td>john.doe@example.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Doe</td>
                        <td>25</td>
                        <td>jane.doe@example.com</td>
                    </tr>
                </tbody>
            </Table>
            <Chart />
        </div>
    );
};

export default MainArea;
