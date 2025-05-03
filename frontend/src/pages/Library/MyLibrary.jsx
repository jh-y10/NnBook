import React from "react";
import "../../styles/MyLibrary.style.css";
import { useMyInfoQuery } from "../../hooks/useMyInfoQuery";
import { Alert } from "react-bootstrap";

const MyLibrary = () => {
  const { data: mydata, isLoading, isError, error } = useMyInfoQuery();

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return <Alert variant="danger">불러오기 실패: {error.message}</Alert>;

  return (
    <div className="libraryContainer container">
      <h1 className="libraryNameTitle mb-3">{mydata.nickname}님의 서재</h1>
      <div className="section mt-3">
        <h3 className="libraryTitle mb-3">읽고 있는 도서</h3>
        <div className="libraryBoxStroke libraryBookList">읽고 있는 도서 리스트</div>
      </div>
      <div className="section mt-5">
        <h3 className="libraryTitle mb-3">완독 도서</h3>
        <div className="libraryBoxStroke libraryBookList">완독 도서 리스트</div>
      </div>
      <div className="section mt-5">
        <h3 className="libraryTitle mb-3">빌려준 도서</h3>
        <div className="libraryBoxStroke libraryBookList">빌려준 도서 리스트</div>
      </div>
    </div>
  );
};

export default MyLibrary;
