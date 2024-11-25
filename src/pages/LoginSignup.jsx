import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./css/LoginSignup.css";

const LoginSignup = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      agree: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      agree: Yup.boolean().oneOf(
        [true],
        "You must agree to the terms and privacy policy"
      ),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="loginsignup-agree">
            <input
              type="checkbox"
              name="agree"
              checked={formik.values.agree}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
            {formik.touched.agree && formik.errors.agree ? (
              <div className="error">{formik.errors.agree}</div>
            ) : null}
          </div>

          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
