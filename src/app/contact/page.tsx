"use client";
import emailjs from "@emailjs/browser";
import { Formik } from "formik";
import * as yup from "yup";
import { Alert } from "flowbite-react";
import { useState } from "react";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
  message: yup.string().required("Message is required"),
});

export default function Home() {
  emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_EMAILJS,
  });
  const [alertOpen, setAlertOpen] = useState(false);
  const [formDisable, setFormDisable] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 w-12/12 relative  bg-gradient-to-r from-slate-500 to-slate-800">
      <Alert
        className={
          alertOpen
            ? "lg:w-6/12 w-full absolute top-38 mt-5 opacity-100 transition-opacity duration-500"
            : "lg:w-6/12 w-full absolute top-38 mt-5 opacity-0 transition-opacity duration-500"
        }
        color="success"
        onDismiss={() => setAlertOpen(false)}
      >
        <span className="font-medium">Thank you!</span> Your information has
        been sent off to me!
      </Alert>
      <div className="lg:w-7/12 w-full flex flex-col justify-center items-center bg-dark rounded-2xl lg:p-24 shadow-2xl shadow-slate-950">
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight text-center md:text-5xl xl:text-6xl text-resumeBlue">
          Contact Me
        </h1>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const res = await emailjs.send(
              "service_q99144h",
              "template_d8ucdgj",
              {
                from_name: values.name,
                reply_to: values.email,
                message: values.message,
              }
            );
            if (res && res.status === 200) {
              setAlertOpen(true);
              setFormDisable(true);
            }
          }}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              className="lg:w-10/12 w-full p-4 "
            >
              <div className="mt-4">
                <label className="block mb-2 text-lg font-medium text-light">
                  Name
                </label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  disabled={formDisable}
                  name="name"
                  className={
                    !formDisable
                      ? "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-700 disabled:border-gray-600 disabled::placeholder-gray-400 disabled:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      : "hidden"
                  }
                  placeholder="John"
                  required
                />
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  disabled={formDisable}
                  name="name"
                  className={
                    formDisable
                      ? "block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 :placeholder-gray-400 text-slate-400"
                      : "hidden"
                  }
                  placeholder="John"
                  required
                />
                {props.errors.name && (
                  <div id="feedback" className="text-red">
                    {props.errors.name}
                  </div>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-lg font-medium text-light dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  disabled={formDisable}
                  name="email"
                  className={
                    !formDisable
                      ? "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-700 disabled:border-gray-600 disabled::placeholder-gray-400 disabled:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      : "hidden"
                  }
                  placeholder="someone@someplace.com"
                  required
                />
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  disabled={formDisable}
                  name="email"
                  className={
                    formDisable
                      ? "block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 :placeholder-gray-400 text-slate-400"
                      : "hidden"
                  }
                  placeholder="someone@someplace.com"
                  required
                />
                {props.errors.email && (
                  <div id="feedback" className="text-red">
                    {props.errors.email}
                  </div>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-lg font-medium text-light dark:text-white">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={12}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.message}
                  disabled={formDisable}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-700 disabled:border-gray-600 disabled::placeholder-gray-400 disabled:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                  required
                ></textarea>
                {props.errors.message && (
                  <div id="feedback" className="text-red">
                    {props.errors.message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-resumeBlue rounded-lg  focus:ring-4  text-white  hover:bg-gray-700 focus:ring-gray-800 md:mx-7 m-5"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}
