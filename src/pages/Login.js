import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

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
const Login =() =>{
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="card">
            <div className="card-header">
              <h4 className="card-title">Please Login</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={loginSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div
                        className={`form-group mb-3 ${
                          values.email
                            ? errors.email
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        }`}
                      >
                        <label className="text-label">email</label>
                        <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa fa-user" />{" "}
                            </span>
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
                        className={`form-group mb-3 ${
                          values.password
                            ? errors.password
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        }`}
                      >
                        <label className="text-label">Password *</label>
                        <div className="input-group transparent-append mb-2">
                          
                            <span className="input-group-text">
                              {" "}
                              <i className="fa fa-lock" />{" "}
                            </span>
                          
                          <input
                            type={`${showPassword ? "text" : "password"}`}
                            className="form-control"
                            id="val-password1"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            onError={(event)=>{console.log("hi",event)}}
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
                      <button  className="btn btn-primary" onClick={()=>navigate('/signup')}>
                        Register
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
    )
}
export default Login