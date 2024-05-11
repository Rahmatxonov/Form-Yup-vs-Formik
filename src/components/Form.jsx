import React from "react";
import "../components/Form.css";
import { useFormik } from "formik";
import { userSchema } from "../validation/UserValidation";

const Form = () => {
  const formSubmit = async (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        lastName: "",
        email: "",
        password: "",
      },
      validationSchema: userSchema,
      onSubmit: formSubmit,
    });

  return (
    <div className="code flex flex-wrap justify-center sm:text-center">
      <div className="text">
        <h1 className="h1 text-white font-bold text-[50px] leading-[55px] pb-5">
          Learn to code by watching others
        </h1>
        <p className="text-white font-semibold text-[16px] leading-[26px]">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="free">
        <div className="line text-white text-[15px] leading-[26px]">
          <span className="font-bold text-[15px] leading-[26px]">
            Try it free 7 days
          </span>{" "}
          then $20/mo. thereafter
        </div>
        <form onSubmit={handleSubmit} className="load">
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            className={`create block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
              errors.name && touched.name
                ? "error border-red-500 placeholder:text-red-500"
                : ""
            }`}
            placeholder="Name"
            type="text"
            name="name"
          />
          {errors.name && touched.name && (
            <p className="error-text text-red-500 font-semibold">
              {errors.name}
            </p>
          )}
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lastName}
            className={`create block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
              errors.lastName && touched.lastName
                ? "error border-red-500 placeholder:text-red-500"
                : ""
            }`}
            placeholder="LastName"
            type="text"
            name="lastName"
          />
          {errors.lastName && touched.lastName && (
            <p className="error-text text-red-500 font-semibold">
              {errors.lastName}
            </p>
          )}
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            className={`create block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
              errors.email && touched.email
                ? "error border-red-500 placeholder:text-red-500"
                : ""
            }`}
            placeholder="Email Adress"
            type="email"
            name="email"
          />
          {errors.email && touched.email && (
            <p className="error-text text-red-500 font-semibold">
              {errors.email}
            </p>
          )}
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            className={`create block w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
              errors.password && touched.password
                ? "error border-red-500 placeholder:text-red-500"
                : ""
            }`}
            placeholder="Password"
            type="password"
            name="password"
          />
          {errors.password && touched.password && (
            <p className="error-text text-red-500 font-semibold">
              {errors.password}
            </p>
          )}
          <button className="btn" type="submit">
            CLAIM YOUR FREE TRIAL
          </button>
          <div className="small font-medium text-[11px] leading-[26px] text-red-500 text-center pt-2">
            <span className="text-slate-300">
              By clicking the button, you are agreeing to our
            </span>{" "}
            <a href="#">Terms and Services</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
