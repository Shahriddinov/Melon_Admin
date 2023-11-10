import React, { useState } from "react";
import "./SignIn.scss";
import Logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.svg";
import Password from "../../../assets/images/password.svg";
import Swich from "../../../assets/images/Vector.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../redux-toolkit/authSlice/extraReducer";

function SignIn(props) {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const error = useSelector((state) => state.authSlice.error);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userData));
  };

  return (
    <div className="SignIn">
      <div className="SignIn_form">
        <img src={Logo} alt="" />
        <div className="SignIn_form_inputs">
          <div className="SignIn_form_inputs_title">Project melon..</div>
          <div className="SignIn_form_inputs_text">
            Admin panle Project melon..
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="SignIn_form_inputs_name">
              <img src={user} alt="user" />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, username: e.target.value }))
                }
                className="SignIn_form_inputs_name_style"
                type="name"
                name="name"
                placeholder="Foydalanuvchi nomini kiriting"
              />
            </div>
            <div className="SignIn_form_inputs_name">
              <img src={Password} alt="Password" />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                className="SignIn_form_inputs_name_style"
                type="password"
                name="password"
                placeholder="Iltimos, parolingizni kiriting    "
              />
            </div>
            <button className="SignIn_form_inputs_send">Tizimga kirish</button>

          </form>
          {/* <Link to="/admin/Teacher">
          </Link> */}
        </div>
        <div className="SignIn_form_end">2023 Project melon....</div>
      </div>
      <div className="SignIn_fon">
        <div className="SignIn_fon_swich">
          <img src={Swich} alt="" />
          <div className="SignIn_fon_melon">MELON</div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
