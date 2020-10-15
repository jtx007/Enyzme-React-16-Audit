import React from 'react';
import Modal from './Modal'
import App from './App'
import {shallow, mount, render} from 'enzyme'

it('should render Modal component depending on props', () => {
    const appWrapper = shallow(<App />)
    const modalTriggerButton = appWrapper.find('.show-modal-button')
    const isModalOpen = true
    const modalWrapper = shallow(<Modal isOpen={false} />);
    console.log(modalWrapper.getElements())
    
});
