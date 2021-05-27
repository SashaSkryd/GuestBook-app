import React, { useState, useEffect } from "react"
import GuestBook from "./components/GuestBook/GuestBook.jsx"
import Comments from "./components/Comments/Comments.jsx"
import styles from "./App.module.css"
import axios from "axios"
import { CSSTransition } from "react-transition-group"
import appAnimation from "./AppAnimation.module.css"

export default function App() {
  const [comments, setComments] = useState([])
  const [message, setMessage] = useState("")
  useEffect(() => {
    axios
      .get("/comments")
      .then((res) => {
        setComments( res.data.reverse() )
      })
      .catch((error) => console.log(error))
  },[])

  const hendlerCommentNew = (data) => {
    const dataJSON = JSON.stringify(data)
    axios
      .post("/comments/add", dataJSON, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
      
        setComments( [res.data, ...comments] )
        setMessage( res.status )
      })
      .catch((error) => {
        setMessage( 400 )
      })
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the guest book!</h1>
      <GuestBook hendlerCommentNew={hendlerCommentNew} message={message} />
      {
        <CSSTransition in={!!comments[0]} classNames={appAnimation} timeout={250} unmountOnExit>
          <Comments comments={comments} />
        </CSSTransition>
      }
    </div>
  )
}
