import React  from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import '../../styles/RentalDetail.style.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BookRentalModal from './BookRentalModal'
import "/src/styles/BookRentalModal.style.css";


export default function RentalDetail() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const book = state?.book

  // 모달 오픈/닫기 state
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)


  if (!book) {
    return (
      <Container className="py-5 text-center">
        <p>책 정보를 찾을 수 없습니다.</p>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          목록으로 돌아가기
        </Button>
      </Container>
    )
  }

  return (
    <>
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <strong className="rental-list">도서 대여 신청</strong>
        </Col>
      </Row>
      <Card className="detail-box mb-4">
        <Card.Body>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="book-detail-card">
                <Card.Img 
                  variant="top" 
                  src={book.cover} 
                  className="book-cover" 
                />
              </Card>
            </Col>
            <Col md={8}>
              <h2 className="book-detail-title">{book.title}</h2>
              <p><strong>저자:</strong> {book.author}</p>
              <p><strong>출판사:</strong> {book.publisher}</p>
              <p><strong>대여자 위치:</strong> {book.location}</p>
              <hr />
              <p className="book-detail-desc">{book.description}</p>
              <Button
                size="lg"
                className="rental-detail mt-3"
                onClick={() => alert(`${book.title} 대여 신청 완료`)}
              >
                대여 신청
              </Button>
              <Button
                size="lg"
                className="rental-detail mt-3"
                onClick={openModal}
              >
                도서 대여 등록
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    <BookRentalModal
      show={showModal}
      book={book}
      onClose={closeModal}
      onSubmit={bk => {
        alert(`${bk.title} 대여 신청 완료!`)
        closeModal()
      }}
    />
    </>
  )
}