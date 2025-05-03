import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import BookCard from "../../common/BookCard/BookCard";
import useBooks from "../../hooks/useBooks";
import "../../styles/BookList.style.css";

const BookList = () => {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  // 검색어에 따라 도서 리스트 요청
  const { data: books = [], isLoading, error } = useBooks(searchTerm, page);

  const handleSearch = () => {
    setPage(1);           // 검색 시 페이지 초기화
    setSearchTerm(query); // 실제 검색어 상태로 반영
  };

  return (
    <Container className="book-list-container py-4">
      <Row className="align-items-center mb-4">
        <Col xs={12} md="auto">
          <strong className="book-list-title">전체 도서 목록</strong>
        </Col>
        <Col xs={12} md="auto" className="mt-2 mt-md-0 ms-md-auto">
          <InputGroup className="book-search-group">
            <Form.Control
              className="book-search-input"
              type="text"
              placeholder="도서명을 입력하세요"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <Button className="book-search-button" onClick={handleSearch}>
              검색
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {isLoading && (
        <div className="loading-spinner text-center my-4">
          <Spinner animation="border" />
        </div>
      )}
      {error && <Alert variant="danger">{error.message}</Alert>}

      <Row className="book-list-row gy-3">
        {books.map((book, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>

      {books.length === 0 && !isLoading && (
        <p className="text-center mt-5">검색 결과가 없습니다.</p>
      )}
    </Container>
  );
};

export default BookList;
