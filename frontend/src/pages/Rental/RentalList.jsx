import React, { useState }  from 'react'
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import BookCard from '../../common/BookCard/BookCard';
import '../../styles/RentalList.style.css'
import { useNavigate } from 'react-router-dom'
import useBooks from '../../hooks/useBooks'
import useSearchBook from '../../hooks/useSearchBook';



const RentalList = () => {
  const [query, setQuery] = useState('')        
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  //대여도서목록
  const { data: books = [], isLoading, error } = useBooks(page)
  console.log("렌탈데이터",books)
  //대여도서검색
  const { data: searchBook = [] } = useSearchBook(searchTerm, page);
  //.log("서치",searchBook)
  

  const handleSearch = () => {
    setPage(1)             
    setSearchTerm(query)   
  }
  
  const isSearching = !!searchTerm;
  const displayBooks = isSearching ? searchBook : books;

  if (isLoading) return <p>로딩 중…</p>
  if (error)     return <p>에러 발생: {error.message}</p>

  return(
    <>
    <Container className="py-4">
      <Row className="align-items-center mb-5">
        <Col xs={12} md="auto">
          <strong className="rental-list">대여 가능 도서 목록</strong>
        </Col>
        <Col xs={12} md="auto" className="mt-2 mt-md-0 ms-md-auto">
          <InputGroup className="rental-search-group">
            <Form.Control
              className="rental-search-input"
              type="text"
              placeholder="검색어를 입력하세요"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSearch()
              }}
            />
            <Button className="rental-search" onClick={handleSearch}>
              검색
            </Button>
          </InputGroup>
        </Col>
      </Row>

      <Row xs={1} sm={3} md={5} className="gx-1 gy-1 justify-content-center justify-content-sm-start">
        {displayBooks.map(book => (
          <BookCard
            key={book.itemId || book.id}                       
            book={book}                            
            onClick={() => navigate(`/rental/${book.itemId || book.id}`,{ state: { book } })}  
          />
        ))}
      </Row>
      {displayBooks.length === 0 && (
        <p className="text-center mt-5">검색 결과가 없습니다.</p>
      )}
    </Container>
    </>
  )
}

export default RentalList