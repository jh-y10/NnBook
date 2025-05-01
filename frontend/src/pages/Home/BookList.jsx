import React from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import BookCard from "../../common/BookCard/BookCard";
import useBooks from "../../hooks/useBooks";
import "../../styles/BookList.style.css";

const BookList = () => {
  const { data: books, isLoading, error } = useBooks();

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container className="book-list-container">
      {isLoading && (
        <div className="loading-spinner">
          <Spinner animation="border" />
        </div>
      )}
      {error && <Alert variant="danger">{error.message}</Alert>}
      <Row className="book-list-row">
        {books?.map((book, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
