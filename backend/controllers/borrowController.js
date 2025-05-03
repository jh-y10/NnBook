import {
  FetchNewBookLend,
  changeLendStatus,
  fetchAllBookLend,
  FetchBorrowReq,
  SendNotification,
  findBorrowingBook,
} from "../models/borrowModel.js";

import { db } from "../config/db.js";

//대여도서 등록
export const addBookLend = async (req, res) => {
  const { libraryID, location, startDate, endDate } = req.body;
  try {
    await FetchNewBookLend(libraryID, location, startDate, endDate);

    if (res.status(201).json({ message: "대여도서 추가 완료!" })) {
      //내 서재의 도서 상태 대여가능으로 바꾸기
      await changeLendStatus(libraryID);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 에러" });
  }
};

//대여가능 도서 조회
export const getAllBookLend = async (req, res) => {
  try {
    const rows = await fetchAllBookLend();
    res.status(200).json(rows);
  } catch (error) {
    console.error("대여가능 도서 조회 실패:", error);
    res.status(500).json({ message: "서버 오류, 조회 실패" });
  }
};

//도서 대여 신청
export const borrowBook = async (req, res) => {
  const { bookID, libraryID, requesterEmail } = req.body;
  try {
    await FetchBorrowReq(bookID, libraryID, requesterEmail);

    // ownerEmail 조회
    const [owner] = await db.query(
      "SELECT ownerEmail FROM userlibrary WHERE id = ?",
      [libraryID]
    );

    //알람 보내기
    if (owner.length > 0) {
      const ownerEmail = owner[0].ownerEmail;
      await SendNotification(
        ownerEmail,
        requesterEmail,
        "borrow_request",
        `도서 대여 요청이 도착했습니다.`
      );
    }

    res.status(201).json({ message: "대여 신청 완료!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 에러" });
  }
};

//대여신청알람 수락
export const acceptBorrowRequest = async (req, res) => {
  const { requestId, ownerEmail } = req.body; // ownerEmail은 프론트에서 같이 보내줘야 함
  try {
    await db.query(
      "UPDATE bookborrowrequest SET status = 'accepted' WHERE id = ?",
      [requestId]
    );

    // 요청자 이메일 알아내기
    const [[{ requesterEmail }]] = await db.query(
      "SELECT requesterEmail FROM bookborrowrequest WHERE id = ?",
      [requestId]
    );

    // 알림 전송
    await SendNotification(
      requesterEmail,
      ownerEmail,
      "borrow_reply",
      "대여 요청이 수락되었습니다."
    );

    res.status(200).json({ message: "대여 요청 수락됨" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류" });
  }
};

//거절
export const rejectBorrowRequest = async (req, res) => {
  const { requestId, ownerEmail } = req.body; // ownerEmail은 프론트에서 같이 보내줘야 함
  try {
    await db.query(
      "UPDATE bookborrowrequest SET status = 'rejected' WHERE id = ?",
      [requestId]
    );

    // 요청자 이메일 알아내기
    const [[{ requesterEmail }]] = await db.query(
      "SELECT requesterEmail FROM bookborrowrequest WHERE id = ?",
      [requestId]
    );

    // 알림 전송
    await SendNotification(
      requesterEmail,
      ownerEmail,
      "borrow_reply",
      "대여 요청이 거절되었습니다."
    );

    res.status(200).json({ message: "대여 요청 거절됨" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류" });
  }
};

//내가 빌린 책 보기
export const getBorrowingBook = async (req, res) => {
  const { email } = req.user; //토큰에서 가져오기
  try {
    const reading = await findBorrowingBook(email);
    res.status(200).json(reading);
  } catch (error) {
    console.error("조회 실패:", error);
    res.status(500).json({ message: "조회 중 오류 발생" });
  }
};
