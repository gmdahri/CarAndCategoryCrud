import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../store/actions/UserAction";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Your email must consist of at least 3 characters ")
    .max(50, "Your email must consist of at least 3 characters ")
    .required("Please enter a email"),
  password: Yup.string()
    .min(5, "Your password must be at least 5 characters long")
    .max(50, "Your password must be at least 5 characters long")
    .required("Please provide a password"),
});
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(false)
  useEffect(()=>{
    setShow(true)
  },[])
  return (
    <>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>your password has been sent to your email.</Toast.Body>
        </Toast>
      </div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Please Login</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values)
                dispatch(userLoginAction(values, navigate))
                resetForm();
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                resetForm,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div
                    className={`form-group mb-3 ${values.email
                        ? errors.email
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                      }`}
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="val-username1"
                        placeholder="Enter a email.."
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <div
                        id="val-email1-error"
                        className="invalid-feedback animated fadeInUp"
                        style={{ display: "block" }}
                      >
                        {errors.email && errors.email}
                      </div>

                      <div
                        id="val-email1-error"
                        className="invalid-feedback animated fadeInUp"
                        style={{ display: "block" }}
                      />
                    </div>
                  </div>
                  <div
                    className={`form-group mb-3 ${values.password
                        ? errors.password
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                      }`}
                  >
                    <div className="input-group transparent-append mb-2">
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        className="form-control"
                        id="val-password1"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        onError={(event) => { console.log("hi", event) }}
                        placeholder="Choose a safe one.."
                      />

                      <div
                        className="input-group-text "
                        onClick={() => setShowPassword(!showPassword)}
                      >

                        {" "}
                        {showPassword === false ? (<i className="fa fa-eye-slash" />) : (<i className="fa fa-eye" />)}

                      </div>
                      <div
                        id="val-email1-error"
                        className="invalid-feedback animated fadeInUp"
                        style={{ display: "block" }}
                      >
                        {errors.password && errors.password}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn me-2 btn-success"
                    disabled={isSubmitting}
                  >
                    login
                  </button>
                  <button className="btn btn-primary" onClick={() => navigate('/signup')}>
                    Register
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login