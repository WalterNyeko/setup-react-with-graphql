import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../../../containers/home/HomePage';
import AppBar from '@material-ui/core/AppBar';
import { createShallow } from '@material-ui/core/test-utils';

describe('HomePage',() =>{
    
    const wrapper = mount(<HomePage/>);
    it('renders homepage without crashing', () => {
        expect(wrapper.find(AppBar)).toHaveLength(1);
    });

    // it('opens the drawer when drawer opener is clicked', () => {
    //     console.log(wrapper.instance())
    //     const spy = jest.spyOn(wrapper.instance(), 'handleDrawerOpen');
    //     wrapper.instance().forceUpdate();
    // });
})

