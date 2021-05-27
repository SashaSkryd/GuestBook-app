import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styles from "./Comments.module.css"
import transitionGroup from "./TransitionGroup.module.css"

export default function Comments(props) {
  return (
    <TransitionGroup component="ul" className={styles.container}>
      {props.comments.map((el) => {
        return (
          <CSSTransition key={el._id} timeout={500} classNames={transitionGroup}>
            <li key={el._id} className={styles.itemForm}>
              <div className={styles.wrapper}>
                <p>
                  <span className={styles.itemFormText}>Said: </span>
                  {el.name}
                </p>
                <p>
                  <span className={styles.itemFormText}>in </span> {el.time}
                </p>
              </div>
              <p>
                <span className={styles.itemFormText}>Comment: </span>
                {el.comment}
              </p>
            </li>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}
