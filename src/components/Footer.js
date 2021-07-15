import React from 'react';
import logo from '../img/tmdb_logo_blue.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
    return (
        <Container className="footer">
            <Row>
                <Col xs={10} sm={10} lg={10}>
                    <div className="d-flex justify-content-start">
                    <p className="footerText">This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                    </div>
                </Col>
                <Col xs={2} sm={2} lg={2}>
                    <img src={logo} className="tmdbLogo" alt="The Movie Database logo" />   
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;