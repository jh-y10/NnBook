import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  createUser,
  findUserByEmail,
  findAllUsers,
  createFavGenre,
} from "../models/userModel.js";

//회원가입
export const register = async (req, res) => {
  const { email, name, password, location, genre } = req.body;
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "이미 가입된 이메일입니다." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(email, name, hashedPassword, location);
    //관심장르 설정
    await Promise.all(genre.map((g) => createFavGenre(email, g)));

    res.status(201).json({ message: "회원가입 성공!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 에러" });
  }
};

//로그인
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(400)
        .json({ message: "이메일 또는 비밀번호가 틀렸습니다." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "이메일 또는 비밀번호가 틀렸습니다." });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "로그인 성공!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 에러" });
  }
};

//사용자 조회
export const getAllUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("사용자 조회 실패:", error);
    res.status(500).json({ message: "사용자 조회 중 오류 발생" });
  }
};
