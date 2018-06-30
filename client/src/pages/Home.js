import React from "react";
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import LogginForm from '../components/LogginForm';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';


const Home = () => (
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
                    <LogginForm />
                </Col>
            </Row>
        </Container>
        <Footer/>

    </div>

)

export default Home;