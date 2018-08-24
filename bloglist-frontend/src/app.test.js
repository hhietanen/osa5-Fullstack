import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })


  it('does not render any blogs before logging in', () => {
    app.update()
    console.log(app.debug())
    const blogComponents = app.find(Blog)
    expect(blogComponents.length).toEqual(0)
  })

})
  