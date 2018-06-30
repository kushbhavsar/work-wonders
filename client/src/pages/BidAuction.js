import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const BidAuction = () => (
    <div>
        <Navbar/>
        <Container>
            <Row>
                <Col size='md-12'>
                    <h1>Work For Me</h1>
                </Col>
            </Row>

            <Row>
                <Col size='md-4'/>

                <Col size='md-4'>
                    <h3>
                        How can we help you ?
                    </h3>

                    <button type='button' className = 'btn btn-primary'>Bid</button><br/><br/>
                    <button type='button' className = 'btn btn-primary'>Auction</button>

                </Col>

                <Col size='md-4'/>

            </Row>

        </Container>
        <Footer/>

    </div>
)

export default BidAuction;