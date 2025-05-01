// backend/routes/aladinRoutes.js
import axios from "axios";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const router = express.Router();

router.get("/bestsellers", async (req, res) => {
  try {
    const url = `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.ALADIN_KEY}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;

    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("알라딘 API 오류:", error.message);
    res.status(500).json({ error: "서버 에러" });
  }
});

export default router;
