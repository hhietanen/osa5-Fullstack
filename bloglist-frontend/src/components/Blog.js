import React from 'react'
import Moreable from './Moreable'





const Blog = ({key, blog, user, addLike}) => {

const updateLikes = ( blog) => {
        return () =>{
        	let key1 = blog.id !== undefined ? blog.id : blog._id
//        	console.log(key1)
         addLike(key1, blog)
      }
    }

	return(
	<Moreable author={blog.author} title={blog.title}>
	  <div>
		<p>{blog.likes} likes
		<button onClick={updateLikes(blog)}>like</button>
		</p>
		<p>{blog.url} </p>
		<p>{blog.id} {blog.user !== undefined ? blog.user.name : ''} </p>
	  </div>  
	</Moreable>  
	)
}

export default Blog