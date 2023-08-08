import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const VideoBackgroundSection = () => {
  return (
    <div className="video-background-section">
      {/* <video autoPlay muted loop className="video-background">
        <source src="homepage_video.mp4" type="video/mp4" />
      </video> */}
      <Container className="content">
        <Row>
          <Col>
            {/* Your content for the first column */}
          </Col>
          <Col>
            {/* Your content for the second column */}
          </Col>
          {/* Add more columns as needed */}
        </Row>
      </Container>
    </div>
  );
};

export default VideoBackgroundSection;