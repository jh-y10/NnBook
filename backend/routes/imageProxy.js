import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const imageUrl = req.query.url;
  console.log("👉 요청된 이미지 URL:", imageUrl);

  if (!imageUrl) {
    return res.status(400).send("이미지 URL이 필요합니다.");
  }

  try {
    const imageRes = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      },
    });

    const contentType = imageRes.headers["content-type"];
    res.set("Content-Type", contentType);
    res.send(imageRes.data);
  } catch (error) {
    console.error("❌ 이미지 가져오기 실패");
    console.error("에러 메시지:", error.message);
    console.error("응답 상태코드:", error?.response?.status);
    res.status(500).send("이미지를 가져오는 데 실패했습니다.");
  }
});

export default router;
