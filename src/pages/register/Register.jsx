import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerApi } from "services/user";
import "./register.scss";
import { setUserInfoAction } from "../../store/actions/userAction";
import { notification } from "antd";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    hoTen: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };


  function validate() {
    const { taiKhoan, matKhau, email, soDt, hoTen } = state;
    const errors = [];

    if (email.length < 4) {
      errors.push("Email phải dài ít nhất 4 kí tự");
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      errors.push("Email phải có định dạng @");
    }
    if (matKhau.length < 6) {
      errors.push("Mật khẩu bảo mật kém, phải dài hơn 6 ki tự");
    }
    if (taiKhoan.length < 5) {
      errors.push("Tài khoản phải dài ít nhất 5 kí tự");
    }
    if (soDt.length < 10) {
      errors.push("Vui lòng nhập đúng 10 số điện thoại");
    }
    return errors;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validate();

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }else{
      const result = await registerApi(state);
      // console.log(result.data.content);
      dispatch(setUserInfoAction(result.data.content));
      navigate("/");
      alert("Chúc mừng bạn đã đăng kí thành công")
    }
    
  };

  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">Sign Up</h1>
            <p className="text text-normal">
              You had an account?{" "}
              <span>
                <a
                  onClick={() => navigate("/login")}
                  className="text text-links text-info"
                >
                  Login
                </a>
              </span>
            </p>
          </div>
          <form name="signin" className="form" onSubmit={handleSubmit}>
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Account
              </label>
              <input
                type="text"
                name="taiKhoan"
                className="input-field"
                placeholder="Account"
                onChange={handleChange}
                defaultValue={state.taiKhoan}
              />
            </div>
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder="Password"
                name="matKhau"
                onChange={handleChange}
                defaultValue={state.password}
              />
            </div>
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                defaultValue={state.email}
              />
            </div>
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Phone Number
              </label>
              <input
                type="soDt"
                id="soDt"
                className="input-field"
                placeholder="Phone Number"
                name="soDt"
                onChange={handleChange}
                defaultValue={state.soDt}
              />
            </div>
            <div className="input-control">
              <label htmlFor="" className="input-label" hidden>
                Full Name
              </label>
              <input
                type="hoTen"
                id="hoTen"
                className="input-field"
                placeholder="Full Name"
                name="hoTen"
                onChange={handleChange}
                defaultValue={state.hoTen}
              />
            </div>

            <div className="input-control">
              <button className=" input-submit mx-auto">REGISTER</button>
            </div>
          </form>
          {errors.map((error) => (
            <p className="text-danger" key={error}>Lỗi*: {error}</p>
          ))}
        </section>
      </div>
    </main>
  );
}
