import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer'
//import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <Navbar /> */}
                
                <Container>
                        
                <Welcome />
                    <Row>
                        <Col size='md-12'>
                            <h1>Work For Me</h1>
                        </Col>
                    </Row>

                    <Row>

                        <Col size='md-3 sm-1' />

                        <Col size='md-6 sm-6'>
                            <LoginForm />
                        </Col>

                        <Col size='md-3 sm-1' />

                    </Row>
                </Container>
                <Footer />

            </div>
        )
    }
}

export default Home;
