import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PostJob from '../components/PostJob';


const Postpage = () => (

    <div>
        <Navbar/>
        <Container>
            <Row>
                <Col size='md-3'/>
                <Col size='md-6'>
                    <PostJob/>
                </Col>
                <Col size='md-3'/>
            </Row>

        </Container>
        <Footer/>
    </div>

);

export default Postpage;
