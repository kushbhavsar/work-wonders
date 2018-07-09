import React, { Component } from "react";
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import LogginForm from '../components/LogginForm';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';


class Home extends Component {


    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Col size='md-12'>
                            <h1>Work For Me</h1>
                        </Col>
                    </Row>

                    <Row>

                        <Col size='md-3' />

                        <Col size='md-6'>
                            <LogginForm />
                        </Col>

                        <Col size='md-3' />

                    </Row>
                </Container>
                <Footer />

            </div>
        )
    }
}

export default Home;
