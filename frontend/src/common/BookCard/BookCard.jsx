import React from 'react'
import { Col } from 'react-bootstrap'
import '/src/styles/BookCard.style.css';
import PropTypes from 'prop-types'

export default function BookCard({ book, onClick }) {
  return (
    <Col>
      <img
        src={book.cover}
        alt={book.title}
        className="img-fluid book-cover-img"
        style={{ cursor: onClick ? 'pointer' : 'default' }}
        onClick={onClick}
      />
      <h6 className="mt-2 truncate" title={book.title}>
        {book.title}
      </h6>
      <p className="text-muted truncate">{book.author}</p>
    </Col>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id:     PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    cover:  PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
}

BookCard.defaultProps = {
  onClick: null,
}