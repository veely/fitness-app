import React from 'react'
import axios from 'axios'


const BlogEntry = (props) => {
  return (
    <div>
      <article className="container">
        <header>
          <h3>{props.blog.title}</h3>
        </header>
          <p>{props.blog.content}</p>
        <footer>
          <div>icon like here</div>
        </footer>
      </article>
    </div>
  )
}

export default BlogEntry