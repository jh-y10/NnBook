import React, { useState }  from 'react'
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import BookCard from '../../common/BookCard/BookCard';
import './RentalList.style.css'



const RentalList = () => {
  const [query, setQuery] = useState('')        
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)

  const handleSearch = () => {
    setPage(1)             
    setSearchTerm(query)   
  }
  

  return(
    <>
    <Container className="py-4">
      <Row className="align-items-center mb-5">
          <Col xs={12} md="auto">
            <strong className="rental-list">대여 가능 도서 목록</strong>
          </Col>
          <Col  xs={12} md="auto" className="mt-2 mt-md-0 ms-md-auto">
          <InputGroup className="rental-search-group">
            <Form.Control
                type="text"
                placeholder="검색어를 입력하세요"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <Button
                className="rental-search"
                onClick={handleSearch}
              >
                검색
              </Button>
            </InputGroup>
          </Col>
      </Row>
      <BookCard  />
    </Container>
    </>
  )
}

export default RentalList