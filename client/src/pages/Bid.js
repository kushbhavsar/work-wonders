import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Bid = () => (

    <div>
        <Navbar/>
        <Container>
            <Row>
                <Col size='md-3'/>
                <Col size='md-6'></Col>
                <Col size='md-3'/>
            </Row>

        </Container>
        <Footer/>
    </div>

);
