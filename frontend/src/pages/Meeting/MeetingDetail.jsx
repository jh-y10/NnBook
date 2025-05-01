import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../../styles/MeetingDetail.style.css";

const MeetingDetail = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className="meeting-detail">
            <h1>모임 글 제목</h1>
            <div className="meeting-desc">
              <p>지역:</p>
              <p>날짜:</p>
              <p>시간:</p>
              <p>내용</p>
              <p>참여인원</p>
            </div>
          </div>
          <div className="join-button-box">
            <Button type="button" size="lg">참가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetingDetail;
