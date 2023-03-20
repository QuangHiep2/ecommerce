import { React, useEffect, useState } from "react";
import image from "../assets/gg.jpg";
import "./Login.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  const navigate = useNavigate();

  const handleToken = async (token) => {
    const res = await axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    }).then((res) => {
      console.log(res.data.token);
      setToken(res.data.token);
      localStorage.setItem("userToken", res.data.token);
    });
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  return (
    <div className="mt-5 pt-4">
      <h1 className="login">Đăng nhập</h1>
      <div className="login bg-form">
        <div className="margin">
          <div className="form-group">
            <div className="mb-3">
              <label className="form-label">UserName</label>
              <input
                className="form-control"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </div>
          </div>

          <div
            className="mb-3 d-flex justify-content-between"
            controlid="formBasicCheckbox"
          >
            <div className="form-group form-check">
              <label className="form-check-label ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Duy trì đăng nhập
              </label>
            </div>
            <NavLink to="">Quên mật khẩu</NavLink>
          </div>
          <div className="d-grid gap-2">
            <button
              className=" mb-3 btn btn-primary"
              variant="primary"
              size="lg"
              type="submit"
              onClick={handleToken}
            >
              Đăng nhập
            </button>
          </div>
          <div className=" mb-2">
            <div
              className=" mb-3"
              style={{ textAlign: "center", color: "#bcbcbc" }}
            >
              Hoặc
            </div>
            <div className="login-with login-input mb-3">
              <img src={image} className="login-with__icon" />
              <span className="login-with__title" style={{ color: "White" }}>
                Đăng nhập với Gmail
              </span>
            </div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              Bạn chưa có tài khoản?
              <NavLink to="/register">&nbsp;Đăng ký</NavLink>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Login;
