import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Bid from '../components/Bid';


class Bidpage extends Component  {
    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Col size='md-12'>
                            <h1>Current Jobs</h1>
                        </Col>

                        <Col size="md-12">
                            <Bid />
                        </Col>

                    </Row>
                </Container>

                <Footer/>
            </div>
        )
    }

}


export default Bidpage;