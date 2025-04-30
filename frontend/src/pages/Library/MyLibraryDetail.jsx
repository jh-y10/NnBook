import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "../../styles/MyLibraryDetail.style.css";

const MyLibraryDetail = () => {
  return (
    <Container>
      <h1>읽고 있는 도서</h1>
      <Container className="libraryDetail">
        <Row>
          <Col>
            <img src="" alt="책 표지" />
          </Col>
          <Col>
            <p>책 이름</p>
          </Col>
        </Row>
        <div className="progress">
          <div
            className="progress-bar bg-info progressBar"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            70%
          </div>
        </div>
        <div>날짜 진척도</div>
      </Container>

      <InputGroup className="mb-3">
        <Form.Control aria-label="날짜" />
        <Form.Control aria-label="읽은 페이지 수" />
        <Button >+</Button>
      </InputGroup>
    </Container>
  );
};

export default MyLibraryDetail;
