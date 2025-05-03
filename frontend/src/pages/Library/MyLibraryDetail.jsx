import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../../styles/MyLibraryDetail.style.css";
import useBookByID from "../../hooks/useBookbyID";
import { useParams } from "react-router";
import { useLikeBookMutation } from "../../hooks/useLikeBookMutation";
import { useMyInfoQuery } from "../../hooks/useMyInfoQuery";

const MyLibraryDetail = () => {
  const [entries, setEntries] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageSum, setCurrentPageSum] = useState(0);
  const [progress, setProgress] = useState(0);

  const [inputDateTime, setInputDateTime] = useState("");
  const [inputPages, setInputPages] = useState("");
  const [inputTotal, setInputTotal] = useState("");

  const [showMinusPageModal, setShowMinusPageModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showOverPageModal, setShowOverPageModal] = useState(false);
  const [showCompleteProgressBar, setShowCompleteProgressBar] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const [likeStatus, setLikeStatus] = useState(null);

  const { bookID } = useParams();
  console.log(bookID);

  const { data: book, isLoading, error } = useBookByID(bookID);

  const { data: mydata } = useMyInfoQuery();

  const { mutate: likeBook } = useLikeBookMutation();

  useEffect(() => {
    if (book && book?.subInfo?.itemPage) {
      setTotalPages(parseInt(book?.subInfo?.itemPage, 10));
      console.log("book data:", book);
    }
  }, [book]);

  if (isLoading) return <p>로딩 중…</p>;
  if (error) return <p>오류: {error.message}</p>;
  if (!book) return <p>책을 찾을 수 없습니다.</p>;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // 오전/오후 표시
    };
    return date.toLocaleString("ko-KR", options);
  };

  const handleAddEntry = () => {
    const readPages = parseInt(inputPages, 10);
    const total = totalPages > 0 ? totalPages : parseInt(inputTotal, 10);

    const isDuplicateDate = entries.some(
      (entry) => entry.date === inputDateTime
    );

    if (!readPages || !total || !inputDateTime || isDuplicateDate) return;

    const newSum = currentPageSum + readPages;

    if (newSum > total) {
      setShowOverPageModal(true);
      return;
    }

    if (readPages < 0) {
      setShowMinusPageModal(true);
      return;
    }

    const percent = Math.min(Math.round((newSum / total) * 100), 100);

    setEntries([...entries, { date: inputDateTime, pages: readPages }]);
    setCurrentPageSum(newSum);
    if (totalPages === 0) setTotalPages(total);
    setProgress(percent);

    if (newSum === total) {
      setShowCompleteModal(true);
      setShowCompleteProgressBar(true);
    }

    setInputDateTime("");
    setInputPages("");
  };

  const isTotalPagesInputDisabled =
    totalPages > 0 || (book && book?.subInfo?.itemPage);

  const handleLike = (status) => {
    if (!status) {
      setShowValidationMessage(true);
      return;
    }
    setLikeStatus(status);
    likeBook({ bookID, email: mydata.email });
  };

  return (
    <div className="libraryDetailContainer">
      <div>
        <div>
          <div className="libraryDetail libraryDetailBoxStroke">
            <div className="libraryDetailBookInfo">
              <div>
                <img
                  src={book.cover}
                  alt={book.title ? book.title.split(" - ")[0] : ""}
                />
              </div>
              <div className="libraryDetailInfoText">
                <div>
                  <h5 className="mt-2 mx-4">{book.title?.split(" - ")[0]}</h5>
                  <h6 className="mt-2 mx-4">{book?.subInfo?.itemPage} 쪽</h6>
                  <h6 className="mt-2 mx-4">
                    {book?.categoryName.split(">")[1]}
                  </h6>
                </div>
                {likeStatus !== null && (
                  <div className="libraryDetailBoxStroke libraryDetailRAL">
                    <div className="libraryDetailLike">
                      {likeStatus === "like" ? "👍 Like" : "👎 Dislike"}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="progress">
              <div
                className={`progress-bar progressBar ${
                  showCompleteProgressBar ? "CompleteProgressBar" : ""
                }`}
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <p className="libraryDetailProgressPercent">{progress}%</p>
              </div>
            </div>

            <div className="libraryDetailProgressArea libraryDetailBoxStroke">
              <div className="libraryDetailDandP">
                <h6>날짜</h6>
                <h6>진척도</h6>
              </div>
              <div className="libraryDetailProgressList">
                <ul>
                  {entries.map((entry, idx) => (
                    <li key={idx}>{formatDate(entry.date)}</li>
                  ))}
                </ul>
                <ul>
                  {entries.map((entry, idx) => (
                    <li key={idx}>{entry.pages} 페이지</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="libraryInputArea">
            <Form.Control
              type="datetime-local"
              value={inputDateTime}
              onChange={(e) => setInputDateTime(e.target.value)}
              aria-label="날짜"
              className="libraryDetailBoxStroke libraryDetailInputCal"
              disabled={progress === 100}
            />
            <Form.Control
              type="number"
              placeholder="읽은 페이지 수"
              value={inputPages}
              onChange={(e) => setInputPages(e.target.value)}
              aria-label="읽은 페이지 수"
              className="libraryDetailBoxStroke"
              disabled={progress === 100}
            />
            <Form.Control
              type="number"
              placeholder="전체 페이지 수"
              value={totalPages > 0 ? totalPages : inputTotal}
              onChange={(e) => setInputTotal(e.target.value)}
              aria-label="전체 페이지 수"
              disabled={isTotalPagesInputDisabled || progress === 100}
              className="libraryDetailBoxStroke"
            />
            <Button
              className="libraryDetailInputButton"
              onClick={handleAddEntry}
              disabled={progress === 100}
            >
              +
            </Button>
          </div>
        </div>

        <Modal
          show={showCompleteModal}
          backdrop="static" // 창꺼짐 방지
          keyboard={false} // esc키 방지
          centered
        >
          <Modal.Header>
            <Modal.Title>완독 축하합니다! 🎉</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>책을 끝까지 다 읽으셨네요!</p>

            <Form.Group className="mt-3">
              {showValidationMessage && (
                <p className="text-danger mt-3">
                  좋아요/싫어요 중 하나를 선택해주세요.
                </p>
              )}
            </Form.Group>

            <div className="d-flex justify-content-around mt-3">
              <Button
                variant={likeStatus === "like" ? "success" : "outline-success"}
                onClick={() => handleLike("like")}
              >
                👍 Like
              </Button>
              <Button
                variant={likeStatus === "dislike" ? "danger" : "outline-danger"}
                onClick={() => handleLike("dislike")}
              >
                👎 Dislike
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => setShowCompleteModal(false)}
            >
              확인
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default MyLibraryDetail;
