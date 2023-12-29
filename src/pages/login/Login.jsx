import { notification } from "antd";
import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { loginApi } from "../../services/user";
import { setUserInfoAction } from "../../store/actions/userAction";
import "./login.scss";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await loginApi(state);
      // console.log(result);
      dispatch(setUserInfoAction(result.data.content));
      localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data.content));
      navigate("/");
    }catch(e){
      notification.error({
        message: e?.data?.content || "Sai tên đăng nhập hoặc mật khẩu !!!",
      });
    }
   

  };

  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">Sign In</h1>
            <p className="text text-normal">
              New user?{" "}
              <span>
                <a onClick={() => navigate("/register")} className="text text-links text-info">
                  Create an account
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
              />
            </div>
            <div className="input-control">
              <button className=" input-submit ">LOGIN</button>

              <a href="#" className="text text-links text-info">
                Forgot Password
              </a>
            </div>
          </form>
          <div className="striped">
            <span className="striped-line" />
            <span className="striped-text">Or</span>
            <span className="striped-line" />
          </div>
          <div className="method">
            <div className="method-control">
              <a href="#" className="method-action">
                <span>Sign in with Google</span>
              </a>
            </div>
            <div className="method-control">
              <a href="#" className="method-action">
                <span>Sign in with Facebook</span>
              </a>
            </div>
            <div className="method-control">
              <a href="#" className="method-action">
                <span>Sign in with Apple</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
