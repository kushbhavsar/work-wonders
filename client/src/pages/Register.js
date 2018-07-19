import React from 'react';
import {Link} from 'react-router-dom';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import RegistrationForm from '../components/RegistrationForm';
//import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => (
    <div>
        
        <Container>
            <Row>
                <Col size='md-12'>
                    <h1>Work For Me</h1>
                </Col>
            </Row>
    
            <Row>
                <Col size='md-12'>
                    <RegistrationForm/>
                    <Link to="/bidauction" ></Link>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
)

export default Register;