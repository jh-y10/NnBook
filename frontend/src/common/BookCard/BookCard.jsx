import React from "react";
import { Col } from "react-bootstrap";
import "/src/styles/BookCard.style.css";

export default function BookCard({ book, onClick }) {
  return (
    <Col>
      <img
        src={book.cover}
        alt={book.title}
        className="img-fluid book-cover-img"
        style={{ cursor: onClick ? "pointer" : "default" }}
        onClick={onClick}
      />
      <h6 className="mt-2 truncate" title={book.title}>
        {book.title}
      </h6>
      <p className="text-muted truncate">{book.author}</p>
    </Col>
  );
}
