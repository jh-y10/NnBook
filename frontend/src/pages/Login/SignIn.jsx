import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/NnBook-Logo.png";
import "../../styles/SignIn.style.css";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5050/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);
      alert("로그인 성공!");
      navigate("/");
    } catch (err) {
      alert("로그인 실패: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="signin-container">
      <div
        className="logo-img"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={LogoImg} alt="NnBook 로고" />
      </div>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="mb-3">
          <label className="form-label">이메일</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label">비밀번호</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          로그인
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary w-100 mt-2"
          onClick={() => navigate("/login/signup")}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignIn;
