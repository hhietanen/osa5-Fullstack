import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Blog from './Blog'
import Moreable from './Moreable'

describe('<Moreable />', () => {
    const blog = {
      title: 'Blogin nimi tässä',
      author: 'Keijo Kirjailija',
      likes: 3,
      url: 'www.osoite.com'
    }

//  it('after clicking name the details are displayed', () => {


//    const blogComponent = shallow(<Moreable key="11" blog={blog} />)

 let moreableComponent

  beforeEach(() => {
    moreableComponent = shallow(
      <Moreable author={blog.author} title={blog.title}>
    <div>
    <p>{blog.likes} likes
    <button>like</button>
    </p>
    <p>{blog.url} </p>
    <p>{blog.id} {blog.user !== undefined ? blog.user.name : ''} </p>
    </div>  
      </Moreable>
    )
  })
  
  it('renders its children', () => {
       console.log(moreableComponent.debug())
    expect(moreableComponent.contains( <button>like</button>)).toEqual(true)
  })


  it('at start the children are not displayed', () => {
    const div = moreableComponent.find('.moreContent')
    expect(div.getElement().props.style).toEqual({ display: 'none' })
  })

  it('after clicking the button, children are displayed', () => {
    const button = moreableComponent.find('.content')
    let div = moreableComponent.find('.moreContent')
    expect(div.getElement().props.style).toEqual({ display: 'none' })
    button.at(0).simulate('click')
//    console.log(moreableComponent.debug())
    div = moreableComponent.find('.moreContent')
    expect(div.getElement().props.style).toEqual({ display: '' })

    const div2 = moreableComponent.find('.childContent')
    expect(div2.text()).toContain(blog.url)
    console.log(div2.debug())
  })

})

// 5.14 blogilistan testit, osa 3
// Tee oman sovelluksesi komponentille 
// Blog testit, jotka varmistavat, että 
// oletusarvoisesti blogista on näkyvissä 
// ainoastaan nimi ja kirjoittaja, ja että 
// klikkaamalla niitä saadaan näkyviin myös 
// muut osat blogin tiedoista.
// 

