import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AppCard = () => {
    return (
        <Card style={{ width: '18rem' }} className="card-app" >
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/icon-logo.png'} width="200"
                height="200" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default AppCard;