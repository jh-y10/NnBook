import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BookCard from "../../common/BookCard/BookCard";
import useBooks from "../../hooks/useBooks";
import "../../styles/RentalList.style.css";

export default function RentalList() {
  const navigate = useNavigate();

  // 빈 query("") 이면 베스트셀러 모드, page=1, size=20(default)
  const { data: books = [], isLoading, error } = useBooks("", 1, 5);

  if (isLoading) return <p>로딩 중…</p>;
  if (error)     return <p>에러 발생: {error.message}</p>;

  return (
    <Container className="py-4">
      <h4 className="mb-3 rental-list">대여 가능 도서 목록 {'  '}
      <span
         className="more-link"
         onClick={() => navigate("/rental")}
       >
         more
       </span>
       </h4>
       
      <Row xs={1} sm={3} md={5} className="gx-1 gy-1 justify-content-center justify-content-sm-start">
        {books.map(book => (
          <Col key={book.itemId || book.id}>
            <BookCard
              book={book}
              onClick={() =>
                navigate(`/rental/${book.itemId || book.id}`, { state: { book } })
              }
            />
          </Col>
        ))}
        {books.length === 0 && (
          <p className="text-center mt-5">아직 등록된 대여 도서가 없습니다.</p>
        )}
      </Row>
    </Container>
  );
}
