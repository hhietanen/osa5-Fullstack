import React from 'react'
import Togglable from './components/Togglable'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      newNote:'',
      user: null,
      error: '',
      title: '',
      url: '',
      author: ''
    }
  }


// 15.5. 3 tuntia tehtäviin 5.1. ja 5.2.
// 12.8. 1 tunti vanhojen juttujen ihmettelyyn ja 5.2. tehtävän korjaamiseen.
// Pisimpään meni 5.3. serverin uudelleenkäynnistyksen ihmettelyyn
// 5.3 ja 5.4. olivat valmiina 2h 30 min aloituksen jälkeen.
// 5.5. tekemiseen meni 30 min. Isoin ihmettelyn aihe oli komponentin
// tekeminen renderin sisälle. Jaa menikin sitten 30 minuuttia lisää tuon 
// togglable opettelun kanssa
// 5.6. tekee mitä pitääkin. noh - blogin nimi ei päädy tuonne laatikkoon.
// Joku voisi olla siitä vihainen :( Minä en :) -- Jaa homma toimii nyt.
// 5.7. tehty. Backend ei tosin ihan samaa kamaa tuota tuolla putilla palvelimelle.
// 
// 5.8. tehty. Jotain häikkää tosin sortissa. Tai voi olla Filterissä kun se poistaa
// silloin tällöin blogeja state.blogsista....
// 5.6- 5.8. tekemiseen meni about 7 tuntia. Siitä suurin osa kertaamiseen.
// Blogin poistamiseen tarvittava 5.9. ja 5.10 jäävät väliin. 
// 5.11. tehtävän teko alkoi 23:27 Valmista tuli 23:41
// 
// 11:30 testuksen lukeminen alkaa. 30 minuutin lukemisella testauksen alku sisäistetty
// Valmista on 18:00. Välissä 3 tuntia muuta säätöä. Tehtävät 5.12-5.14.
// Yhteensä 90 tehtävää tehty...
// 21:40 alkaa formien testaustehtävän opiskelu.
// 20.8. 5.15. tehty
// 

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({blogs})
 )

    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({user})
     blogService.setToken(user.token)
    }
  } 

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleBlogChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addLike = (key, blog) => {
    return (key, blog) => {
      // Lisää yhden liken blogille
      blog.likes++

      //Varmistaa, että myös olematon käyttäjän osalta lisätään user
//      let idx = blog.user === undefined ? '': blog.user._id
      let changedBlog = {
          author: blog.author,
          id: key,
          likes: blog.likes,
          title: blog.title,
          url: blog.url,
          user: key
          }
          console.log(changedBlog)
      blogService
        .update(key, changedBlog)
        .then(changedBlog => {
          let blogs = this.state.blogs
          console.log(blogs)
          blogs = blogs.filter(n => n.id !== blog.id)
          console.log('Filtteröidyt' , blogs)
          blogs= blogs.concat(changedBlog)
          
            const blogsInOrder = 
            blogs.sort(function (a, b) {
              return a.likes - b.likes
            })
            console.log(blogsInOrder)

          this.setState({
            blogs: blogsInOrder
          })

          }
          )
      .catch(error => {
        console.log('Failed:' , error)
      })
      }
  }

  logOut = async (event) => {
    event.preventDefault()
    try {window.localStorage.removeItem('loggedBlogappUser')
    this.setState({user: null})
    console.log('Jahuu logged out')

} catch (exception){
  console.log(exception)}
}

login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })


    window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
    blogService.setToken(user.token)
    this.setState({ username: '', password: '', user})
  } catch(exception) {
  this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }


 blogs = () => (
    <div>
    {this.state.user.name} on kirjautunut sisälle
    <button onClick={this.logOut}>Kirjaudu ulos</button>
      <h2>blogit</h2>
      {this.state.blogs.map(blog =>
        <Blog 
          key={blog.id !== undefined ? blog.id : blog._id}
          blog={blog}
          user={this.state.user}
          addLike={this.addLike()}/>
      )}
    </div>
  )


errorMessage = () =>(
  <div>
  {this.state.error}
  </div>
  )


  addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      author: this.state.author,
      title: this.state.title,
      url: this.state.url
    }


    blogService
      .create(blogObject)
      .then(newBlog => {
        this.setState({
          blogs: this.state.blogs.concat(newBlog),
          title: '',
          url: '',
          author: '',
          newBlog: '',
        error: 'Uusi blogi lisätty'
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
      this.blogForm.toggleVisibility()
      })
  }




render() {
    return (
      <div>
        <div>
          {this.state.error !== null && this.errorMessage()}
        </div>

        {this.state.user === null ?
          <p>Et ole kirjautunut sisälle palveluun</p> :
          <div>
            {this.blogs()}
          </div>
        }

        <div>
          {this.state.user === null ?
            <Togglable buttonLabel="login">
              <LoginForm
                username={this.state.username}
                password={this.state.password}
                handleChange={this.handleLoginFieldChange}
                handleSubmit={this.login}
              />
            </Togglable>      :
            <Togglable buttonLabel="Uusi blogi" ref={component => this.blogForm = component}>
              <BlogForm
                title={this.state.title}
                url={this.state.url}
                author={this.state.author}
                handleChange={this.handleBlogChange}
                onSubmit={this.addBlog}
              />
            </Togglable>  
          }
        </div>
      </div>
    )

  }
}
export default App;
