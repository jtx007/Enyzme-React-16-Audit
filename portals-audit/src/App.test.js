import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";
import Modal from "./Modal"

it("should render App component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true)
});

it("should render a button with text 'Show Modal ", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('.open-modal-btn')
  expect(button.exists()).toBe(true)
  expect(button.text()).toBe('Open Modal')
});

// it('modal is in app component', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.find("Modal").exists()).toBe(true)
// });

it('isModalOpen state should update to true', () => {
  const openModalBtn = shallow(<App />).find('.open-modal-btn')
  openModalBtn.simulate('click')
  const wrapper = shallow(<App />);
  const mockCb = jest.fn()
  console.log(mockCb)

})