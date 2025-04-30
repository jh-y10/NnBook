import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const BookCarousel = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const res = await axios.get("/api/aladin/bestsellers");
        setBooks(res.data.item || []);
      } catch (error) {
        console.error("알라딘 API 호출 실패", error);
      }
    };

    fetchBestsellers();
  }, []);

  if (!books.length) return <p>도서 정보를 불러오는 중입니다...</p>;

  return (
    <div className="mt-5">
      <h3 className="mb-3">📚 인기 도서</h3>
      <Carousel>
        {books.map((book) => (
          <Carousel.Item key={book.itemId}>
            <img
              className="d-block mx-auto"
              src={book.cover}
              alt={book.title}
              style={{ maxHeight: "300px" }}
            />
            <Carousel.Caption>
              <h5>{book.title}</h5>
              <p>{book.author}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BookCarousel;
