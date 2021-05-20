import React, { Component } from "react"
import styles from "./GuestBook.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

class GuestBook extends Component {
  SubmitComment = (value) => {
    let name = value.name
    let comment = value.comment
    let data = {
      name: name,
      comment: comment,
    }
    this.props.hendlerCommentNew(data)
  }

  validationComment = () =>
    Yup.object().shape({
      name: Yup.string().required("This text area is required").min(2, "Write full your name  please"),
      comment: Yup.string().required("This text area is required").min(2, "Write pleace more"),
    })

  render() {
    return (
      <Formik
        initialValues={{ name: "", comment: "" }}
        validationComment={this.validationComment}
        onSubmit={(value, { resetForm }) => {
          this.SubmitComment(value)
          resetForm()
        }}
      >
        {({ resetForm }) => (
          <Form>
            <div className={styles.form}>
              <ErrorMessage name="name" component="span" />
              <label htmlFor="name">Write here your name:</label>
              <Field className={styles.inputForm} type="name" name="name" placeholder="Write in this area" />
              <ErrorMessage name="comment" component="span" />
              <label htmlFor="comment">Write here your comment:</label>
              <Field
                className={styles.textareaForm}
                as="textarea"
                type="comment"
                name="comment"
                placeholder="Write in this area"
              />
            </div>
            <button className={styles.buttonForm} type="submit">
              Add Comment
            </button>
          </Form>
        )}
      </Formik>
    )
  }
}

export default GuestBook
