import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
const styles = {
    card: {
        borderRadius: 55,
        padding: '10px',
        border: '1px solid gray',
        maxWidth: "400px",
    },
    cardImage: {
        objectFit: 'cover',
        borderRadius: 55,
        width: "100%",
        height: "100%"
    },
    cardText: {
        fontSize: "14px",
    }
}
export default function Cards() {
    return (
        <Container fluid>
            <Row className='mb-3 g-3'>
                <Col md="4" lg="4">
                    <Card style={styles.card}>
                        <Row className='row'>
                            <Col><Card.Img src='images/matt-ridley-H-LIL57PHCc-unsplash.jpg' style={styles.cardImage} /></Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title as="p">Sample Text</Card.Title>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md="4" lg="4">
                    <Card style={styles.card}>
                        <Row className='row'>
                            <Col><Card.Img src='images/matt-ridley-H-LIL57PHCc-unsplash.jpg' style={styles.cardImage} /></Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title as="p">Sample Text</Card.Title>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md="4" lg="4">
                    <Card style={styles.card}>
                        <Row className='row'>
                            <Col><Card.Img src='images/matt-ridley-H-LIL57PHCc-unsplash.jpg' style={styles.cardImage} /></Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title as="p">Sample Text</Card.Title>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="4" lg="4">
                    <Card style={styles.card}>
                        <Row className='row'>
                            <Col><Card.Img src='images/matt-ridley-H-LIL57PHCc-unsplash.jpg' style={styles.cardImage} /></Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title as="p">Sample Text</Card.Title>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md="4" lg="4">
                    <Card style={styles.card}>
                        <Row className='row'>
                            <Col><Card.Img src='images/matt-ridley-H-LIL57PHCc-unsplash.jpg' style={styles.cardImage} /></Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title as="p">Sample Text</Card.Title>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md="4" lg="4">
                    <Card style={styles.card}>
                        <Row className='row'>
                            <Col><Card.Img src='images/matt-ridley-H-LIL57PHCc-unsplash.jpg' style={styles.cardImage} /></Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title as="p">Sample Text</Card.Title>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                    <Card.Text as="p" style={styles.cardText}>
                                        How do
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}