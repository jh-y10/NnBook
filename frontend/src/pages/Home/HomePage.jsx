import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookCarousel from "../../components/BookCarousel/BookCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import useBooks from "../../hooks/useBooks";
import "../../styles/HomePage.style.css";
import MeetingList from "../Meeting/MeetingList";
import Recommend from "./Recommend";
import Rental from "./Rental";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const {
    data: books,
    isLoading,
    error,
  } = useBooks(
    query.trim() !== "" ? query : undefined,
    categoryId.trim() !== "" ? categoryId : undefined
  );
  const filteredBooks = books?.filter((book) => {
    const matchTitle = query
      ? book.title.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchCategory = categoryId ? book.categoryId === categoryId : true;
    return matchTitle && matchCategory;
  });
  console.log("검색 요청 상태:", { query, categoryId });
  console.log("불러온 책:", books);

  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <SearchBar onSearch={handleSearch} />

      {isLoading && <p>로딩 중…</p>}
      {error && <p>에러 발생: {error.message}</p>}
      {filteredBooks && filteredBooks.length > 0 ? (
        <BookCarousel books={filteredBooks} />
      ) : (
        !(isLoading || searchLoading) && <p>검색 결과가 없습니다.</p>
      )}

      <div className="text-end mt-3">
        <button className="btn-custom" onClick={() => navigate("/books")}>
          더보기
        </button>
      </div>

      <MeetingList />

      <Recommend previewCount={4} />
      <div className="text-end mt-3">
        <button className="btn-custom" onClick={() => navigate("/recommend")}>
          더보기
        </button>
      </div>

      <Rental />
    </div>
  );
};

export default HomePage;
