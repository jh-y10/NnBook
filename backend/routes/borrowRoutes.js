import express from "express";
import {
  addBookLend,
  getAllBookLend,
  borrowBook,
  acceptBorrowRequest,
  rejectBorrowRequest,
  getBorrowingBook,
} from "../controllers/borrowController.js";
import { verifyToken } from "../middlewares/veryfyToken.js";

const router = express.Router();

//대여등록(현재 소유하고 있는 도서 중 다 읽은 책만 등록가능. 등록완료하면 library에서 대여가능 상태 true로 바꾸기)
//대여 가능한 도서 조회
//대여신청
//대여신청리퀘스트(알림)
//알림 수락/거절
//내가 대여중인 도서 조회회
router.post("/booklend", addBookLend);
router.get("/lendables", getAllBookLend);
router.post("/borrowreq", borrowBook);
router.post("/borrowreq/accept", acceptBorrowRequest);
router.post("/borrowreq/reject", rejectBorrowRequest);
router.get("/borrowing", verifyToken, getBorrowingBook);

router.post("/booklend", (req, res) => {
  const { libraryID, location, startDate, endDate } = req.body;
  res.status(201).json({ message: "대여가능 도서 등록 완료", bookID });
});

router.post("/borrowreq", (req, res) => {
  const { bookID, libraryID, requesterEmail } = req.body;
  res.status(201).json({ message: "대여신청 완료", bookID });
});

export default router;
