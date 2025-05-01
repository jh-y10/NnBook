import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import "../../styles/CreateMeeting.style.css";

const CreateMeeting = () => {
  const navigate = useNavigate();

  const goToMeetingList = (event) => {
    event.preventDefault();
    navigate("/meeting");
  };

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="create-title">모임 만들기</h1>
        </Col>
        <Col lg={12}>
          <div className="create-box">
            <form method="POST" action="#">
              <label htmlFor="location-dropdown">지역:</label>
              <select name="location" id="location-dropdown">
                <option value="seoul">서울</option>
                <option value="incheon">인천</option>
                <option value="daejeon">대전</option>
                <option value="daegu">대구</option>
                <option value="busan">부산</option>
                <option value="ulsan">울산</option>
                <option value="gwangju">광주</option>
                <option value="gyeonggi">경기</option>
                <option value="gangwon">강원</option>
                <option value="chungcheong">충청</option>
                <option value="jeolla">전라</option>
                <option value="gyeongsang">경상</option>
                <option value="jeju">제주</option>
              </select>
              <br />
              <label htmlFor="input-date">날짜:</label>
              <input type="date" id="input-date" />
              <br />
              <label htmlFor="input-time">시간:</label>
              <input type="time" id="input-time" />
              <br />
              <label htmlFor="input-textarea">세부 내용</label>
              <textarea name="detail-info" id="input-textarea"></textarea>
              <div className="button-box">
                <Button
                  type="submit"
                  size="lg"
                  onClick={(event) => goToMeetingList(event)}
                >
                  등록
                </Button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateMeeting;
