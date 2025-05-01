import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/Recommend.style.css";

const Recommend = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="recommend-title">이런 도서는 어떠신가요?</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Recommend;
