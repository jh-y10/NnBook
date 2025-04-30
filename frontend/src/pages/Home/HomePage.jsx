import React from "react";
import BookCarousel from "../../components/BookCarousel/BookCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="container mt-4">
      <SearchBar />
      <BookCarousel />

      <div className="text-end mt-3">
        <button className="btn btn-outline-secondary">더보기</button>
      </div>

      <div className="section mt-5">
        <h4 className="mb-3"> 모임 게시판</h4>
      </div>

      <div className="section mt-5">
        <h4 className="mb-3">취향 기반 추천</h4>
      </div>

      <div className="section mt-5">
        <h4 className="mb-3">대여 가능한 책</h4>
      </div>
    </div>
  );
};

export default HomePage;
