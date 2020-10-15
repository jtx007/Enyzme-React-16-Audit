import React, { Fragment } from "react";
import { shallow, mount } from "enzyme";
import EmptyFragment from "./EmptyFragment";

it("component should exist", () => {
  const wrapper = shallow(<EmptyFragment />);
  expect(wrapper.exists()).toBe(true);
});

it("should have an empty className", () => {
  const wrapper = shallow(<EmptyFragment />);
  expect(wrapper.hasClass("")).toBe(true);
});

it("should have no child elements", () => {
  const wrapper = shallow(<EmptyFragment />);
  expect(wrapper.children().getElements().length).toBe(0);
});

it("should have empty string html", () => {
  const wrapper = shallow(<EmptyFragment />);
  expect(wrapper.html()).toBe("");
});

it('should mount fragment', () => {
  const wrapper = mount(<Fragment><div>child 1</div></Fragment>)
  expect(wrapper.exists()).toBe(true)
});


it("should have no parent element for children in rendered HTML", () => {
  const wrapper = shallow(<EmptyFragment />);
  expect(wrapper.html()).toBe("");
});

// TODO: write an assertion to test the type of react element that renders
// ! it('should be type fragment', () => {
//   const wrapper = shallow(<EmptyFragment />);
//   expect(wrapper.type()).toBe(Symbol(React.Fragment))
// });
