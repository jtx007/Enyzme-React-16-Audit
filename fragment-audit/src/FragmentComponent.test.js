import React from 'react'
import {shallow} from 'enzyme'
import FragmentComponent from './FragmentComponent'

it('should render FragmentComponent', () => {
    const wrapper = shallow(<FragmentComponent />)
    expect(wrapper.exists()).toBe(true)
});



it('should have a key prop with a value of 1', () => {
    const wrapper = shallow(<FragmentComponent />)
    expect(wrapper.getElement().key).toBe("1")
})

it('should render multiple children', () => {
    const wrapper = shallow(<FragmentComponent />)
    expect(wrapper.children().getElements().length).toBeGreaterThan(0)
});

it('should render 3 children exactly', () => {
    const wrapper = shallow(<FragmentComponent />)
    expect(wrapper.children().getElements().length).toEqual(3)
});

