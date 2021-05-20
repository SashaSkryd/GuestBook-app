import React, { Component } from "react"
import styles from "./Comments.module.css"

class Comments extends Component {
  render() {
    const data = this.props.comments
    return (
      <>
        <ul className={styles.container}>
          {data.map((el) => {
            return (
              <li key={el._id} className={styles.itemForm}>
                <p>
                  <span className={styles.itemFormText}>Said: </span>
                  {el.name} <span className={styles.itemFormText}>in</span> {el.time}
                </p>
                <p>
                  <span className={styles.itemFormText}>Comment: </span>
                  {el.comment}
                </p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default Comments
