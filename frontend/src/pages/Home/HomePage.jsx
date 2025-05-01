import React, { useState } from "react";
import BookCarousel from "../../components/BookCarousel/BookCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import useBooks from "../../hooks/useBooks";

const Section = ({ title, children }) => (
  <div className="section mt-5">
    <h4 className="mb-3">{title}</h4>
    {children}
  </div>
);

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

  return (
    <div className="container mt-4">
      <SearchBar
        onSearch={(q, c) => {
          console.log("🔍 검색 버튼 클릭됨:", q, c);
          setQuery(q);
          setCategoryId(c);
        }}
      />

      {isLoading && <p>로딩 중…</p>}
      {error && <p>에러 발생: {error.message}</p>}
      {filteredBooks && filteredBooks.length > 0 ? (
        <BookCarousel books={filteredBooks} />
      ) : (
        !isLoading && <p>검색 결과가 없습니다.</p>
      )}

      <div className="text-end mt-3">
        <button className="btn btn-outline-secondary">더보기</button>
      </div>
      <Section title="모임 게시판"></Section>

      <Section title="취향 기반 추천"></Section>

      <Section title="대여 가능한 책"></Section>
    </div>
  );
};

export default HomePage;
