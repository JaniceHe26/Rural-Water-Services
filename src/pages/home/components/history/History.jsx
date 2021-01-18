// History Component.
import React, { useEffect, useState } from 'react';

import { Col, Container, Row, Figure } from 'react-bootstrap';
import Purple from '../../../../common/images/purple.jpg';
import Divider from '../../../../common/components/divider/Divider';
import Section from '../../../../common/components/section/Section';
import './History.css';

function Image(img) {
  return (
    <Col md={6}>
      <Figure className="historyImageContainer">
        <Figure.Image
          src={img}
          alt="About photo"
          className="historyFigureImage" fluid />
      </Figure>
    </Col>
  );
}

function secondHistoryText() {
  return (
    <Col md={6}>
      <div className="historyTextContainer">
        <p>Sed ut perspiciatis unde omnis istenatus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
        et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
        </p>
      </div>
    </Col>
  );
}

function Body() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Row>
          {Image(Purple)}
          <Col md={6}>
            <div className="historyTextContainer">
              <p>Sed ut perspiciatis unde omnis istenatus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Divider className="historyContentDivider" />
      <Container>
        <Row>
          {(windowWidth < 768) ?
            <>
              {Image(Purple)}
              {secondHistoryText()}
            </>
            :
            <>
              {secondHistoryText()}
              {Image(Purple)}
            </>
          }
        </Row>
      </Container>
    </React.Fragment>)
}

function History() {
  return (
    <React.Fragment>
      <Section id="history" title="History" body={Body()} />
    </React.Fragment>
  )
}

export default History;