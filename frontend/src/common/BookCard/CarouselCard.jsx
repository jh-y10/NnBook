import React from "react";
import { Alert } from "react-bootstrap";
import "/src/styles/CarouselCard.style.css";
import useBookByID from "../../hooks/useBookbyID";
import { useNavigate } from "react-router";

export default function BookCard({ bookID }) {
  const { data: bookinfo, isLoading, isError } = useBookByID(bookID);
  const navigate = useNavigate();

  const moveToDetail = (bookID) => {
    navigate(`/library/${bookID}`);
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return <Alert variant="danger">불러오기 실패: {error.message}</Alert>;

  if (!bookinfo) return null;

  return (
    <div className="bookcard-contents" onClick={() => moveToDetail(bookID)}>
      <img
        src={bookinfo.cover?.replace("/api/image-proxy?url=", "")}
        alt={bookinfo.title}
        className="img-fluid book-cover-img"
        onError={(e) => {
          e.target.src = "/fallback-image.png";
        }}
      />
      <h6 className="mt-2 truncate" title={bookinfo.title}>
        {bookinfo.title}
      </h6>
      <p className="text-muted truncate">{bookinfo.author}</p>
    </div>
  );
}
