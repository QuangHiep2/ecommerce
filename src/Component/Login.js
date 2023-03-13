import React from "react";
import image from "../assets/gg.jpg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Login.css";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Minimum 8 characters").required("Required"),
});

function Login() {
  return (
    <div>
      <h1 className="login">Đăng nhập</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => {
          <Form>
            <div className="login bg-form">
              <div className="margin">
                <div className="form-group">
                  <div className="mb-3">                  
                  <Field name="email" type="email" />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  </div>
                </div>                

                <div className="form-group">
                  <div className="mb-3">
                    <Field name="password" type="password" />
                    {errors.password && touched.password ? <div>{errors.password}</div> : null}
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
                  <a href="">Quên mật khẩu</a>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className=" mb-3 btn btn-primary"
                    variant="primary"
                    size="lg"
                    type="submit"
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
                    <span
                      className="login-with__title"
                      style={{ color: "White" }}
                    >
                      Đăng nhập với Gmail
                    </span>
                  </div>
                  <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    Bạn chưa có tài khoản?
                    <a href="">&nbsp;Đăng ký</a>
                  </div>
                </div>
              </div>
            </div>
          </Form>;
        }}
      </Formik>
    </div>
  );
}

export default Login;
