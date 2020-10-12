import React from 'react'
import { shallow } from 'enzyme'
import EmptyFragment from './EmptyFragment'

it("should render component", () => {
  const wrapper = shallow(<EmptyFragment/>)
  expect(wrapper.exists()).toBe(true)

})

it("should have an empty className", () => {
  const wrapper = shallow(<EmptyFragment />) 
  expect(wrapper.hasClass("")).toBe(true)

})

it("should have no child elements", () => {
  const wrapper = shallow(<EmptyFragment />);
  expect(wrapper.children().getElements().length).toBe(0)
});

// TODO: Find a way to check the type of wrapper element

// it("wrapper should be of type fragment", () => {
//   const wrapper = shallow(<EmptyFragment />);
//   console.log(wrapper.getElement().type === Symbol(react.fragment))
// })

