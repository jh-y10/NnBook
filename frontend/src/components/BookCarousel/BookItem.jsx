import React from "react";

const BookItem = ({ book }) => {
  const imageUrl = `/api/image-proxy?url=${encodeURIComponent(
    book.cover.replace("/cover500/", "/coversum/")
  )}`;

  return (
    <div className="book-card">
      <a href={book.link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={book.title} />
        <p className="book-title">{book.title}</p>
        <small className="book-author">{book.author}</small>
      </a>
    </div>
  );
};

export default BookItem;
