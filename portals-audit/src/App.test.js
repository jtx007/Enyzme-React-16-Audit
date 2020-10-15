import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";

it("should render App component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true)
});

it("should render a button with text 'Show Modal ", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('.show-modal-button')
  expect(button.exists()).toBe(true)
  expect(button.text()).toBe('Show Modal')
});

it('modal is in app component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("Modal").exists()).toBe(true)
});

