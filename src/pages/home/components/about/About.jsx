import React from 'react';

import { Col, Container, Row, Figure } from 'react-bootstrap';
import Purple from "../../../../common/images/purple.jpg";
import Section from '../../../../common/components/section/Section';
import './About.css';

var body = (
  <React.Fragment>
    <Container className="aboutContainer">
      <Row>
        <Col md={6}>
          <Figure>
            <Figure.Image
              src={Purple}
              alt="Rural Water Services"
              title="Rural Water"
              className="figureImage" fluid />
            <Figure.Caption>
              Business owner Russ Pitts (left) and his father, the founder of the company, Larry Pitts.
            </Figure.Caption>
          </Figure>
        </Col>
        <Col md={6}>
          <div class="imageTextContainer">
            <p>
              Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aas nulla pariatur?
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)

function About() {
  return (
    <React.Fragment>
      <Section id="about" title="About" body={body} />
    </React.Fragment>
  )
}

export default About;
