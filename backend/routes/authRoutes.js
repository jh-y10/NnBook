import express from "express";
import { login, register, getAllUsers } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getusers", getAllUsers);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: 로그인
 *     description: 이메일과 비밀번호를 입력해 로그인합니다.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 로그인 성공
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ message: "로그인 성공", email });
});

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: 회원가입
 *     description: 이름, 이메일, 비밀번호를 입력해 회원가입합니다.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 홍길동
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: 회원가입 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 회원가입 성공
 */
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({ message: "회원가입 성공", name, email });
});

export default router;
