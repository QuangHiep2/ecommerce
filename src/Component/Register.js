import "./Login.css";
import image from "../assets/gg.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

function Register() {
      
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
      fullName: "",
      gender: "",
    },
    validationSchema: Yup.object({
      age: Yup.number().positive().integer().required("Required"),
      email: Yup.string().email("Email không hợp lệ").required("Required!"),
      password: Yup.string()
        .min(8, "ít nhất 8 ký tự")
        .required("Required!")
        .matches(passwordRules, { message: "làm password khỏe hơn tí đi" }),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "mật khâu chưa trùng")
        .required("Required!"),
      fullName: Yup.string()
        .min(2, "ít nhất 2 ký tự")
        .max(20, "viết tên ngắn ngắn tầm 20 ký tự thôi")
        .required("Required!"),
      gender: Yup.string().required("chưa chọn giới tính")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik)
  return (
    <div>
      <h1 className="container mt-5 p-4">Đăng ký tài khoản</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="container bg-form">
          <div className="margin">
            <div className="row">
              <div className="col">
                <h3> Thông tin tài khoản</h3>
                <div className="form-group">
                  <input
                    type="email"
                    required
                    className="form-control mt-3 mb-3"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p style={{ color: "red" }}>{formik.errors.email}</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control mb-3"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p style={{ color: "red" }}>{formik.errors.password}</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Xác nhận mật khẩu"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
                  )}
                </div>
              </div>
              {/* aaaaaa */}

              <div className="col">
                <h3>Thông tin chi tiết</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mt-3 mb-3"
                    name="fullName"
                    placeholder="Họ và tên"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.fullName && formik.touched.fullName && (
                    <p style={{ color: "red" }}>{formik.errors.fullName}</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control mb-3"
                    name="age"
                    placeholder="Tuổi"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.age && formik.touched.age && (
                    <p style={{ color: "red" }}>{formik.errors.age}</p>
                  )}
                  <div>
                    <select 
                      name="gender"
                      onChange={formik.handleChange} 
                      className="form-select"  
                    >
                      <option value="">Giới tính</option>
                      <option value="nam">nam</option>
                      <option value="nữ">nữ</option>
                    </select>
                    {formik.errors.gender && formik.touched.gender && (
                    <p style={{ color: "red" }}>{formik.errors.gender}</p>
                  )}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2">
              <button
                className=" mb-3 btn btn-primary mt-3"
                variant="primary"
                size="lg"
                type="submit"
              >
                Đăng ký
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
                Bạn đã có tài khoản?
                <NavLink to="/login">&nbsp;Đăng nhập</NavLink>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
