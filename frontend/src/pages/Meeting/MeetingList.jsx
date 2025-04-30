import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import "../../styles/MeetingList.style.css";

const MeetingList = () => {
  const navigate = useNavigate();

  const goToCreateMeeting = () => {
    navigate("/meeting/create");
  };

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="meeting-title">모임 게시판</h1>
        </Col>
        <Col lg={12}>
          <table className="meeting-table">
            <thead>
              <tr>
                <th scope="col">제목</th>
                <th scope="col">이름</th>
                <th scope="col">작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>테스트 제목</td>
                <td>닉네임</td>
                <td>25-04-30</td>
              </tr>
              <tr>
                <td>테스트 제목 길게도 써봐야지 음음</td>
                <td>닉네임임</td>
                <td>25-04-30</td>
              </tr>
              <tr>
                <td>짧</td>
                <td>닉네임이길어요</td>
                <td>25-04-30</td>
              </tr>
            </tbody>
          </table>
          <div className="add-button-area">
            <Button onClick={goToCreateMeeting}>글쓰기</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetingList;
