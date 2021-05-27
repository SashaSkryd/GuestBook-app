import React, { useEffect, useState } from "react"
import styles from "./GuestBook.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function GuestBook(props) {
  function validateComment(value) {
    let error
    if (!value) {
      error = "Required"
    }
    return error
  }

  function validateName(value) {
    let error
    if (value === "admin") {
      error = "Nice try!"
    }
    return error
  }

  const validationComment = Yup.object().shape({
    name: Yup.string()
      .required("this is required!")
      .min(2, "write full your name please!")
      .matches(/^[a-zA-Z-1234567890_]+$/, "Not in correct format"),
    comment: Yup.string().required("this is required!").min(2, "write pleace more!"),
  })

  const SubmitComment = (value) => {
    let data = {
      name: value.name,
      comment: value.comment,
    }
    value.name.length > 0 && value.comment.length > 0 && props.hendlerCommentNew(data)
    value.comment = ""
  }

  return (
    <Formik
      initialValues={{ name: "", comment: "" }}
      onSubmit={(value) => {
        SubmitComment(value)
      }}
      validationSchema={validationComment}
    >
      {(value) => (
        <Form
          onKeyPress={(e) => {
            if (e.ctrlKey && e.code === "Enter") {
              SubmitComment(value.values)
            }
          }}
        >
          <div className={styles.form}>
            <ErrorMessage name="name" component="span" className={styles.spanFormNameError} />
            <label htmlFor="name" className={styles.labelCommentForm}>
              Your name:
            </label>
            <Field
              className={styles.inputForm}
              type="name"
              name="name"
              placeholder="Write in this area"
              validate={validateName}
            />
            <ErrorMessage name="comment" component="span" className={styles.spanFormCommentError} />
            <label htmlFor="comment" className={styles.labelCommentForm}>
              Your comment:
            </label>
            <Field
              className={styles.textareaForm}
              as="textarea"
              type="comment"
              name="comment"
              placeholder="Write in this area"
              validate={validateComment}
            />
            <div className={styles.advertising}>
              <p className={styles.advertisingText}>Your ad could be here !</p>
              {props.message === 200 && <p className={styles.advertisingTextOk}>Ok, add your message !!!</p>}
              {props.message === 400 && <p className={styles.advertisingTextError}>Error try again !!!</p>}
            </div>
          </div>
          <button className={styles.buttonForm} type="submit">
            Add Comment
          </button>
        </Form>
      )}
    </Formik>
  )
}
