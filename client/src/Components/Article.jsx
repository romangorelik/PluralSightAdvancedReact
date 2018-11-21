import React from 'react'

const Article = (props) => {
  const {article, author} = props
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>
        <a href={author.website} target='_blank'>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  )
}

export default Article