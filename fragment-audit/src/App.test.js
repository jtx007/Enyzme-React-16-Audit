import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";


it('should render App Component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true)
});

it('should have two children', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.children().getElements().length).toBe(2)
})
