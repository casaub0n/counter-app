import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Hello from '../src/components/hello'

configure({ adapter: new Adapter })

test('hello world', () => {
  const wrapper = shallow(<Hello />)
  expect (wrapper.contains(<div>Hello</div>)).toEqual(true)
})
