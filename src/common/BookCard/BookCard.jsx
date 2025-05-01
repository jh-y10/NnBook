import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import useBooks from '../../hooks/useBooks';
import './BookCard.style.css'



const BookCard = () => {
    const {data: books,isLoading, error} = useBooks();
    console.log("데이터",books)
  
    if (isLoading) return <p>로딩 중…</p>;
    if (error)     return <p>{error.message}</p>;
  
    return (
        <Container fluid className="py-4">
            <Row xs={5} className="gx-1 gy-1">
            {books.map((book, idx) => (
            <Col  key={idx}>
                <img
                src={book?.cover}       
                alt={book.title}
                className="img-fluid"
                />
                <h6 className="mt-2 truncate" title={book.title}>
                {book?.title}
                </h6>
                <p className="text-muted truncate">{book?.author}</p>
            </Col>
            ))}
            </Row>
        </Container>
  )
}


export default BookCard