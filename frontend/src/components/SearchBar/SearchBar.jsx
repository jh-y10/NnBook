import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./SearchBar.style.css";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ keyword, genre });
  };

  return (
    <Form className="search-bar" onSubmit={handleSubmit}>
      <Row className="align-items-center g-2">
        <Col xs={12} md={6}>
          <Form.Control
            type="text"
            placeholder="도서명, 저자명으로 검색"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col xs={6} md={3}>
          <Form.Select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">전체 장르</option>
            <option value="소설">소설</option>
            <option value="에세이">에세이</option>
            <option value="인문">인문</option>
            <option value="과학">과학</option>
            <option value="경제">경제</option>
          </Form.Select>
        </Col>
        <Col xs={6} md={3}>
          <Button type="submit" className="w-100">
            검색
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
