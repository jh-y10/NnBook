import express from "express";
import { getReading } from "../controllers/libraryController.js";

const router = express.Router();

//대여등록
//대여 가능한 도서 조회
//대여신청
//대여신청리퀘스트(알림)
//알림 수락/거절
router.get("/reading", getReading);

router.get("/reading", (req, res) => {
  const { ownerEmail, holderEmail } = req.query;
  res.json({ message: "조회 성공" });
});

export default router;
