import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userSignUpAction } from "../store/actions/UserAction";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .max(50, "Your email must consist of at least 3 characters ")
    .required("Please enter a email"),
});
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Please Signup</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <Formik
              initialValues={{ email: "", }}
              validationSchema={loginSchema}
              onSubmit={(values, { resetForm }) => {
                dispatch(userSignUpAction(values,navigate))
                resetForm()
                
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
                  <button
                    type="submit"
                    className="btn me-2 btn-primary"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                  <button className="btn btn-success" onClick={()=>navigate('/login')}>
                    login
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
export default Signup   