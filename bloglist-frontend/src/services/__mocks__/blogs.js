let token = null

const blogs = [
  {
    id: "5a451df7571c224a31b5c8ce",
    url: 'juttu',
    title: "HTML on helppoa",
    author: "Harri hämääjä",
    likes: 1,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "DBimobo",
      name: "Kikko kuu"
    }
  },
  {
    id: "5a451e21e0b8b04a45638211",
    url: 'juttu',
    title: "Selain pystyy suorittamaan vain javascriptiä",
    author: "Harri hämääjä",
    likes: 2,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "DBimobo",
      name: "Kikko kuu"
    }
  },
  {
    id: "5a451e30b5ffd44a58fa79ab",
    url: 'juttu',
    title: "HTTP-protokollan tärkeimmät metodit ovat GET ja POST",
    author: "Harri hämääjä",
    likes: 3,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "DBimobo",
      name: "Kikko kuu"
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

export default {getAll, blogs }