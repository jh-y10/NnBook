import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/SignUp.style.css";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    name: "",
    genre: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5050/api/auth/signup", {
        email: form.email,
        password: form.password,
        nickname: form.nickname,
      });
      alert("회원가입 성공");
      navigate("/login");
    } catch (err) {
      alert("회원가입 실패: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={form.nickname}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="input"
          name="genre"
          placeholder="장르"
          value={form.genre}
          onChange={handleChange}
          required
        />
        <input
          type="input"
          name="location"
          placeholder="위치"
          value={form.location}
          onChange={handleChange}
          required
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUp;
