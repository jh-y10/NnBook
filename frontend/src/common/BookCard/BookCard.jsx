import React from "react";
import { Col } from "react-bootstrap";
import "/src/styles/BookCard.style.css";

export default function BookCard({ book, onClick }) {
  return (
    <Col>
      <img
        src={book.cover?.replace("/api/image-proxy?url=", "")}
        alt={book.title}
        className="img-fluid book-cover-img"
        style={{ cursor: onClick ? "pointer" : "default" }}
        onClick={onClick}
        onError={(e) => {
          e.target.src = "/fallback-image.png";
        }}
      />
      <h6 className="mt-2 truncate" title={book.title}>
        {book.title}
      </h6>
      <p className="text-muted truncate">{book.author}</p>
    </Col>
  );
}
