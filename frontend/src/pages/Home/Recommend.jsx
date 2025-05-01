import React from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import BookCard from "../../common/BookCard/BookCard";
import useBooks from "../../hooks/useBooks";
import "../../styles/Recommend.style.css"; // 스타일 따로 분리

const Recommend = () => {
  const { data: books, isLoading, error } = useBooks();

  if (isLoading)
    return (
      <div className="recommend-loading">
        <Spinner animation="border" />
      </div>
    );

  if (error) return <Alert variant="danger">{error.message}</Alert>;

  const recommended = books?.slice(0, 5);

  return (
    <Container className="recommend-container">
      <h2 className="recommend-title">📚 추천 도서</h2>
      <Row className="recommend-row">
        {recommended?.map((book, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Recommend;
