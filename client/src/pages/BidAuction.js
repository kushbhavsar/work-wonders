import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PostJob from "../components/PostJob";

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

                <Col size='md-12'>
                    <PostJob/>
                </Col>


            </Row>

        </Container>
        <Footer/>

    </div>
)

export default BidAuction;