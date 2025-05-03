import React from "react";
import "../../styles/MyLibrary.style.css";
import { useMyInfoQuery } from "../../hooks/useMyInfoQuery";
import { Alert } from "react-bootstrap";
import { useReadingBookQuery } from "../../hooks/userReadingBooksQuery";
import { useFinishedBooksQuery } from "../../hooks/useFinishedBooksQuery";
import { useLendedBooksQuery } from "../../hooks/useLendedBooksQuery";

const MyLibrary = () => {
  const { data: mydata, isLoading, isError, error } = useMyInfoQuery();

  const ownerEmail = mydata?.email;
  const holderEmail = mydata?.email;

  const {
    data: readingBooks,
    isLoading: isReadingLoading,
    isError: isReadingError,
  } = useReadingBookQuery({ ownerEmail, holderEmail });

  const {
    data: finishedBooks,
    isLoading: isFinishedLoading,
    isError: isFinishedError,
  } = useFinishedBooksQuery({ ownerEmail, holderEmail });

  const {
    data: lendedBooks,
    isLoading: isLendedLoading,
    isError: isLendedError,
  } = useLendedBooksQuery(ownerEmail);

  console.log("data", mydata);
  console.log("oe", ownerEmail);
  console.log("he", holderEmail);
  console.log("rb", readingBooks);
  console.log("fb", finishedBooks);
  console.log("lb", lendedBooks);

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return <Alert variant="danger">불러오기 실패: {error.message}</Alert>;

  return (
    <div className="libraryContainer container">
      <h1 className="libraryNameTitle">{mydata.nickname}님의 서재</h1>
      <div className="section mt-3">
        <h3 className="libraryTitle mb-3">읽고 있는 도서</h3>
        <div className="libraryBoxStroke libraryBookList">
          {isReadingLoading ? (
            <p>로딩 중...</p>
          ) : isReadingError ? (
            <p>데이터를 불러오는 데 실패했습니다.</p>
          ) : readingBooks && readingBooks.length > 0 ? (
            readingBooks.map((book) => (
              <div key={book.id} className="bookItem">
                <img
                  className="libraryDetailBookImage"
                  src={book.cover}
                  alt={book.title ? book.title.split(" - ")[0] : ""}
                />
              </div>
            ))
          ) : (
            <p>읽고 있는 도서가 없습니다.</p>
          )}
        </div>
      </div>
      <div className="section mt-5">
        <h3 className="libraryTitle mb-3">완독 도서</h3>
        <div className="libraryBoxStroke libraryBookList">
          {isFinishedLoading ? (
            <p>로딩 중...</p>
          ) : isFinishedError ? (
            <p>데이터를 불러오는 데 실패했습니다.</p>
          ) : finishedBooks && finishedBooks.length > 0 ? (
            finishedBooks.map((book) => (
              <div key={book.id} className="bookItem">
                <img
                  className="libraryDetailBookImage"
                  src={book.cover}
                  alt={book.title ? book.title.split(" - ")[0] : ""}
                />
              </div>
            ))
          ) : (
            <p>완독한 도서가 없습니다.</p>
          )}
        </div>
      </div>
      <div className="section mt-5">
        <h3 className="libraryTitle mb-3">빌려준 도서</h3>
        <div className="libraryBoxStroke libraryBookList">
          {isLendedLoading ? (
            <p>로딩 중...</p>
          ) : isLendedError ? (
            <p>데이터를 불러오는 데 실패했습니다.</p>
          ) : lendedBooks && lendedBooks.length > 0 ? (
            lendedBooks.map((book) => (
              <div key={book.id} className="bookItem">
                <img
                  className="libraryDetailBookImage"
                  src={book.cover}
                  alt={book.title ? book.title.split(" - ")[0] : ""}
                />
              </div>
            ))
          ) : (
            <p>빌려준 도서가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
