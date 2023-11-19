import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import user from "../assets/images/user.svg";
import Password from "../assets/images/password.svg";
import Swich from "../assets/images/Vector.png";
import { useDispatch } from "react-redux";
import { signIn } from "../redux-toolkit/authSlice/extraReducer"
import { useLocation } from "../hook/use-location";
import { Formik, Form, Field } from 'formik';
import "./signIn.scss";

export default function Login() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  })
  useLocation()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({ userData }));
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

          <Formik
            initialValues={{ name: userData.username, password: userData.password }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'username kiritish majburiy';
                errors.password = 'password kiritish majburiy';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 4000);
            }}
          >
            {({ isSubmitting }) => (
              <Form method="post" onSubmit={(e) => handleSubmit(e)}
              >

                <div className="SignIn_form_inputs_name">
                  <img src={user} alt="user" />
                  <Field className="SignIn_form_inputs_name_style"
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, username: e.target.value }))
                    }
                    placeholder="Foydalanuvchi nomini kiriting"
                    type="text"
                    name="name"
                    value={userData.username}
                  />
                  {/* <ErrorMessage name="name" component="div" className="error-message" /> */}
                </div>

                <div className="SignIn_form_inputs_name">
                  <img src={Password} alt="Password" />
                  <Field className="SignIn_form_inputs_name_style"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    placeholder="Iltimos, parolingizni kiriting"
                    type="password"
                    name="password"
                    value={userData.password}
                  />
                  {/* <ErrorMessage name="password" component="div" className="error-message" /> */}
                </div>
                <button type="submit" className="SignIn_form_inputs_send" disabled={isSubmitting}>Tizimga kirish</button>
              </Form>
            )}
          </Formik>

          {/* <form method="post" onSubmit={(e) => handleSubmit(e)}>
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
                placeholder="Iltimos, parolingizni kiriting"
              />
            </div>
            <button className="SignIn_form_inputs_send">Tizimga kirish</button>
          </form> */}
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

