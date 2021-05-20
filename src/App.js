import React, { Component } from "react"
import GuestBook from "./components/GuestBook/GuestBook.jsx"
import Comments from "./components/Comments/Comments.jsx"
import styles from "./App.module.css"
import axios from "axios"

class App extends Component {
  state = {
    comments: [],
  }
  componentDidMount() {
    axios
      .get("/comments")
      .then((res) => {
        this.setState({ comments: res.data.reverse() })
      })
      .catch((error) => console.log(error))
  }

  hendlerCommentNew = (data) => {
    const dataJSON = JSON.stringify(data)
    axios
      .post("/comments/add", dataJSON, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        this.setState({
          comments: res.data.reverse(),
        })
      })
      .catch((error) => console.log(error))
  }

  render() {
    const comments = this.state.comments
    return (
      <div className={styles.container}>
        <h1>Welcome to the guest book!</h1>
        <GuestBook hendlerCommentNew={this.hendlerCommentNew} />
        {comments && <Comments comments={comments} />}
      </div>
    )
  }
}

export default App
