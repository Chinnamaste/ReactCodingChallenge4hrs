import React from 'react';
import Result from './Result';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Results({ results }) {
    return (
            <Container className="movieList">
                <Row>
                    {results.map(result => (
                            <Col>
                                <Result key={result.id} result={result}/>
                            </Col>
                    ))}
                </Row>
            </Container>
    )
}

export default Results;
