import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookCarousel from "../../components/BookCarousel/BookCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import useBooks from "../../hooks/useBooks";
import useSearchBook from "../../hooks/useSearchBook";
import "../../styles/HomePage.style.css";
import MeetingList from "../Meeting/MeetingList";
import Recommend from "./Recommend";
import Rental from "./Rental";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // 실제 요청에 쓰이는 쿼리

  const navigate = useNavigate();

  const { data: books = [], isLoading, error } = useBooks(query, categoryId); // 전체 도서

  const {
    data: searchedBooks = [],
    isLoading: searchLoading,
    error: searchError,
  } = useSearchBook(searchTerm, categoryId, 1); // 검색 도서

  const isSearching = !!searchTerm;

  const filteredBooks = (isSearching ? searchedBooks : books)?.filter(
    (book) => {
      const matchCategory = categoryId
        ? String(book.categoryId) === String(categoryId)
        : true;
      return matchCategory;
    }
  );

  const handleSearch = (q, c) => {
    console.log("🔍 검색 버튼 클릭됨:", q, c);
    setQuery(q);
    setCategoryId(c);
    setSearchTerm(q.trim()); // 검색 API 호출
  };

  return (
    <div className="container mt-4">
      <SearchBar onSearch={handleSearch} />

      {(isLoading || searchLoading) && <p>로딩 중…</p>}
      {(error || searchError) && (
        <p>에러 발생: {error?.message || searchError?.message}</p>
      )}
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
