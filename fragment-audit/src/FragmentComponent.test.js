import React, { Fragment } from "react";
import { render, shallow, mount } from "enzyme";
import FragmentComponent from "./FragmentComponent";

it("should render FragmentComponent", () => {
  const wrapper = shallow(<FragmentComponent />);
  expect(wrapper.exists()).toBe(true);
});

it("should have a key prop with a value of 1", () => {
  const wrapper = shallow(<FragmentComponent />);
  expect(wrapper.getElement().key).toBe("1");
});

it("should render multiple children", () => {
  const wrapper = shallow(<FragmentComponent />);
  expect(wrapper.children().getElements().length).toBeGreaterThan(0);
});

it("should render 3 children exactly", () => {
  const wrapper = shallow(<FragmentComponent />);
  expect(wrapper.children().getElements().length).toEqual(3);
});

it("should have no parent element for children in rendered HTML", () => {
  const wrapper = shallow(<FragmentComponent />);
  expect(wrapper.html()).toBe(
    '<div class="fragment-child">Child 1</div><div class="fragment-child">Child 2</div><div class="fragment-child">Child 3</div>'
  );
});

it("fragment should be parent of child elements and exist in html-like string", () => {
  const wrapper = shallow(<FragmentComponent />);
  expect(wrapper.debug().search("<Fragment>")).toBeGreaterThan(-1);
  expect(wrapper.debug().search("</Fragment>")).toBeGreaterThan(-1);
});
