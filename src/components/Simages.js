import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../assets/image1.jpg'; 
import Image2 from '../assets/image2.jpg'; 

const Simages = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="image-col">
          <img src={Image1} alt="Image 1" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="image-col">
          <img src={Image2} alt="Image 2" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Simages;
