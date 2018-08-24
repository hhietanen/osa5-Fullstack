import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders content', () => {
    const blog = {
      title: 'Blogin nimi tässä',
      author: 'Keijo Kirjailija',
      likes: 3
    }

    const blogComponent = shallow(<SimpleBlog blog={blog} />)

    const contentDiv = blogComponent.find('.content')
//	console.log(contentDiv.debug())
    expect(contentDiv.text()).toContain(blog.title)

    const likesDiv = blogComponent.find('.likes')
//	console.log(likesDiv.debug())
    expect(likesDiv.text()).toContain(blog.likes)
  })

it('clicking the button twice calls event handler twice', () => {

    const blog = {
      title: 'Blogin nimi tässä',
      author: 'Keijo Kirjailija',
      likes: 3
    }

  const mockHandler = jest.fn()
  const blogComponent = shallow(<SimpleBlog blog={blog} onClick={mockHandler}/>)
	//console.log(blogComponent.debug())

  const button = blogComponent.find('button')
  button.simulate('click')
  button.simulate('click')

  expect(mockHandler.mock.calls.length).toBe(2)

})


})

//5.12 blogilistan testit, osa 1
//Tee testi, joka varmistaa, että komponentti renderöi 
//blogin titlen, authorin ja likejen määrän.
//Lisää komponenttiin tarvittaessa testausta
//helpottavia CSS-luokkia.