import React from 'react'
const BlogForm = ({ onSubmit, handleChange, title, url, author}) => {
  return (
    <div>
    <h2>Luo uusi blogi</h2>

    <form onSubmit={onSubmit}>
    Nimi
      <input
      type="text"
      name="title"
      value={title}
      onChange={handleChange}
      />
    Tekijä
      <input
      type="text"
      name="author"
      value={author}
      onChange={handleChange}
      />
      URL
      <input
      type="text"
      name="url"
      value={url}
        onChange={handleChange}
      />

      <button type="submit">tallenna</button>
    </form>
  </div>
  )
}
export default BlogForm