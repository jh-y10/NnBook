import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../../styles/MeetingDetail.style.css";
import { useMeetingQuery } from "../../hooks/useMeetingQuery";
import { useParams } from "react-router";

const MeetingDetail = () => {
  const { data, isLoading, isError, error } = useMeetingQuery();
  let { id } = useParams();

  const translateKorean = (location) => {
    switch (location) {
      case "seoul":
        return "서울";
        break;
      case "incheon":
        return "인천";
        break;
      case "daejeon":
        return "대전";
        break;
      case "daegu":
        return "대구";
        break;
      case "busan":
        return "부산";
        break;
      case "ulsan":
        return "울산";
        break;
      case "gwangju":
        return "광주";
        break;
      case "gyeonggi":
        return "경기";
        break;
      case "gangwon":
        return "강원";
        break;
      case "chungcheong":
        return "충청";
        break;
      case "jeolla":
        return "전라";
        break;
      case "gyeongsang":
        return "경상";
        break;
      case "jeju":
        return "제주";
        break;
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className="meeting-detail">
            <h1>
              {data?.data.map((meeting) => {
                if (meeting.id == id) {
                  return meeting.title;
                }
              })}
            </h1>
            <div className="meeting-desc">
              <p>
                지역:{" "}
                {data?.data.map((meeting) => {
                  if (meeting.id == id) {
                    return translateKorean(meeting.location);
                  }
                })}
              </p>
              <p>
                날짜:{" "}
                {data?.data.map((meeting) => {
                  if (meeting.id == id) {
                    return meeting.date.slice(0, 10);
                  }
                })}
              </p>
              <p>
                시간:{" "}
                {data?.data.map((meeting) => {
                  if (meeting.id == id) {
                    return meeting.time;
                  }
                })}
              </p>
              <p>
                내용:{" "}
                {data?.data.map((meeting) => {
                  if (meeting.id == id) {
                    return meeting.content;
                  }
                })}
              </p>
              <p>참여인원:</p>
            </div>
          </div>
          <div className="join-button-box">
            <Button type="button" size="lg">
              참가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetingDetail;
